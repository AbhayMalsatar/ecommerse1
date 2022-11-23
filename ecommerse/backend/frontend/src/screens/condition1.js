import React  from 'react'
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
  

    return(
    
             <Alert variant="primary" color='primary' style={{backgroundColor:'#f0f0f0' , color:'black'}}>
            <Alert.Heading style={{fontSize: '30px'}}>Cancellation policy</Alert.Heading>
            <hr/>
                <p style={{fontSize: '20px'}}>
                Orders once placed on our website are only eligible for cancellation until they are shipped.
                </p>
                <p style={{fontSize: '20px'}}>
                Orders cancelled before shipping will be refunded as in your original payment mode. (5% deduction as PG charges)
                </p>
             </Alert>
    
    )

}