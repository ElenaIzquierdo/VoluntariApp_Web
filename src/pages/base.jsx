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
                    <div className="title">
                        <p className="titilenav-style">VoluntariApp</p>
                    </div>
                    <Navbar  expand="md">
                        <Nav navbar>
                            <NavItem>
                                <NavLink className="text-style" href="/">Esdeveniments</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-style" href="/">Forum</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="text-style" href="/">Calendari</NavLink>
                            </NavItem>
                        </Nav>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink className="text-style" href="/">Perfil</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle className="text-style" nav caret>
                                    Opcions
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
