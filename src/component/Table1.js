import React, { useState } from "react";
import { Form, Table, Row, Col } from "react-bootstrap";

export default function Table1() {
  const [fname, setName] = useState({
    Name: "",
    pan: "",
    contact: "",
    Position: "",
    Office: "",
    Country: "",
    Post: "",
    Physical: "",
    Telephone: "",
    Fax: "",
    Mobile: "",
    Email: "",
    Website: "",
    Aadhar: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <section className="section">
      <div className="container card card-body ">
        
           
            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Organization Name</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>
            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Organization PAN No / GST No </label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.pan}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Type of organization</label>

              <Form.Group>
                <Form.Select
                  name=" Typesoforg"
                  onChange={inputEvent}
                  value={fname.Typesoforg}
                >
                  <option value="Proprietor">Proprietor</option>
                  <option value="Partnership ">Partnership </option>
                  <option value="Limited">Limited</option>
                  <option value="Cooperative">Cooperative</option>
                  <option value="Other:"> Other:</option>
                </Form.Select>
                <Form.Control placeholder="If Other, Specify " />
              </Form.Group>
            </div>
            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Contact Name</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name=" contact"
                onChange={inputEvent}
                value={fname.contact}
                required="required"
              />
            </div>
            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Contact Position</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="Position"
                onChange={inputEvent}
                value={fname.Position}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Office/ legal address</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="Office"
                onChange={inputEvent}
                value={fname.Office}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Country</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name=" Country"
                onChange={inputEvent}
                value={fname.Country}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Post code:</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">
                Physical (Farm/ICS office) Address, if different
              </label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Telephone</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Fax </label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Mobile</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Email</label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>
            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Website: </label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>

            <div className="form-group col-md-6 d-flex justify-content-between ">
              <label htmlFor="">Aadhar No. </label>

              <input
                className="w-50 my-2"
                type="text"
                placeholder="Name "
                name="name"
                onChange={inputEvent}
                value={fname.Name}
                required="required"
              />
            </div>
          </div>
       
    </section>
  );
}
