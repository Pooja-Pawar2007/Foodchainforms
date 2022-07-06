import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Accordion } from "react-bootstrap";
import Header from "./component/Header";
import Scope from "./component/Scope";
import Anual_Certification from "./component/Anual_Certification";
import Payment from "./component/Payment";
import Declaration from "./component/Declaration";
import Legal_Sign from "./component/Legal_Sign";
import Auth_Sign from "./component/Auth_Sign";

function App() {
  return (
    <section className="section">
      <div className="container card card-body  ">
        <strong><center>CERTIFICATION AGREEMENT</center></strong>
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>CERTIFICATION AGREEMENT</Accordion.Header>
            <Accordion.Body>
              <Header />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Scope of work and Annual audit</Accordion.Header>
            <Accordion.Body>
              <Scope />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Annual Audit and Certification Fee</Accordion.Header>
            <Accordion.Body>
              <Anual_Certification />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Payment terms and Agreement validity</Accordion.Header>
            <Accordion.Body>
              <Payment />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="4">
            <Accordion.Header>Declaration by the CLIENT</Accordion.Header>
            <Accordion.Body>
              <Declaration />
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="5">
            <Accordion.Header>Signature of authorized signatory of FCID</Accordion.Header>
            <Accordion.Body>
              <Auth_Sign />
            </Accordion.Body>
          </Accordion.Item>

          <Accordion.Item eventKey="6">
            <Accordion.Header>Signature of legal representative of the client
</Accordion.Header>
            <Accordion.Body>
              <Legal_Sign />
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </section>
  );
}

export default App;
