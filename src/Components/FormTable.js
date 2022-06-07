import React, { useState } from "react";
import { validateArray, initialValues } from "../utils";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import Form from "react-bootstrap/Form";
import ToggleButton from "react-bootstrap/ToggleButton";
import Alert from 'react-bootstrap/Alert'

export default function FormTable() {
  const [checked, setChecked] = useState(false);
  const [showError, setShowError] = useState(false);
  const [showOutput, setShowOutput] = useState(false);
  const [data, setData] = useState([]);
  const [values, setValues] = useState(initialValues);
  const [output, setOutput] = useState(null)
  const [errorMsg, setErrorMSg] = useState("");

  const handleCheckBoxChange = (e)=>{
    setChecked(e.currentTarget.checked);
    let checkedValue = checked === true ? 1 : 0 ;
    setValues({
      ...values,gender:checkedValue
    });
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    if ([name] === "gender") {
    } else {
      setValues({
        ...values,
        [name]: value,
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let validatedArray = validateArray(values, setErrorMSg, setShowError);
    setData(validatedArray === undefined ? [] : validatedArray);
    if (data.length !== 0 && data !== undefined) {
      console.log("calling API");
      fetch("predict_output", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          setOutput(data.output);
          setShowOutput(true);
        });
    }
  };

  return (
    <div className="container ">
      {
        showOutput && 
        output === "1" ? <Alert transition dismissible onClose = {() =>setShowOutput(false)}>you do not have the heart disease</Alert> : output === "0" &&  <Alert dismissible onClose = {() =>setShowOutput(false)}> you do have the heart diease</Alert> 
      }
      {
        showError && 
        <Alert variant="danger" onClose={() => setShowError(false)} dismissible style={{margin:"auto", width: " 27rem", height : " 0.1 rem"}}>
        <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
        <p>
          {errorMsg}
        </p>
      </Alert>
      }
      <form method="get" style ={{ marginTop:"20px" }}>
        <Table striped bordered hover size="sm">
          <thead></thead>
          <tbody>
            <tr>
              <th>Parameter</th>
              <th>Your Input</th>
            </tr>
            <tr>
              <td>Age</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="age"
                  value={values.age}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>Gender</td>
              <td>
                <ToggleButton
                  id="toggle-check"
                  type="checkbox"
                  variant="primary"
                  checked={checked}
                  value="1"
                  onChange={handleCheckBoxChange}
                >
                  {checked === true ? "Male" : "Female"}
                </ToggleButton>
              </td>
            </tr>
            <tr>
              <td>cp</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="cp"
                  value={values.cp}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>trestbps</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="trestbps"
                  value={values.trestbps}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>chol</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="chol"
                  value={values.chol}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>fbs</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="fbs"
                  value={values.fbs}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>restecg</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="restecg"
                  value={values.restecg}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>thalach</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="thalach"
                  value={values.thalach}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>exang</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="exang"
                  value={values.exang}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>oldpeak</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="oldpeak"
                  value={values.oldpeak}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>slope</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="slope"
                  value={values.slope}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>ca</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="ca"
                  value={values.ca}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
            <tr>
              <td>thal</td>
              <td>
                <Form.Control
                  type="number"
                  required
                  name="thal"
                  value={values.thal}
                  onChange={handleInputChange}
                />
              </td>
            </tr>
          </tbody>
        </Table>
        <div>
          <Button onClick={handleSubmit} type="submit" variant="dark">
            Submit
          </Button>
        </div>
      </form>
    </div>
  );
}
