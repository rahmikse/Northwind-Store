import React, {Component} from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText
} from 'reactstrap';
import CartSummary from "../cart/CartSummary";
import {Link} from "react-router-dom";

class Navi extends Component {

    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand ><Link to="/">Northwind Mağazası</Link></NavbarBrand>
                    <NavbarToggler onClick={this.toggle}/>
                    <Collapse isOpen={this.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink ><Link to="/saveProduct">Ürün Ekle</Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/rahmikse">GitHub</NavLink>
                            </NavItem>
                            <CartSummary/>
                        </Nav>

                    </Collapse>
                </Navbar>
            </div>
        );
    }
}
export default Navi;