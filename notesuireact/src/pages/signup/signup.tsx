import React, {useState} from "react";
import {Form, Row, Col, InputGroup, Button} from "react-bootstrap";
import UserService from "../../service/userservice.service";
import {Authsignup} from "../../models/authsignup";

const Signup = ()=>{
    const [emailId,setEmailId] = useState('');
    const [password,setPassword] = useState('');
    const [name,setName] = useState('');
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
        const authlogin = new Authsignup();
        authlogin.emailId = emailId;
        authlogin.password = password;
        authlogin.name = name;
        console.log(authlogin);
        UserService.signup('register',authlogin);

    }
    return(
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
                <Form.Group as={Col} md="4" controlId="validateCustomname">
                    <Form.Label>Name</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend1">@</InputGroup.Text>
                        <Form.Control
                            type="text"
                            placeholder="name"
                            onChange={(e)=> setName(e.target.value)}
                            aria-describedby="inputGroupPrepend1"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a name.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustomUsername">
                    <Form.Label>Username</Form.Label>
                    <InputGroup hasValidation>
                        <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                        <Form.Control
                            type="email"
                            placeholder="email"
                            onChange={(e)=> setEmailId(e.target.value)}
                            aria-describedby="inputGroupPrepend"
                            required
                        />
                        <Form.Control.Feedback type="invalid">
                            Please choose a username.
                        </Form.Control.Feedback>
                        <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    </InputGroup>
                </Form.Group>
                <Form.Group as={Col} md="4" controlId="validationCustom01">
                    <Form.Label>password</Form.Label>
                    <Form.Control
                        required
                        type="password"
                        placeholder="password"
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">enter password!</Form.Control.Feedback>
                </Form.Group>
            </Row>
            <Button type="submit">Submit form</Button>
        </Form>

    );
}


export default Signup;