import React,{ useState } from 'react';
import axios from 'axios';
import "./Payment.css";



const Payment = () => {
  const [formData, setFormData] = useState({
    cardholdername:'',
    cardnumber: '',
    expirationdate: '',
    cvv:'',
  });
  const [myMessage,setMyMessage] = useState([])
  const { cardholdername, cardnumber,expirationdate, cvv} = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();

    let config = {
      headers: {
       'Content-Type': 'application/json',
      },
     };
     let data = {
      Cardholdername: cardholdername,
      Cardnumber: cardnumber,
      Expirationdate: expirationdate,
      Cvv:cvv,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/payment',
        
        data,
        config
      );
     
       console.log(response);
       setMyMessage('Payment successfull.');
     
     } catch (e) {
      console.log('error ', e);
      setMyMessage('Something went wrong');
     }
   };


  
  
 
    return(
      <div className="app-container">
         <div className="row">
      <div className="col no-gutters">
      <div className="checkout">
        <h1>CHECKOUT</h1>
       
      
        
          <form id="checkout-container" onSubmit={(e) => onSubmit2(e)}>
          <div className="form-group">
          <label htmlFor="cardholdername">CardholderName</label>
          <input className="form-control"
            type='cardholdername'
            placeholder='CardholderName'
            name='cardholdername'
            value={cardholdername}
            onChange={(e) => onChange2(e)}
          />
        </div>
        
        <div className="form-group">
              <label htmlFor="cardnumber">CardNumber</label>
             
          <input className="form-control"
            type='cardnumer'
            placeholder='CardNumber'
            name='cardnumber' 
            value={cardnumber}
            onChange={(e) => onChange2(e)}
          />
        </div>
        
         
        <div className="row">
          <div className="col">
              <label htmlFor="expirationdate">ExpirationDate</label>
          <input className="form-control"
            type='expirationdate'
            placeholder='ExpirationDate'
            name='expirationdate'
            value={expirationdate}
          
            onChange={(e) => onChange2(e)}
          />
        </div>
        
        
        <div className="col">
              <label htmlFor="cvv">Cvv</label>
          <input className="form-control"
            type='cvv'
            placeholder='Cvv'
            name='cvv'
            value={cvv}
          
            onChange={(e) => onChange2(e)}
          />
        </div>
        </div>
          <button type="submit" className="checkout-btn" value="submit">Pay</button>
        </form>

      </div>
      </div>
      </div>
      {myMessage}
      </div>
   

    );
}


export default Payment;