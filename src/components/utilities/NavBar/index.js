import React from 'react';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { connect } from 'react-redux';
import { toggleHeader } from '../../../redux/globalAction';

class NavBar extends React.Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">starter-site</NavbarBrand>
          <NavbarToggler onClick={this.props.toggleHeader} />
          <Collapse isOpen={this.props.globals.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/hello">Hello</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/counter">Counter</NavLink>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>Option 1</DropdownItem>
                  <DropdownItem>Option 2</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>Reset</DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  globals: state.getIn(['globals'])
});

const mapDispatchToProps = dispatch => ({
  toggleHeader: () => dispatch(toggleHeader())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
