import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getEventDetail } from '../utils/Api.post';
import Navbar from './Navbar'
import { ParticipatePage } from './ParticipatePage';
export const EventPage = () => {
    const [Details,setDetails]=useState({});
    const{id:eventId}= useParams();
    const navigate= useNavigate();
    const getDetails= async()=>{
        const {data} = await getEventDetail(eventId);
        console.log(data) ;
        setDetails((prev)=>data);
        
    }
    useEffect(()=>{
        getDetails();
        
    },[eventId]);
    const handleParticipate=()=>{
      navigate('/participatepage', {state:{details:Details}});
    }
  return (
    <>
    <Navbar/>
    <div>
    {Details.title} 
    </div>
    <div>
    {Details.location}
    </div>
    <div>
    {Details.description}
    </div>
    <div>
      {Details.date}
    </div>
    <button onClick={handleParticipate}>Participate</button>
    </>
  )
}
