import React from 'react'
import { Col, Row } from 'react-bootstrap'

function DatesCount({ person }) {
  return (
    <div>
          <Row className="justify-container-center my-2"> 
               <Col sm='8' >
                    You Have {person.length} Meeting
               </Col>
          </Row>
    </div>
  )
}

export default DatesCount