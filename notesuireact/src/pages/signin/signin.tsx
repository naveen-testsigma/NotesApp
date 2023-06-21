/* eslint-disable no-restricted-globals */
import React, {useState} from "react";
import {Authlogin} from "../../models/authlogin";
import { reject } from "lodash";
import {Form, Row, Col, InputGroup, Button} from "react-bootstrap";
import UserService from "../../service/userservice.service";
import { useNavigate } from "react-router-dom";
import Navbar from "../../navbar";
const Signin = ()=>{
    const navigate = useNavigate();
    const [emailId,setEmailId] = useState('');
    const [password,setPassword] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) => {
        event.preventDefault();
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            event.preventDefault();
            setValidated(true);
            Signinauth();
        }


    };

    const Signinauth =()=>{
      const authlogin = new Authlogin();
      authlogin.username = emailId;
      authlogin.password = password;
      UserService.signin('authenticate',authlogin).then((res) => {
        alert("sigin successfull");
        navigate("/dashboard");

      })
      .catch((e) => {
        reject(e);
        alert("password or email must be wrong");
        location.reload();
      });
      
    }
    return(
        <>
        <Navbar isLogin={false}/>
        <div className="container mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" lg="12" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend" className="bg-primary">@</InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Username"
              onChange={(e)=> setEmailId(e.target.value)}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" lg="12" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="password" required onChange={(e)=>setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <div className="text-center">
      <Button type="submit" variant="outline-primary">Submit form</Button>
      </div>
    </Form>
        </div>
        </>

    );
}

export default Signin;