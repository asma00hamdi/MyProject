
import { TextField} from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { addpost } from '../redux/Action/postAction'
import { useDispatch, useSelector } from 'react-redux'
import { getusers } from '../redux/Action/profileAction'





export const Postt = () => {
 const dispatch =useDispatch();
 const [title ,setTitle]=useState('');
 const [body,setBody]= useState('');
 const [contactUs,setContactUs]= useState('');

 
 const [show, setShow] = useState(false);

 const handleClose = () => setShow(false);
 const handleShow = () => setShow(true);
 useEffect(()=>{
  dispatch(getusers())
   },[])
   const user = useSelector((state)=>state.authReducer.user);

return (
  <div>
 <div className='po'><TextField style={{ 
        width: '40%',
        marginLeft: 'auto',
        marginRight: 'auto',
        color: 'white',
        padding:20,
       
        fontWeight: 500
    }}
 placeholder='Create Post'
 onClick={handleShow}
  />
  </div> 

<div>
<>
      <Modal
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title>Add Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <div className='card'>
  <div className='tit'><TextField
placeholder='title'
onChange={(e) => setTitle(e.target.value)} value={title}/>
</div>
<div className='bod'><TextField
aria-label="minimum height"
minRows={3}
placeholder='description'
sx={{
 
 "& .MuiInputBase-root":{
  height:100,
 }
}
}
onChange={(e) => setBody(e.target.value)} value={body}/>
</div>
<TextField placeholder='contact us' onChange={(e) => setContactUs(e.target.value)} value={contactUs} />

</div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button className='butt' style={{backgroundColor:"black" , borderColor:"white"}}onClick={(e)=>dispatch(addpost({title,body,contactUs},user._id),handleClose())}>Add Post</Button>
        </Modal.Footer>
      </Modal>
    </>
    </div>
    </div>
    

  )
}
