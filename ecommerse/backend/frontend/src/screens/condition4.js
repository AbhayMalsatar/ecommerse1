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
            <Alert.Heading style={{fontSize: '30px'}}>Eligibility</Alert.Heading>
            <hr/>
                <p style={{fontSize: '20px'}}>
                Damaged / used / products sent without original packaging are not eligible for refunds. The items can be sent back to you at an additional ₹60 shipping cost, or you may collect them in-person from our warehouse. Items which are not informed for returns within 48 hours / not received by us within 5 days, are not eligible for returns. 
                </p>
             </Alert>
       
    )

}