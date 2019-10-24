import React from "react";
import { Navbar, Nav, NavDropdown, Form, Button } from "react-bootstrap";
import { FormControl } from "react-bootstrap";
import './Header.scss';


export class Header extends React.Component {
    
    constructor(props: any) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <Navbar bg='dark' expand='lg'>
                <Navbar.Brand href='#home'>Manh Phan</Navbar.Brand>
                <Navbar.Toggle aria-controls='basic-navbar-nav' />
                <Navbar.Collapse id='basic-navbar-nav'>
                    <Nav className='mr-auto'>
                        <Nav.Link href='#home'>Home</Nav.Link>
                        <Nav.Link href='#link'>Algorithms</Nav.Link>
                        <NavDropdown title='Languages' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#action/java'>Java</NavDropdown.Item>
                            <NavDropdown.Item href='#action/javascript'>Javascript</NavDropdown.Item>
                            <NavDropdown.Item href='#action/c'>C++</NavDropdown.Item>
                            <NavDropdown.Item href='#action/python'>Python</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type='text' placeholder='Search' className='mr-sm-2' />
                        <Button variant='outline-success'>Search...</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}