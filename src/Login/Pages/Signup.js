import React,{ useState } from 'react';
import axios from 'axios';
import "./Login.css";
import '../Pages/bootstrap/dist/css/bootstrap.min.css';

const Signup = () => {
    const [formData, setFormData] = useState({
      firstname: '',
      lastname: '',
      emailaddress: '',
      password: '',
    });
    const [myMessage,setMyMessage] = useState([])
    const { firstname,lastname,emailaddress, password } = formData;
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
        Firstname: firstname,
        Lastname: lastname,
        Emailaddress:emailaddress,
        Password:password,
      };
      try {
        const response = await axios.post(
          'http://localhost:5000/api/signup',
          data,
          config
        );
        console.log(response);
        setMyMessage(' User Signup successfully.');
      } catch (e) {
        console.log('error ', e);
        setMyMessage('Something went wrong');
      };
    };
    
    
        return (
            
                <div className="body">
                <h1>Sign Up</h1>
                <form onSubmit={(e) => onSubmit2(e)}>
                
                
                <div className="form-group">
          <label htmlFor="firstname">Firstname</label>
          <input className="form-control"
            type='firstname'
            placeholder='Firstname'
            name='firstname'
            value={firstname}
            onChange={(e) => onChange2(e)}
          />
        </div>
        
        <div className="form-group">
              <label htmlFor="lastname">Lastname</label>
          <input className="form-control"
            type='lastname'
            placeholder='Lastname '
            name='lastname'
            value={lastname}
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div className="form-group">
              <label htmlFor="emailaddress">Emailaddress</label>
          <input className="form-control"
            type='emailaddress'
            placeholder='Emailaddress '
            name='emailaddress'
            value={emailaddress}
            onChange={(e) => onChange2(e)}
          />
        </div>
        <div className="form-group">
              <label htmlFor="password">Password</label>
          <input className="form-control"
            type='password'
            placeholder='password '
            name='password'
            value={password}
            onChange={(e) => onChange2(e)}
          />
        </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
                <p className="forgotpwd text-right">
                    Already registered <a href="login">Login?</a>
                </p>
                
            </form>
            {myMessage}            
            </div>
        );
    
}
export default Signup;