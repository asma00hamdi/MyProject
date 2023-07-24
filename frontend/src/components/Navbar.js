import React, { useEffect } from 'react'
import { Button, Container, Dropdown, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom'
import { getusers } from '../redux/Action/profileAction';
import { logout } from '../redux/Action/authAction';
import { Avatar } from '@mui/material';

function NavBar() {
  const user = useSelector((state) => state.authReducer.user);
const dispatch = useDispatch()
const navigate= useNavigate()

useEffect(() => {
    dispatch(getusers());
  }, []);  

  return (
    <div>
      {!user ?(
   <Navbar className='navv'>
   <Container>
     <Nav className="me-auto" >
       <Nav.Link as={Link} to="/register">
       <button className="nav-login">Register</button>
       </Nav.Link>
       <Nav.Link as={Link} to="/login">
       <button className="nav-login">logIn</button>

       </Nav.Link>
       
     </Nav>
   </Container>
 </Navbar >
      ):
      (<Navbar className='navv'>
       
          <Container>
          <Nav className="me--" >
            <Nav.Link as={Link} to="/home" >
            <button className="nav-home">Home</button>

            </Nav.Link>
            
          </Nav>
        </Container>
        <Dropdown>
      <Dropdown.Toggle className='dd' id="dropdown-basic">
      <Avatar  className='profile-icon' src={user?.profileImage ? `/uploads/${user?.profileImage}`:"/broken-image.jpg"} />
      </Dropdown.Toggle>

      <Dropdown.Menu>
        <Dropdown.Item > <Nav.Link as={Link} to="/profile" >
        <p>{user.firstname} {user.lastname}</p>
            </Nav.Link></Dropdown.Item>
        <Dropdown.Item href="#/action-3">
          <Button style={{backgroundColor:"white",color:"black",borderColor:"white"}} onClick={()=>dispatch (logout(),navigate('/login')) }>Logout</Button>
          </Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
        
          
      </Navbar>
       )}
        
      
    </div>
  )
}

export default NavBar