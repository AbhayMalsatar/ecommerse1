import React from 'react'
import { Container, Row, Col, Card, Image } from 'react-bootstrap'
import img from '../screens/insta.png'

function Footer() {
    return (
        <div style={{ backgroundColor: '#fce3ca', paddingBottom:'15px'}}>
        <a href="https://www.instagram.com/get_jewelled/" target="_blank"> <i class="fab fa-instagram-square fa-2x"  style={{display:'inline-block' , float:'right' , paddingTop:'22px' , paddingRight:'20px' , color:'#c42b7f'}}></i></a>
       
            <h5 style={{ textAlign: 'left', paddingTop: '30px', paddingLeft: '21px' }}>Manage by: Komal Udasi</h5>
            
            <Container>
                <h4 style={{ textAlign: 'center', paddingTop: '50px' }}>Terms and Conditions</h4>
                <Row>
                    <p style={{ textAlign: 'center', marginBottom: '50px' , color:'' }} >Your Terms and Conditions  is a contract between you and your customer. Customers must agree to your terms in order to browse your site, make purchases, or use any associated</p>
                   
           
                </Row>
            
               
            </Container>
            <h5 style={{textAlign:'right', paddingRight: '43px'}}>Developed by : Abhay Malsatar</h5>
        </div>
    )
}

export default Footer
