import React from "react";
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    DropdownToggle,
    DropdownItem,
    DropdownMenu,
    UncontrolledDropdown,
} from 'reactstrap';
import '../css/homeStyle.css'

class Base extends React.Component{
    render(){
        return(
            <div>
                <div className="navbar-style">
                    <Navbar  expand="md">
                        <NavbarBrand className="text-style" href="/">Issue Tracker</NavbarBrand>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-style" href="/">Issues</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-style" href="/">User</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="text-style" nav caret>
                                    Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem >
                                        Logout
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Navbar>
                </div>
            </div>
        )
    }
}

export default Base;
