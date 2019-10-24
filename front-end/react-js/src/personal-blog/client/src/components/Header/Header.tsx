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
                        <NavDropdown title='Languages' id='basic-nav-dropdown'>
                            <NavDropdown.Item href='#action/java'>Java</NavDropdown.Item>
                            <NavDropdown.Item href='#action/javascript'>Javascript</NavDropdown.Item>
                            <NavDropdown.Item href='#action/c'>C++</NavDropdown.Item>
                            <NavDropdown.Item href='#action/python'>Python</NavDropdown.Item>
                            {/* <NavDropdown.Divider />
                            <NavDropdown.Item href='#action/3.4'>Separated link</NavDropdown.Item> */}
                        </NavDropdown>
                        <NavDropdown title='Data structure' id='nav-dropdown-data-structure'>
                            <NavDropdown.Item href='#action/linked-list'>Linked List</NavDropdown.Item>
                            <NavDropdown.Item href='#action/array'>Array</NavDropdown.Item>
                            <NavDropdown.Item href='#action/hash-table'>Hash Table</NavDropdown.Item>
                            <NavDropdown.Item href='#action/tree'>Tree</NavDropdown.Item>
                        </NavDropdown>
                        <NavDropdown title='Algorithms' id='nav-dropdown-algorithms'>
                            <NavDropdown.Item href='#action/dp'>Dynamic Programming</NavDropdown.Item>
                            <NavDropdown.Item href='#action/back-track'>Back tracking</NavDropdown.Item>
                            <NavDropdown.Item href='#action/divide-conquer'>Divide and Conquer</NavDropdown.Item>
                            <NavDropdown.Item href='#action/greedy-algorithm'>Greedy algorithm</NavDropdown.Item>
                            <NavDropdown.Item href='#action/search-algorithm'>Search algorithm</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type='text' placeholder='Search' className='mr-sm-2 search-txtbox' />
                        <Button variant='outline-success'>Search...</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}