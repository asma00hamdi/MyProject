import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom'
import { getusers } from '../redux/Action/profileAction';

const PrivateRoutes = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getusers())
         },[])
         const token = useSelector((state) => state.authReducer.auth);

    return(
        <div>
          { token === true ? <Outlet/> : <Navigate to="/login"/>}
        </div>
       
    )
}

export default PrivateRoutes