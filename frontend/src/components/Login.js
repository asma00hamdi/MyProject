import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { login } from '../redux/Action/authAction';


const Login = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()


    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
   
    const handleLogin=(e)=>{
      e.preventDefault();
      dispatch(login({email,password}),
      navigate('/home')
      )}
  return (
    <div className='login'>
        <Form onSubmit={handleLogin}>
   <Card className='login'><TextField  className='register-input'
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)} value={email}
                  autoFocus/>
                <TextField className='name'
                  autoComplete="given-name"
                  name="Password"
                  required
                  id="password"
                  label="Password"
                  onChange={(e) => setPassword(e.target.value)} value={password}/>
              <Button style={{backgroundColor:"#9400D3" , borderColor:"white"}} type="submit">LogIn</Button>
              </Card>

        </Form>
        
    </div>

  )
}


export default Login
