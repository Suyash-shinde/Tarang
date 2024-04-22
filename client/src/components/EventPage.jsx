import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getEventDetail } from '../utils/Api.post';

export const EventPage = () => {
    const [Details,setDetails]=useState({});
    const{id:eventId}= useParams();
    const getDetails= async()=>{
        const {data} = await getEventDetail(eventId);
        console.log(data) ;
        setDetails((prev)=>data);
        
    }
    useEffect(()=>{
        getDetails();
    },[eventId]);
  return (
    <>
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
    
    </>
  )
}
