import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';


export default function TopNav() {
    return (
        <Container fluid style={{margin: "0"}}>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand style={{margin: "0"}} href="#home">
                    <img style={{width: "150px", height: "auto"}} src="./Instacart.png" alt="instacart logo" /> 
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto"> 
                </Nav>
                <Nav style={{padding: "24px 40px 20px 40px", fontSize: "18px", lineHeight: "26px", fontWeight: "bolder"}} >
                    <Nav.Link style={{color: "#343538"}} href="#LogIn">Log In</Nav.Link>
                    <Button variant="success" style={{fontSize: "18px"}} href="#SignUp">Sign Up</Button>{' '}
                </Nav>
                </Navbar.Collapse>
            </Navbar>
        </Container>


    )
}