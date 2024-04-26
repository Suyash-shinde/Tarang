import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getParticipants } from '../utils/Api.post';
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem, Container, Toast } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import Navbar from './Navbar';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { toastOptions } from '../utils/Toastify.js';

export const AdminEvent = () => {
    const [Details, setDetails] = useState([]);
    const [list,setList] = useState([]);
    const { id: eventId } = useParams();

    const getDetails = async () => {
        try {
            const { data } = await getParticipants(eventId);
            setDetails(data);
            setList(data.participants);
            console.log(list);
        } catch (error) {
            console.error('Error fetching event details:', error);
        }
    };

    

    useEffect(() => {
        getDetails();
    }, [eventId]);
    const user= useSelector((state)=>state.auth.user);
  return (
    <>
    <Navbar />
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '50vh' }}>
        <div>
            <Row>
                <Col md={5}>
                    <Image src="../public/home/ngo2.jpeg" fluid />
                </Col>
                <Col md={4}>
                    <ListGroup variant="flush">
                        <ListGroupItem>
                            <h3>{Details.title}</h3>
                        </ListGroupItem>
                        <ListGroupItem>Description {Details.description}</ListGroupItem>
                    </ListGroup>
                </Col>
                <Col md={3}>
                    <Card>
                        <ListGroup variant="flush">
                            <ListGroupItem>
                                <Row>
                                    <Col>Date:</Col>
                                    <Col>
                                        <strong>{Details.date}</strong>
                                    </Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Location: {Details.location}</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroupItem>
                                <Row>
                                    <Col>Participants:</Col>
                                </Row>
                            </ListGroupItem>
                            <ListGroup>
                                {list.map((e)=>{
                                    return(
                                    <ListGroupItem key={e._id}>
                                       <Row>
                                           <Col>{e.fistname}</Col>
                                       </Row>
                                   </ListGroupItem>
                                    )
                                })}
                            </ListGroup>
                                
                        </ListGroup>
                        <Button className="btn-block" type="button"  >
                                    Mark As Done
                                </Button>
                    </Card>
                </Col>
            </Row>
        </div>
    </Container>
<ToastContainer/>
</>
  )
}
