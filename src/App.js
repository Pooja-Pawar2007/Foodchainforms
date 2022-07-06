import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { Form, Table, Accordion } from "react-bootstrap";
import Table1 from "./component/Table1";
import Unit from "./component/UnitA";
import DescT4 from "./component/DescT4";
import ImpInfoT5 from "./component/ImpInfoT5";
import PrevInfoT3 from "./component/PrevInfoT3";
import Certification_Decision from "./component/Certification_Decison";
import UnitB from "./component/UnitB";
import SubDocT1 from "./component/SubDocT1";
import SubDocT2 from "./component/SubDocT2";
import CB from "./component/CB";
import Footer from "./component/Footer";
import Certification from "./component/Certification";

function App() {
  return (
    
    <div className="container card card-body "  >
      <center> <strong>01 Certification Form </strong></center>
    <div className="container card card-body ">
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>Contact Details</Accordion.Header>
          <Accordion.Body>
            <Table1 />
          </Accordion.Body>
        </Accordion.Item>
        
        <Accordion.Item eventKey="1">
          <Accordion.Header>Certification Information</Accordion.Header>
          <Accordion.Body>
            <Certification />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="2">
          <Accordion.Header>
            Farming unit information: Individual farming unit
          </Accordion.Header>
          <Accordion.Body>
            <Unit />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="3">
          <Accordion.Header>
            Farming unit information for group crop
          </Accordion.Header>
          <Accordion.Body>
            <UnitB />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="4">
          <Accordion.Header>
            {" "}
            Previous Certification Information (if any)
          </Accordion.Header>
          <Accordion.Body>
            <PrevInfoT3 />
          </Accordion.Body>
        </Accordion.Item>

       
        <Accordion.Item eventKey="6">
          <Accordion.Header> Important Information</Accordion.Header>
          <Accordion.Body>
            <ImpInfoT5 />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="7">
          <Accordion.Header> Document Check Records</Accordion.Header>
          <Accordion.Body>
            <SubDocT1 />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="8">
          <Accordion.Header> Document Uploads</Accordion.Header>
          <Accordion.Body>
            <SubDocT2 />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="9">
          <Accordion.Header> To be completed by CB:</Accordion.Header>
          <Accordion.Body>
            <CB />
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="10">
          <Accordion.Header>
            {" "}
            Send original hard copy of application form to below address:
          </Accordion.Header>
          <Accordion.Body>
            <Footer />
          </Accordion.Body>
        </Accordion.Item>

      </Accordion>
    </div>
    </div>
  );
}

export default App;
