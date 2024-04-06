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
      {[dummy].map((event)=>(
          <V key={event.title} event={event}></V>
        ))}
    </div>
    </>
    
  )
}
