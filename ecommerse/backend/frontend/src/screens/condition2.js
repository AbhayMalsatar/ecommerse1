import React from 'react'
import { Form, Button, Row, Col, Image, Container } from 'react-bootstrap'
import FormContainer from '../components/FormContainer'
import emailjs from 'emailjs-com'
import email from '../screens/email.png'
import img from './location.png'
import Map from '../components/Map'
import Footer from '../components/Footer'
import Message from '../components/Message'
import { Alert } from 'react-bootstrap'


export default function condition1() {


    return (

        <Alert variant="primary" color='primary' style={{backgroundColor:'#f0f0f0' , color:'black'}}>
            <Alert.Heading style={{ fontSize: '30px' }}>Refund process</Alert.Heading>
            <hr />
            <p style={{ fontSize: '20px' }}>
                Inform: You need to share the name, image and product Id via email at<strong> get.jewelled09@gmail.com </strong>  within 48 hours from the time you receive your product. We will then approve your return request and then the next step follows.
            </p>
            <p style={{ fontSize: '20px' }}>
                Return: Once you receive our confirmation for your return request approval, you need to ship us the products you wish to return with all the original packaging by keeping it safely back into the box. The product(s) should be shipped back to us within 5 days from the day we approve your return request. The cost of shipping the product will be borne by the customer. The product(s) should be in its original and unused condition with intact packaging. We will not be able to process the refund if the product(s) is damaged or shipped without its original packaging. Please use a reliable courier service for shipping the product(s) and share the tracking details once the products shipped.
            </p>
            <p style={{ fontSize: '20px' }}>Refund: The final step starts once we receive the returned package from you. Once we receive your package, we will inform you within 24-48 hours.</p>
            <p style={{ fontSize: '20px' }}>
                Mode of refund<br/> 
                Refund amount will be deposited in your bank account within 24 hours after we receive product(s) back to us. Customers are requested to provide correct bank details, check before sending us.

            </p>
        </Alert>

    )

}