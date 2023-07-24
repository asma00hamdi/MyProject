import React, { useState } from 'react'
import { Button, Card, Form } from 'react-bootstrap'
import { TextField } from '@mui/material';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router';
import { register } from '../redux/Action/authAction';

const Register  = ()=> {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [firstname,setFirstame] = useState('')
    const [lastname,setLastname] = useState('')
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [gender,setGender] = useState('')
    const [role,setRole] = useState('')
    const handleRegister=(e)=>{
      e.preventDefault();
      dispatch(register({firstname,lastname,email,password,gender,role}),
      navigate('/login')
      )
    
    }
  return (
    
    <div>
        <Form onSubmit={handleRegister}>
          <Card className='login'>
           <div className='ee'><TextField className='name'
                  autoComplete="given-name"
                  name="lastName"
                  required
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstame(e.target.value)} value={firstname}
                  autoFocus/></div>
            <div className='eee'> <TextField className='name'
                  autoComplete="given-name"
                  name="lastName"
                  required
                  id="lastName"
                  label="Last Name"
                  onChange={(e) => setLastname(e.target.value)}  value={lastname}
                  autoFocus/> 
                  </div>
                  <div className='e2'>  <TextField  className='register-input'
                  required
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  autoFocus
                  onChange={(e) => setEmail(e.target.value)} value={email} /> 
                  </div>
                  <div className='e2'><TextField className='name'
                  autoComplete="given-name"
                  name="Password"
                  required
                  id="password"
                  label="Password"
                  autoFocus
                  onChange={(e) => setPassword(e.target.value)} value={password}
                  /></div>
                    <div class="e2">
              <Form.Select className="gender_select" onChange={(e)=>setGender(e.target.value)} value={gender}>
                <option className="gender" >---- Choose gender----</option>
                <option> Male</option>
                <option> Female</option>
              </Form.Select></div>
              <div class="e2">
              <Form.Select className="role_select" onChange={(e)=>setRole(e.target.value)} value={role} >
                <option className="role">---- choose role----</option>
                <option> Freelancer</option>
                <option> Clientt</option>
              </Form.Select></div>
                  
            <div class="e2">
            	<input type="checkbox" id="cb1"/>
    			<label for="cb1">I agree with terms and conditions</label>
            </div>
            <div className='e'><Button style={{backgroundColor:"#9400D3" , borderColor:"white"}} type="submit">Register </Button></div>
            </Card> 
        </Form>
        
    </div>
  )
}

export default Register