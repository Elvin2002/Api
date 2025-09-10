import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Container, Navbar, Nav } from 'react-bootstrap'
import React, { Component } from "react"
class Layouts extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activeTab:'home'
        }
        
    }
    render() {
        return (
            <Container>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Mi App</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Inicio</Nav.Link>
                        <Nav.Link href="#features">Características</Nav.Link>
                    </Nav>
                </Navbar>

                <Button variant="primary" className="mt-3">
                    Botón de Bootstrap
                </Button>
            </Container>
        )
    }

}

export default Layouts