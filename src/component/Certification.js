import React, { useState } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function Certification() {
  const [fname, setName] = useState({
    Certification: "",
    Standard: "",
    Time: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div className="container card card-body ">
     
          <center>
            {" "}
            <h6>Certification Information</h6>
          </center>
          <div>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Certification
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  name=" Certification"
                  onChange={inputEvent}
                  value={fname.Certification}
                >
                  <option value="Addition ">Addition </option>
                  <option value="Change">Change</option>
                  <option value="Withdrawal">Withdrawal</option>
                </Form.Select>
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Standard
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  name="Standard"
                  onChange={inputEvent}
                  value={fname.Standard}
                >
                  <option value="NPOP ">NPOP</option>
                  <option value="Other">Other</option>
                </Form.Select>
                <Form.Control placeholder="If Other, Specify " />{" "}
              </Col>
            </Form.Group>

            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                How long your farm under organic management
              </Form.Label>
              <Col sm={5}>
                <Form.Select
                  name=" Time"
                  onChange={inputEvent}
                  value={fname.Time}
                >
                  <option value="Beginning ">Beginning </option>
                  <option value="one_Year">Since Last One Year</option>
                  <option value="More_Then_One">More Than One Year</option>
                </Form.Select>
              </Col>
            </Form.Group>
          </div>
        </div>
    
  );
}
