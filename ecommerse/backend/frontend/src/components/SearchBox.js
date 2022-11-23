import React, { useState } from 'react'
import { Button, Form, Row, Col, Container } from 'react-bootstrap'
import { useHistory } from 'react-router-dom'

function SearchBox() {
    const [keyword, setKeyword] = useState('')

    let history = useHistory()

    const submitHandler = (e) => {
        e.preventDefault()
        if (keyword) {
            history.push(`/?keyword=${keyword}&page=1`)
        } else {
            history.push(history.push(history.location.pathname))
        }
    }
    return (
        <Row>

            <Form onSubmit={submitHandler} inline>
               
                <Form.Control
                    type='text'
                    name='q'
                    onChange={(e) => setKeyword(e.target.value)}
                    placeholder='Search Name'
                    className='mr-sm-2 ml-sm-5'
                    style={{width:'330px' , marginTop:'10px'}}
                ></Form.Control>


            </Form>


        </Row>
    )
}

export default SearchBox