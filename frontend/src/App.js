import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Register from './components/Register';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Route, Routes } from "react-router-dom";
import { Postt } from './components/Postt';
import { useDispatch } from 'react-redux';
import { get_current } from './redux/Action/authAction';
import { useEffect } from 'react';
import Home from './components/Home';
import Profile from './components/Profile';
import Settings from './components/Settings';
import PrivateRoutes from './utils/PrivateRoutes';



function App() {

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(get_current());
  }, []);
  

    return (
     <div className='homee'> 
      <Navbar/>
  
        <Routes>
          <Route path="/register"  element={<Register />}/>
            <Route path="/login"  element={<Login />} />
            <Route element={<PrivateRoutes />}>
            <Route path="/home"  element={<Home />} exact />
            <Route path="/profile"  element={<Profile />} exact />
              </Route>

            
            {/* <Route path="/settings"  element={<Settings />} /> */}
        </Routes>
     
     </div>
    );
  }

export default App;
