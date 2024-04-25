import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getEventDetail } from '../utils/Api.post';
import { Row, Col, Image, Card, Button, ListGroup, ListGroupItem, Container } from 'react-bootstrap';

import Navbar from './Navbar';
import { ParticipatePage } from './ParticipatePage';

export const EventPage = () => {
    const [Details, setDetails] = useState({});
    const { id: eventId } = useParams();
    const navigate = useNavigate();

    const getDetails = async () => {
        try {
            const { data } = await getEventDetail(eventId);
            console.log(data);
            setDetails(data);
        } catch (error) {
            console.error('Error fetching event details:', error);
        }
    };

    useEffect(() => {
        getDetails();
    }, [eventId]);

    const handleParticipate = () => {
        navigate('/participatepage', { state: { details: Details } });
    };

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
                                    <ListGroupItem className="d-flex justify-content-center">
                                        <Button className="btn-block" type="button">
                                            Participate
                                        </Button>
                                    </ListGroupItem>
                                </ListGroup>
                            </Card>
                        </Col>
                    </Row>
                </div>
            </Container>
        </>
    );
};
