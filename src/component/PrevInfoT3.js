import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import InputGroup from "react-bootstrap/InputGroup";
import Input from "react-bootstrap/InputGroup";

export default function PrevInfoT3() {
  const [formdata, setformdata] = useState({
    certified: "",
    Standard: "",
    body: "",
   reason:"",
    registration: "",
    status: "",
    reason_d: "",
  });
  const handleChangeData = (event, i) => {
    console.log(i);
    if (i >= 0) {
      console.log("hello");
      let temparr = [...formdata.NumberOfMembers];
      console.log(temparr);
      temparr[i][event.target.name] = event.target.value;
      let Newformdata = {
        ...formdata,
        NumberOfMembers: [...temparr],
      };
      setformdata(Newformdata);
    } else {
      let Newformdata = {
        ...formdata,
        [event.target.name]: event.target.value,
      };
      setformdata(Newformdata);
    }
  };

  useEffect(() => {}, [formdata]);

  return (
    <section className="section">
      <div className="container card card-body">
        <h6>
          <center>Previous Certification Information (if any)</center>
        </h6>
        <Form.Group className="border-2 border-black p-1">
          <Row>
            <Form.Label column sm={3}>
              Is your organization currently certified?
            </Form.Label>
            <Col>
              <Form.Select
                aria-label="Default select example"
                value={formdata.certified}
                onChange={handleChangeData}
                name="certified"
              >
                <option value="Yes">Yes</option>
                <option value="No">No</option>
              </Form.Select>
            </Col>
          </Row>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">If certified, to what Standard(s):</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="Name "
              name="Standard"
              onChange={handleChangeData}
              value={formdata.Standard}
              required="required"
            />
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">If certified, Current certification body</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="body "
              name="body"
              onChange={handleChangeData}
              value={formdata.body}
              required="required"
            />
          </div>

          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">Tracenet Registration number</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder="Number "
              name="registration"
              onChange={handleChangeData}
              value={formdata.registration}
              required="required"
            />
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">Reason for changing certification body:</label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder=" "
              name="reason"
              onChange={handleChangeData}
              value={formdata.reason}
              required="required"
            />
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">
              Has your organization ever been declined or refused certification?
            </label>
            <Form.Select
              aria-label="Default select example"
              value={formdata.status}
              onChange={handleChangeData}
              name="certified"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </Form.Select>
          </div>
          <div className="form-group col-md-6 d-flex justify-content-between ">
            <label htmlFor="">
              If any organization decline your certification give reason
            </label>

            <input
              className="w-50 my-2"
              type="text"
              placeholder=" "
              name="reason_d"
              onChange={handleChangeData}
              value={formdata.reason_d}
              required="required"
            />
          </div>
        </Form.Group>
        <label>
          (Note: Attach NOC Letter (copy of NOC from TraceNet), Scope
          Certificate from previous CB, Last report received from the previous
          certified CB)
        </label>
      </div>
    </section>
  );
}
