import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";
import { logoutRoute } from '../utils/APIRoutes';
export const Home = () => {
  const navigate=useNavigate();
  const handleclick=async()=>{
    
    const {data} = await axios.post(logoutRoute,{}, {withCredentials:true});
    if(data.status===false){
      console.log(data.msg);
    }
    else{
      navigate("/test");
    }
  }
  return (
    <>
    <button onClick={handleclick}>Logout</button>
    </>
  )
}
