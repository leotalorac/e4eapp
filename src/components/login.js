import React from "react"
import "../css/login.css"
import "react-notifications-component/dist/theme.css";
import { Button,Form } from 'react-bootstrap';
class Login extends React.Component {

    render() {
      return(
        <div className="logincontainer">
            <img src="./images/logo.png" className="logoform" alt=""/>
            <Form className={"form-login"} action="/city">
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>ID</Form.Label>
                <Form.Control type="number" placeholder="ID" />
            </Form.Group>
            <Button variant="primary" type="submit" className="button-login">
                Submit
            </Button>
            </Form>
        </div>
      );
    }
  } 
export default Login;