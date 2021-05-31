import React,{ useState } from 'react';
import axios from 'axios';
import decode from 'jwt-decode'

const OrderTrack = () => {
        const [formData, setFormData] = useState({
          id :'',
           address: '',   
           });
           const {id,address} = formData;
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
              id:id,
              address:address,
             };
             try {
      const response = await axios.post(
                 'http://localhost:5000/api/track',
                 data,
                 config
               );
               localStorage.setItem('token', response.data.token);
                console.log(response);
               let decodeduser = decode(response.data.token);
               console.log(decodeduser);
              } catch (e) {
               console.log('error ', e);
              }
            };
        return ( 
                <div className="body">
                <form onSubmit={(e) => onSubmit2(e)}>
                  <div className="form-group">
                      
                    <label>Enter ORDER ID:</label>
                    <input type="text" className="form-control" placeholder="Enter orderid" onChange={(e) => onChange2(e)} />
                </div>

                <div className="form-group">
                    <label>Enter Address:</label><br></br>
                    <input type="text" className="form-control" placeholder="Enter Address" onChange={(e) => onChange2(e)} />
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                
                
                <br>
                
                </br>
            </form>
            </div>
            
        );
    }

export default OrderTrack;