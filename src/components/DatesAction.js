import React from 'react'
import { Col, Row } from 'react-bootstrap'

function DatesAction({deleteData, viewData}) {
  return (
     <Row className="justify-container-center my-2"> 
          <Col sm='8' className="d-flex justify-content-between">
          <button className="btn-style p-2" onClick={deleteData}>Clear All</button>
          <button className="btn-style p-2" onClick={viewData}>Display All</button>
          </Col>
     </Row>
  )
}

export default DatesAction