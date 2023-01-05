import React from 'react'
import { Col, Row } from 'react-bootstrap'


function DatesList({person}) {
  return (
     <Row className="justify-container-center"> 
          <Col sm='8' >
          <div className="rectangle p-2">
          {person.length ? (person.map((item) => {
          return (
                    <div key={item.id} className="d-flex border-bottom mx-3 my-2">
                    <img src="md2.jpeg" className="img-avatar" alt="myImage"/>
                    <div className="px-3">
                    <p className="d-inline fs-5">{item.name}</p>
                    <p className="fs-6">{item.time}</p>
                    </div>
                    </div>
          )
          })) : <h2 className="p-5 text-center">No schedual dates</h2>}

          </div>
          </Col>
     </Row>
  )
}

export default DatesList