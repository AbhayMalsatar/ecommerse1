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
            <Alert.Heading style={{fontSize: '30px'}}>Applicable deduction</Alert.Heading>
            <hr/>
                <p style={{fontSize: '20px'}}>
                For any online prepaid transactions, where the amount is deducted from your card/wallet and the order confirmation is not received, please contact us before you place another order. We will confirm if your transaction was captured. In case of a new order placed before confirming with us, 5% towards the payment gateway charges will be deducted from the transaction amount before refund. 
               </p>
             </Alert>
       
    )

}