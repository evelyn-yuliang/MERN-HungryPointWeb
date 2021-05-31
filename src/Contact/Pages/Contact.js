import React,{ useState } from 'react';
import axios from 'axios';
import "./Contact.css";
import '../Pages/bootstrap/dist/css/bootstrap.min.css';


const Contact = () => {
  const [formData, setFormData] = useState({
    name:'',
    email: '',
    message: '',
  });
  const [myMessage,setMyMessage] = useState([])
  const { name, email, message} = formData;
  const onChange2 = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit2 = async (e) => {
    e.preventDefault();
    console.log("Data before submit : name:"+name+" email:"+email+" message:"+message);
    let config = {
      headers: {
       'Content-Type': 'application/json',
      },
     };
     let data = {
      Name: name,
      Email: email,
      Message: message,
    };
    try {
      const response = await axios.post(
        'http://localhost:5000/api/contact',
        
        data,
        config
      );
       console.log(response);
      setMyMessage('Message sent successfully.');
     } catch (e) {
      console.log('error ', e);
      setMyMessage('Something went wrong');
     }
   };


 
  
 
    return(
      
      <div className="body">
        <h1>CONTACT US</h1>
       
        
          <form id="contact-form" onSubmit={(e) => onSubmit2(e)}>
          <div className="form-group">
          <label htmlFor="name">Name</label>
          <input className="form-control"
            type='name'
            placeholder='Name'
            name='name'
            value={name}
            onChange={(e) => onChange2(e)}
          />
        </div>
        
        <div className="form-group">
              <label htmlFor="exampleInputEmail1">Email</label>
          <input className="form-control"
            type='email'
            placeholder='Email '
            name='email'
            value={email}
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div className="form-group">
              <label htmlFor="message">Message</label>
          <input className="form-control"
            type='message'
            placeholder='Message'
            name='message'
            value={message}
          
            onChange={(e) => onChange2(e)}
          />
        </div>
        
          <button type="submit" className="btn btn-primary" value="submit">Submit</button>
        </form>
        {myMessage}
      </div>

);
  }

  



export default Contact;