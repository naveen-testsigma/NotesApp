import React, {useState} from "react";
import {Form, Row, Col, InputGroup, Button} from "react-bootstrap";
import UserService from "../../service/userservice.service";
import {Authsignup} from "../../models/authsignup";
import Navbar from "../../navbar";
import {useNavigate} from "react-router-dom";

const Signup = ()=>{
    const navigate = useNavigate();
    const [emailId,setEmailId] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event:any) => {
        const form = event.currentTarget;
        setValidated(true);
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }
        else{
            Signinauth();
            navigate("/signin")
        }
        };
    const Signinauth =()=>{
        console.log("came to signing auth")
        const authlogin = new Authsignup();
        authlogin.emailId = emailId;
        authlogin.password = password;
        authlogin.name = name;
        UserService.signup('register',authlogin);

    }
    return(
        <div>
            <Navbar />
            <div className="container mt-5">
            <Form noValidate validated={validated} onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" lg="12" controlId="validationCustom01">
          <Form.Label>Name</Form.Label>
          <Form.Control
            required
            type="text"
            onChange={(e)=> setName(e.target.value)}
            placeholder="First name"

          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid">
            Please provide a valid Name.
          </Form.Control.Feedback>
        </Form.Group>

        <Form.Group as={Col} md="12" lg="12" controlId="validationCustomUsername">
          <Form.Label>Username</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend" className="bg-primary"><i className="fa fa-envelope"
                                                                              aria-hidden="true"></i>
            </InputGroup.Text>
            <Form.Control
              type="email"
              placeholder="Username"
              onChange={(e)=> {
                  setEmailId(e.target.value);
              }}
              aria-describedby="inputGroupPrepend"
              required
            />
            <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>
            <Form.Control.Feedback type="invalid">
              Please choose a username.
            </Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" lg="12" controlId="validationCustom03">
          <Form.Label>Password</Form.Label>
            <InputGroup hasValidation>
                <InputGroup.Text id="inputGroupPrepend" className="bg-primary"><i className="fa fa-lock m-1" aria-hidden="true"></i></InputGroup.Text>
          <Form.Control type="password" placeholder="password" required onChange={(e)=>setPassword(e.target.value)} />
          <Form.Control.Feedback type="invalid">
            Please provide a valid password.
          </Form.Control.Feedback>
          <Form.Control.Feedback>
            Looks good!
          </Form.Control.Feedback>
            </InputGroup>
        </Form.Group>
      </Row>
      <div className="text-center">
      <Button type="submit" variant="outline-success"><i className="fa fa-user-plus" aria-hidden="true"></i> Sign-Up</Button>
      </div>
    </Form>
        </div>
        </div>
    );
}


export default Signup;