import { useState } from "react";
import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import "./login.css";


export default function LoginPage(props) {
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    const submit = () => {
        // TODO: Interface with backend and login (store local cookie)
    }
    
    return (
        <div className="login-form">
            <h1>Admin Login</h1>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="user.name@cissa.org.au" onChange={(e) => setEmail(e.target.value)}/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" onChange={(e) => setPassword(e.target.value)}/>
                </Form.Group>
                <Button variant="primary" onClick={submit}>
                    Login
                </Button>
            </Form>
        </div>
    )
}