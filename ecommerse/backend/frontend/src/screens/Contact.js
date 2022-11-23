import React from 'react'
import { Form, Button, Row, Col, Image, Container } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import emailjs from 'emailjs-com'
import email from '../screens/email.png'
import img from './location.png'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Message from '../components/Message'




export default function EmailScreen() {




    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_yky33uv', 'template_Test', e.target, 'user_zY9S6H2XNAMP8qAw05SuZ')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset()
    }

    return (

        <div >

            <Row style={{ marginLeft: '10px', marginRight: '10px' }}>

                <Col md={9} style={{ backgroundColor: '#e3e3e3' }}>
                    <h1>Contact us</h1>
                    <Form onSubmit={sendEmail}>
                        <Form.Group style={{ marginLeft: '12px', marginRight: '12px' }} >
                            <Form.Label style={{ marginLeft: '5px' }}>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" name="name" />
                        </Form.Group>

                        <Form.Group className='py-4' style={{ marginLeft: '12px', marginRight: '12px' }}>
                            <Form.Label style={{ marginLeft: '5px' }} >Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Your Address" name="from_name" />
                        </Form.Group>

                        <Form.Group style={{ marginLeft: '12px', marginRight: '12px' }} >
                            <Form.Label style={{ marginLeft: '5px' }}>Your Message</Form.Label>
                            <Form.Control as="textarea" rows={5} type="message" name="message" placeholder="Enter Message" />
                        </Form.Group>

                        <Button type='submit' variant='dark' style={{ marginBottom: '30px', marginTop: '30px', marginLeft: "20px" }} value="Send Message">
                            Send
                        </Button>

                    </Form >
                </Col>
                <Col md={3}>
                    <div >
                        <Image src={email} fluid style={{ height: '60px', marginLeft: '135px', marginTop: '50px' }} />
                        <p style={{ marginLeft: '48px' }}>abhaymalsatar04@gmail.com</p>
                    </div>
                    <div>
                        <Image src={img} fluid style={{ height: '60px', marginLeft: '118px', marginTop: '50px' }} />
                        <p style={{ marginLeft: '75px', display: "inline" }}>Madhapar, Bhuj, Gujarat</p>
                    </div>
                </Col>  
            </Row>
            <Map /> 
        </div>

    );
}


