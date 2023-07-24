import axios from "axios";
import {  GET_ONE_POST, GET_POSTS} from "../ActionTypes/postTypes";
//-----------GET POSTS----------------//
export const getposts = () => async (dispatch) => {
  const config = {
    headers: {
      token: localStorage.getItem("token"),
    },
  };
    try {
      const res = await axios.get("/post/allposts" );
      dispatch({ type: GET_POSTS, payload: res.data });
    } catch (error) {
     
        console.log(error)
    }
  };
  //-----------ADD POST----------------//
export const addpost = (data,id) => async (dispatch,) => {

 
  
    try {
      await axios.post(`/post/addPost/${id}`,data,id);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };



  //-----------DELETE POST----------------//
  export const deletePost = (id) => async (dispatch) => {
    
    try {
      await axios.delete(`/post/deletepost/${id}`);
      dispatch(getposts());
    } catch (error) {
   console.log(error)
    }
  };
   //-----------GET ONE POST----------------//
   export const getPost = (id) => async (dispatch) => {
    try {
      const res = await axios.get(`/post/getOnePost/${id}`);
      dispatch({type:GET_ONE_POST,payload:res.data.getpost});
    } catch (error) {
   console.log(error)
    }
  };
  //-----------UPDATE POST-------------//
  export const edit_post=(data,id)=>async(dispatch)=>{
    try {
       await axios.put(`/post/editpost/${id}`,data)
      dispatch(getposts())
    } catch (error) {
      console.log(error)
    }
  }