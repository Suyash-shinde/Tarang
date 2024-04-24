import React from 'react'
import { Card, CardBody, CardText } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'

const VCSS = ({event}) => {
  const navigate=useNavigate()
  return (
    <Card  onClick={()=>{
      navigate(`/event/${event._id}`)
    }} className='my-3 p-3 rounded'>
    <CardBody >
        
            <Card.Title as='div'className='product-title'>
              {event.title}
                </Card.Title>
            
     </CardBody>  
    </Card>
    
  )
}

export default VCSS