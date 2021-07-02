import Button from "react-bootstrap/button";
import Form from "react-bootstrap/form";
import "./login.css";

export default function LoginPage(props) {
    return (
        <div className="login-form">
            <h1>Admin Login</h1>
            <Form>
                <Form.Group controlId="email">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="user.name@cissa.org.au"/>
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password"/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
            </Form>
        </div>
    )
}