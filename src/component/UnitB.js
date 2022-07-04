import React, { useState } from "react";
import { Form, Table } from "react-bootstrap";

export default function UnitB() {
  const [fname, setName] = useState({
    Name_Add: "",

    Project: "",

    Self_C: "",

    Total_Area: "",

    Area_Under_C: "",

    Total_Farmer: "",

    Famrer_More_Area: "",

    Total_Farmer_Area: "",
    K_main: "",
    K_Intercrop: "",
    R_main: "",
    R_intercrop: "",
    Z_main: "",
    Z_Intercrop: "",
    P_main: "",
    P_intercrop: "",
    Seeds: "",

    Nutrient: "",
    Pest: "",

    Location_Farmer: "",

    Crop_History: "",
  });

  const inputEvent = (event) => {
    console.log(event.target.value);
    setName(event.target.value);
  };

  return (
    <section className="section">
      <div className="container card card-body ">
        <h5 className="center">Farming unit information page 2</h5>

        <div className="card card-body ">
          <div className="table table-striped table-bordered table-sm">
            <div className="card card-body">
              <h6>B. Grower Group </h6>
              <hr />
              <div className="table table-striped table-bordered table-sm">
                <Table responsive striped bordered hover size="sm">
                  <thead>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Grower Group Name & address
                      </th>
                      <th> 
                      <input
                        name="Name_Add"
                        onChange={inputEvent}
                        value={fname.Name_Add}
                        type="text"
                        placeholder=""
                      />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Project management
                      </th>
                      <th> 
                      <input
                        name="Project"
                        onChange={inputEvent}
                        value={fname.Project}
                        type="text"
                        placeholder=""
                      />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Grower Group Managed by
                      </th>
                      <th> 
                      <input
                        name="name"
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
                        name="Total_Area"
                        onChange={inputEvent}
                        value={fname.Total_Area}
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
                        name="Area_Under_C"
                        onChange={inputEvent}
                        value={fname.Area_Under_C}
                        type="text"
                        placeholder=""
                      />
                      </th> 
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Total number of farmers:
                      </th>
                      <th>    
                      <input
                        name="Total_Farmer"
                        onChange={inputEvent}
                        value={fname.Total_Farmer}
                        type="text"
                        placeholder=""
                      />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        No. of farmers having more than 4 Ha area
                      </th>
                      <th> 
                      <input
                        name="Famrer_More_Area"
                        onChange={inputEvent}
                        value={fname.Famrer_More_Area}
                        type="text"
                        placeholder=""
                      />
                      </th>
                    </tr>
                    <tr>
                      <th className="col-md-4" name="sno">
                        Total area of farmers having more than 4 Ha area
                      </th>
                      <th> 
                      <input
                        name="Total_Farmer_Area"
                        onChange={inputEvent}
                        value={fname.Total_Farmer_Area}
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
                  </thead>
                  <tbody>
                    <tr>
                      <td></td>
                      <td>
                        <input
                          name="Seeds"
                          onChange={inputEvent}
                          value={fname.Seeds}
                          type="text"
                          placeholder=""
                        />
                      </td>
                      <td>
                        <input
                          name="Nutrient"
                          onChange={inputEvent}
                          value={fname.Nutrient}
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
                    </tr>
                  </tbody>
                </Table>
              </div>
            </div>

            <div className="card card-body row scrollX col scrollY">
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
                        <th> 
                        <input
                          name="K_main"
                          onChange={inputEvent}
                          value={fname.K_main}
                          type="text"
                          placeholder="Time"
                        />
                        </th>
                      </td>
                      <td>
                        <th> 
                        <input
                          name=" K_Intercrop"
                          onChange={inputEvent}
                          value={fname.K_Intercrop}
                          type="text"
                          placeholder=" Rate"
                        />
                        </th>
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name="R_main"
                          onChange={inputEvent}
                          value={fname.R_main}
                          type="text"
                          placeholder="Main"
                        />
                      </td>
                      <td>
                        <input
                          name="R_intercrop"
                          onChange={inputEvent}
                          value={fname.R_intercrop}
                          type="text"
                          placeholder="Intercrop"
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
                          placeholder=" "
                        />
                      </td>
                    </td>

                    <td>
                      <td>
                        <input
                          name="P_main"
                          onChange={inputEvent}
                          value={fname.P_main}
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
                          placeholder=" "
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
                    Location of farmers (Mention districts or town name)
                  </th>
                  <th>
                  <input
                    name="Location_Farmer"
                    onChange={inputEvent}
                    value={fname.Location_Farmer}
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
