import React, { useEffect, useRef, useState } from 'react'
import { edit_profile, getusers } from '../redux/Action/profileAction';
import { useDispatch, useSelector } from 'react-redux';
import { Button} from 'react-bootstrap';
import { Avatar } from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';


const Profile = () => {

const user = useSelector((state) => state.authReducer.user);
const [profileImage,setProfileImage] = useState('')

const dispatch = useDispatch()
  const refImage=useRef()


useEffect(() => {
    dispatch(getusers());
  }, []);  
  const editUserProfile=async(e)=>{
    e.preventDefault();
    const data=new FormData ()
    data.append("profileImage",profileImage)
    dispatch(edit_profile((data),user._id));    
 }

  return (
    <div>
 
 <Avatar  className='profile-icon' src={user?.profileImage ? `/uploads/${user?.profileImage}`:"/broken-image.jpg"} />
<input className='choose_file'   type='file' name='profileImage'  onChange={(e)=>setProfileImage(e.target.files[0])}  />
{/* <Button className='btn-avtar-add' onClick={()=>refImage.current.click()}><AddAPhotoIcon className='avatar-add'/></Button>
<Button onClick={editUserProfile}>Add profileImage</Button> */}
  <div><p><p style={{color:"#20B2AA",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Name:</p>{user?.firstname} {user?.lastname}</p></div>
      <div><p style={{color:"#20B2AA",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}>Role:</p><p>{user?.role}</p></div>
      <div><p style={{color:"#20B2AA",fontFamily:"'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"}}><p>Skills:{user?.skills}</p></p></div>
    
     
    </div>
  )

  
}

export default Profile ;