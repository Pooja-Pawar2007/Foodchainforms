import React from "react";
import { Form, Table } from "react-bootstrap";
import { BsPlusSquare, BsDashSquare } from "react-icons/bs";
import { useState } from "react";

export default function UnitA() {
  const [fname, setName] = useState({
    Name:"",
    Area:"",
    Area_Under:"",
    Survey:"",
    GPS:"",
    
    Seed :"",
    Pest:"",
    Crops :"",
    //Crops_grown 
    K_main:"",
     K_Intercrop:"",
     R_main:"",
      R_intercrop:"",
      Z_main:"",
       Z_Intercrop:"",
       P_main :"",
       P_intercrop:"",
       Details :"",
Crop_History :"",


    
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <section className="section">
      <div className="container card card-body ">
        <h4 className="center">Farming unit information</h4>

        <div className="card card-body row col">
          <h6>A. Individual farming unit </h6>
          <hr />
          <div className="table table-striped table-bordered table-sm">
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-md-4" name="sno">
                    Name and address of the farm
                  </th>
                  <th> 
                  <input
                    name="Name"
                    onChange={inputEvent}
                    value={fname.Name}
                    type="text"
                    placeholder=""
                  />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    Total Area (Ha)
                  </th>
                  <th>
                  <input
                    name="Area"
                    onChange={inputEvent}
                    value={fname.Area}
                    type="text"
                    placeholder=""
                  />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    Area (Ha) under Certification
                  </th>
                  <th> 
                  <input
                    name="Area_Under"
                    onChange={inputEvent}
                    value={fname.Area_Under}
                    type="text"
                    placeholder=""
                  />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    Survey No.
                  </th>
                  <th> 
                  <input
                    name="Survey"
                    onChange={inputEvent}
                    value={fname.Survey}
                    type="text"
                    placeholder=""
                  />
                  </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    GPS co-ordinates
                  </th>
                  <th> 
                  <input
                    name=" GPS"
                    onChange={inputEvent}
                    value={fname. GPS}
                    type="text"
                    placeholder=""
                  />
                  </th> 
                </tr>

                <tr>
                  <th className="col-md-4" name="sno">
                    Details of Inputs used
                  </th>
                  <th className="col-md-4" name="sno">
                    Seeds/Seedlings
                  </th>
                  <th className="col-md-4" name="sno">
                    Nutrient Management
                  </th>
                  <th className="col-md-4" name="sno">
                    Pest/Disease management
                  </th>
                </tr>
                <tr></tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td>
                    <input
                      name="Seed"
                      onChange={inputEvent}
                      value={fname.Seed}
                      type="text"
                      placeholder=""
                    />
                  </td>
                  <td>
                    <input
                      name="Pest"
                      onChange={inputEvent}
                      value={fname.Pest}
                      type="text"
                      placeholder=""
                    />
                  </td>
                  <td>
                    <input
                      name="Crops"
                      onChange={inputEvent}
                      value={fname.Crops}
                      type="text"
                      placeholder=""
                    />
                  </td>
                </tr>
              </tbody>
            </Table>

            <div className="card card-body row scrollX col scrollY">
              <h6> </h6>
              <hr />
              <Table responsive striped bordered hover size="sm">
                <thead>
                  <tr>
                    <th className="col-md-4" name="sno">
                      <label>Crops Grown</label>
                    </th>

                    <th className="col-md-2" name="appT">
                      <label>Kharif</label>
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>
                    <th className="col-md-2" name="appT">
                      Rabi
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>

                    <th className="col-md-2" name="appT">
                      Zaid
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>

                    <th className="col-md-2" name="appT">
                      Perennial
                      <th className="col-md-2" name="appT">
                        Main
                      </th>
                      <th className="col-md-2" name="appT">
                        Intercrop
                      </th>
                    </th>
                  </tr>
                </thead>

                <tbody>
                  <tr ng-repeat="name in getdrugnameNewArray">
                    <td></td>

                    <td>
                      <td>
                        <input
                          name="K_main"
                          onChange={inputEvent}
                          value={fname.K_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="K_Intercrop"
                          onChange={inputEvent}
                          value={fname.K_Intercrop}
                          type="text"
                          placeholder=""
                        />
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name=" R_main"
                          onChange={inputEvent}
                          value={fname.R_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="R_intercrop"
                          onChange={inputEvent}
                          value={fname.R_intercrop}
                          type="text"
                          placeholder=" "
                        />
                      </td>
                    </td>
                    <td>
                      <td>
                        <input
                          name="Z_main"
                          onChange={inputEvent}
                          value={fname.Z_main}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="Z_Intercrop"
                          onChange={inputEvent}
                          value={fname.Z_Intercrop}
                          type="text"
                          placeholder=" Rate"
                        />
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name="P_main "
                          onChange={inputEvent}
                          value={fname.P_main }
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="P_intercrop"
                          onChange={inputEvent}
                          value={fname.P_intercrop}
                          type="text"
                          placeholder=" Rate"
                        />
                      </td>
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>

            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th className="col-md-4" name="sno">
                    Are you doing any processing
                  </th>
                  <th>
                  <input
                    name="Details"
                    onChange={inputEvent}
                    value={fname.Details}
                    type="text"
                    placeholder=""
                  />
                   </th>
                </tr>
                <tr>
                  <th className="col-md-4" name="sno">
                    Crop history (Last two seasons):
                  </th>
                  <th>
                  <input
                    name="Crop_History"
                    onChange={inputEvent}
                    value={fname.Crop_History}
                    type="text"
                    placeholder=""
                  />
                   </th>
                </tr>
              </thead>
            </Table>

           
            <label>
              (Note: If total area of farmers having more than 4 Ha area is 50%
              or more than total group area, then group cannot be accepted for
              certification).
            </label>
          </div>
        </div>
      </div>
    </section>
  );
}
