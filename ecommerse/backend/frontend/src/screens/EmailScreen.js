import React from 'react'
import { Form, Button, Row, Col , Image } from 'react-bootstrap'
import Message from '../components/Message'
import FormContainer from '../components/FormContainer'
import emailjs from 'emailjs-com'
import email from '../screens/email.png'


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

            <Row>
                <Col md={6}>
                    <Image src={email} fluid />
                </Col>
                <Col md={6} style={{backgroundColor:'#e3e3e3'}}>
                    <h1>Send email</h1>
                    <Form onSubmit={sendEmail}>
                        <Form.Group  >
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Enter Name" name="name" />
                        </Form.Group>

                        <Form.Group className='py-4'>
                            <Form.Label>Email</Form.Label>
                            <Form.Control type="email" placeholder="Enter Email Address" name="from_name" />
                        </Form.Group>

                        <Form.Group  >
                            <Form.Label>Address and Product Details</Form.Label>
                            <Form.Control as="textarea" rows={5} type="message" name="message" placeholder="Enter Current Address and Product Details" />
                        </Form.Group>

                        <Button type='submit' variant='dark' style={{ marginBottom: '30px', marginTop: '30px' }}  value="Send Message">
                            Send
                        </Button>

                    </Form >
                    
                </Col>
                <div style={{marginTop:'30px'}}>
                <Message variant='info' >instruction</Message>
                </div>
             
            </Row>

        </div>
    );
}

