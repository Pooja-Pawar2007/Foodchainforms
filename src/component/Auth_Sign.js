import React, { useState, useEffect } from "react";
import { Form, Table, Accordion } from "react-bootstrap";


export default function Auth_Sign() {
    const [formdata, setformdata] = useState({
        Name: "",
        Stamp:"",
        Designation:"",
        Place:"",
        Date:"",
       });
     
       const inputEvent = (event, datasheet) => {
        event.preventDefault();
        let Newformdata = {
          ...formdata,
          [event.target.name]: event.target.value,
        };
        setformdata(Newformdata);
      };
       useEffect(() => {}, [formdata]);
  return (
    <section>
    <div className="container card card-body ">
    {JSON.stringify(formdata)}
      <strong><center>Signature of authorized signatory of FCID
</center></strong>
<br></br>
      <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Company seal or stamp:
</label>

          <input
            className="w-50 my-2"
            type="file"
            placeholder="Enter Farmer’s name  "
            name="Stamp"
            onChange={inputEvent}
            value={formdata.Stamp}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Name:
</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Name "
            name="Name"
            onChange={inputEvent}
            value={formdata.Name}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Designation:
</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Designation"
            name="Designation"
            onChange={inputEvent}
            value={formdata.Designation}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Place :
</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Place "
            name="Place"
            onChange={inputEvent}
            value={formdata.Place}
            required="required"
          />
        </div>



        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Date</label>

          <input
            className="w-50 my-2"
            type="date"
            placeholder="Date  "
            name="Date"
            onChange={inputEvent}
            value={formdata.Date}
            required="required"
          />
        </div>
      


    </div>
   </section>
  )
}
