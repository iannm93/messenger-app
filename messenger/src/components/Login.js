import React, {useRef} from 'react'
import { Container, Form} from 'react-bootstrap'


export default function Login (){
    const idRef = useRef()
    return(
        <Container>
            <Form>
                <Form.Group>
                    <Form.Label>
                        ID Here
                    </Form.Label>
                    <Form.Control ref= {idRef}type = "text"></Form.Control>
                </Form.Group>

            </Form>
        </Container>

        

        
    )
}