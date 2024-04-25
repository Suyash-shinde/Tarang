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
    <Card.Img src="../public/home/ngo2.jpeg" variant="top"/>

            <Card.Title as='div' className='product-title d-flex justify-content-center align-items-center'>
              {event.title}
                </Card.Title>
            
     </CardBody>  
    </Card>
    
  )
}

export default VCSS