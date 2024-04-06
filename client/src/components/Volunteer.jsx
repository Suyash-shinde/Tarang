import React from 'react'
import {V} from './V'
export const Volunteer = () => {
  const dummy={
    first :{
      title:"first_title",
      owner: "Hello",
    },
    second :{
      title:"second_title",
      owner: "world",
    }
  }
  return (
    <>
    <div>
      {dummy.map((event)=>(
          <V key={event._id} event={event}></V>
        ))}
    </div>
    </>
    
  )
}
