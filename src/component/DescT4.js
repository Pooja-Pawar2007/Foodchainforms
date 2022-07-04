import React, { useState } from "react";

export default function DescT4() {
  const [fname, setName] = useState({
    Name: "",
    Sign: "",
    Date: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <section className="section">
      <div className="container card card-body ">
        <p>
          Confirmation:
          <br></br>
          This is to confirm that the information that are filled in the
          questionnaire is complete and accurate to the best of my knowledge.
        </p>
        <br></br>

        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Name</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Enter Farmer’s name  "
            name="Name"
            onChange={inputEvent}
            value={fname.Name}
            required="required"
          />
        </div>
        <div className="form-group col-md-6 d-flex justify-content-between ">
          <label htmlFor="">Signature</label>

          <input
            className="w-50 my-2"
            type="text"
            placeholder="Signature  "
            name="sign"
            onChange={inputEvent}
            value={fname.sign}
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
            value={fname.Date}
            required="required"
          />
        </div>
      </div>
    </section>
  );
}
