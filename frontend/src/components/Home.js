import React, { useEffect } from 'react'
import { Postt } from './Postt'
import Post from './Post'
import { useDispatch, useSelector } from 'react-redux';
import { getposts } from '../redux/Action/postAction';
import { getusers } from '../redux/Action/profileAction';

const Home = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(getposts())
         },[])
         useEffect(()=>{
          dispatch(getusers())
           },[])
    const posts = useSelector((state) => state.postReducer.posts);
    const user = useSelector((state) => state.authReducer.user);


  return (
    <div>
       {user?.role === 'Clientt' && <Postt/> }
       {posts.map((post)=><Post post={post}/>)} 
    </div>
  )
}

export default Home