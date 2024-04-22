import React from 'react'
import { useEffect ,useState} from 'react'
import {V} from './V'
import { getEvents } from '../utils/Api.post';
export const Volunteer = () => {
  const [dummy, setDummy] = useState([]);
  const fetchEvents = async()=>{
    const {data} = await getEvents();
    setDummy(data.events);
  }
  useEffect(()=>{
    fetchEvents();
  },[]);
  
  return (
    <>
    <div>
      {dummy.map((event)=>{
          return(
          <V key={event._id} event={event}></V>
          )
          })}
    </div>
    </>
    
  )
}
