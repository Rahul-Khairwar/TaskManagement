import React, { useState } from 'react'
import Form from 'react-bootstrap/Form';
import { useNavigate } from 'react-router-dom';
import { FaUser, FaKey } from 'react-icons/fa';
import axios from 'axios';
import BASE_URL from '../config/Api';
import "../css/login.css"

const Login = () => {

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");

    const nav = useNavigate();

    const handleSubmit = async (e) =>{
        e.preventDefault();
        let api = `${BASE_URL}/user/login`;
        const res = await axios.post(api,{email,password});
        console.log(res.data)
        localStorage.setItem("user",res.data.User77.name);
        localStorage.setItem("email",res.data.User77.email);
        alert("login Done!!");
        nav("/dashboard")
    }

    const registration = () => {
    nav("/registration");
  };
  return (
    <>
      <div className="login-container">
      

      <div className="right-form">
        <Form className='form-box'>
          <Form.Group className="mb-3" controlId="formGroupEmail">
            <Form.Label>
              <FaUser style={{ marginRight: '8px' }} />
              Email Address
            </Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>{setEmail(e.target.value)}}/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formGroupPassword">
            <Form.Label>
              <FaKey style={{ marginRight: '8px' }} />
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>{setPassword(e.target.value)}} />
          </Form.Group>

          <h1 style={{ fontSize: "16px", marginTop: "20px" }}>
            If you don't have an account <br />
            <span onClick={registration} style={{ cursor: 'pointer', fontFamily: 'initial' }} className='log'>
              Register now!
            </span>
          </h1>

          <button type='submit' onClick={handleSubmit}>Submit</button>

        </Form>
      </div>
    </div>
    </>
  )
}

export default Login
