import React, { Component } from 'react'
import {Container} from 'react-bootstrap'
import {Row} from 'react-bootstrap'
import {Col} from 'react-bootstrap'
import {Button} from 'react-bootstrap'
import {Alert} from 'react-bootstrap'
import './index.css'





class Dasher  extends Component {
    
    render() { 
        return ( 
            <div>
                <Container className='column'>
                    <Row>
                        <Col xs={4} className='col1' >
                            
                            <img className='img1' src="https://res.cloudinary.com/nseabasi/image/upload/v1581200150/nnse/peter-wormstetter-wmQH1N9tHFU-unsplash_zmdvws.jpg"/>
                        </Col>
                        <Col xs={3} className='col2' >
                            <img className='img2' src="https://res.cloudinary.com/nseabasi/image/upload/v1581202129/samples/landscapes/img2_icni2f.jpg" />
                        </Col>
                        <Col xs={4} className='col3' >
                            <img className='img3' src="https://res.cloudinary.com/nseabasi/image/upload/v1581202347/nnse/img3_rz9ham.jpg" />

                        </Col>
                    </Row>
                    
                    <Alert className='btn' variant = "warning">Create Trio</Alert>
                    
                    
                </Container>
            </div>
            
         );
    }
}
 
export default Dasher;