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


function privacy() {
  

    return(
    
             <Alert variant="primary" color='primary' style={{backgroundColor:'#f0f0f0' , color:'black'}}>
            <Alert.Heading style={{fontSize: '30px'}}>Personal identification information</Alert.Heading>
            <hr/>
                <p style={{fontSize: '20px'}}>
                
                </p>
             </Alert>
       
    )

}

export default privacy