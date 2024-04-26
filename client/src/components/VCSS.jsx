import React from "react";
import { Card, CardBody, CardText } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";

const VCSS = ({ event }) => {
  const navigate = useNavigate();
  return (
    <Card key={event._id} onClick={()=>{
      navigate(`/event/${event._id}`)
    }} className='my-3 p-3 rounded'>
    <CardBody >
<<<<<<< HEAD
        
            <Card.Title as='div'className='product-title' >
=======
    <Card.Img src="../public/home/ngo2.jpeg" variant="top"/>

            <Card.Title as='div' className='product-title d-flex justify-content-center align-items-center'>
>>>>>>> b087ecef2d2912c65c5cb0123e13edc09ad12473
              {event.title}
                </Card.Title>
            
     </CardBody>  
    </Card>
  );
};

export default VCSS;
