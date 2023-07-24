//  import React, { useEffect, useRef, useState } from 'react'
// import { useSelector } from 'react-redux';
// import Avatar from '@mui/material/Avatar';
// import { Button } from 'react-bootstrap';
// import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
// import { useDispatch } from 'react-redux';
// import { edit_cover_profile, edit_profile, getusers } from '../redux/Action/profileActions';

// const Settings = () => {
//   const user = useSelector((state) => state.authReducer.user);
//   const dispatch= useDispatch()
//   const refImage=useRef()
//   const refcoverImage=useRef()

//   const [profileImage,setProfileImage] = useState('')
//   const [coverImage,setCoverImage] = useState('')

//   useEffect(()=>{
//     dispatch(getusers())
//      },[])
//   const editUserProfile=async(e)=>{
//     e.preventDefault();
//     const profileimage=new profileimage ()
//     dispatch(edit_profile((profileimage),user._id));    
//  }
//  const editUserCover=async()=>{
//   const coverimage=new coverimage ()
//   dispatch(edit_cover_profile((coverimage),user._id));    
// }

//   return (
//     <div className='profile'>
// <div className='profile-cover'>
//   <img className='image-cover' src={user?.coverImage ? `uploads/${user?.coverImage}`:null} />
//   <Button className='btn-cover-pic' onClick={()=>refcoverImage.current.click()}><AddAPhotoIcon className='icon-add'/>Add cover photo</Button>
//  <Avatar  className='profile-icon' src={user?.profileImage ? `uploads/${user?.profileImage}`:"/broken-image.jpg"} />
// <input className='choose_file'   type='file' name='profileImage' ref={refImage} hidden  onChange={(e)=>setProfileImage(e.target.files[0])}  />
// <input className='choose_file'   type='file' name='coverImage' ref={refcoverImage} hidden  onChange={(e)=>setCoverImage(e.target.files[0])}  />
// </div>
// <Button className='btn-avtar-add' onClick={()=>refImage.current.click()}><AddAPhotoIcon className='avatar-add'/></Button>
// <Button onClick={editUserProfile}>profileImage</Button>
// <Button onClick={editUserCover}>CoverImage</Button>
// <h2 className='user-name'>{user.firstname} {user.lastname} </h2>
//     </div>
//   )
// }


  


// export default Settings
