import React from 'react';
import {
    Navbar,
    Nav,
    NavDropdown,
    Container,
    Form,
    FormControl,
} from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

function Header() {
    const history = useHistory();
    return (
        <Navbar bg="primary" expand="lg" variant="dark">
            <Container>
                <Navbar.Brand>
                    <Link to="/">Notes</Link>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="m-auto">
                        <Form inline>
                            <FormControl
                                type="text"
                                placeholder="Search"
                                className="mr-sm-2"
                            />
                        </Form>
                    </Nav>
                    <Nav>
                        <Nav.Link>
                            <Link to="/mynotes">My Notes</Link>
                        </Nav.Link>

                        <NavDropdown title="Wenodh" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">
                                My Profile
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item
                                onClick={() => {
                                    localStorage.removeItem('userInfo');
                                    history.push('/');
                                }}
                            >
                                <Link to="/">LogOut</Link>
                            </NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default Header;
