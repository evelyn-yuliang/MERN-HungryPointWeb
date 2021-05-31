import React,{ useState } from 'react';
import axios from 'axios';
import "./Login.css";
import '../Pages/bootstrap/dist/css/bootstrap.min.css';

const Login = () => {
    const [formData, setFormData] = useState({
      email: '',
      password: '',
    });
    const [myMessage,setMyMessage] = useState([])
    const { email, password } = formData;
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
        Email: email,
        Password: password,
      };
      try {
        const response = await axios.post(
          'http://localhost:5000/api/login',
          data,
          config
        );
        
        console.log(response);
        setMyMessage('Login successfully.');
      } catch (e) {
        console.log('error ', e);
        setMyMessage('Something went wrong');
      }
    };
    
        return (
            
            
                <div className="body">
                <h1>Log In</h1>
                <form onSubmit={(e) => onSubmit2(e)}>

                
                <div className="form-group">
          <label htmlFor="email">Email</label>
          <input className="form-control"
            type='email'
            placeholder='Email'
            name='email'
            value={email}
            onChange={(e) => onChange2(e)}
          />
        </div>
        
        <div className="form-group">
              <label htmlFor="password">Password</label>
          <input className="form-control"
            type='password'
            placeholder='Password '
            name='password'
            value={password}
            onChange={(e) => onChange2(e)}
          />
        </div>
        
          
        

                <button type="submit" className="btn btn-primary btn-block">Submit</button>
                <p className="forgotpwd text-right">
                    Forgot <a href="signup">password?</a>
                </p>
                </form>
                {myMessage}
                </div>
            
            
        );
    }
    export default Login;