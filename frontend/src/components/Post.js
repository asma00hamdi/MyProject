
import React, { useEffect, useState } from 'react'
import { Button, Card, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, edit_post, getposts} from '../redux/Action/postAction'
import { TextField } from '@mui/material'
import { getusers } from '../redux/Action/profileAction'
import { Navigate } from 'react-router'

const Post = ({post}) => {
  const dispatch=useDispatch()

  const [title ,setTitle]=useState(post.title);
  const [body,setBody]= useState(post.body);
  const [contactUs,setContactUs]= useState(post.contactUs);
 
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
 
     useEffect(()=>{
      dispatch(getusers())
       },[])
const user = useSelector((state) => state.authReducer.user);

  return (
    <div>
       <Card  className='cardd' >
      <Card.Body>
        <Card.Title ><Card.Text className='na'>{post.creatorId.firstname} {post.creatorId.lastname}____{post.createdAt}</Card.Text><div className='title'>{post.title}</div>
       
        </Card.Title>
        <Card.Text>
        {post.body}
        </Card.Text>
        Contact us:<Card.Link href={post.contactUs} > {post.contactUs}</Card.Link>
        
         
        {user?._id=== post.creatorId?._id&&(
          <div>
        <Button style={{backgroundColor:"#D2691E" , borderColor:"white"}}onClick={handleShow}>Edit</Button>
        <Button style={{backgroundColor:"#5F9EA0" , borderColor:"white"}}onClick={()=>dispatch(deletePost(post._id))}>Delete</Button> 
          </div>
           
        ) }
       
        <Modal show={show} onHide={handleClose}>
          <Modal.Header>
            <Modal.Title>EDIT</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='addpo'>
<TextField
 placeholder='title'
 onChange={(e) => setTitle(e.target.value)} value={title}/>
<TextField 
 aria-label="minimum height"
 sx={{
 
  "& .MuiInputBase-root":{
   height:100,
  }
 }
 }
 placeholder='body'
 onChange={(e) => setBody(e.target.value)} value={body}/>
 <TextField placeholder='contact us' onChange={(e) => setContactUs(e.target.value)} value={contactUs} />
    <Button onClick={()=>dispatch(edit_post((title,body,contactUs),post._id),handleClose(),console.log(title,body))}>Edit Post</Button>
   </div>
          </Modal.Body>
        </Modal>
      </Card.Body>
    </Card>
    </div>
  )
}

export default Post