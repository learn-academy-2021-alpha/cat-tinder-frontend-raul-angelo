import React, { useState } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'

const Header = () => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <>
      <Jumbotron fluid>
        <Container fluid>
          <h1 className="display-3">Cat Tinder</h1>
          <img src="https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_1280.jpg" alt="tiny white kitty" />
          <p className="lead">Like Tinder but for cats.</p>
        </Container>
        <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
            <NavItem>
              <NavLink href="/components/">Components</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      </Jumbotron>
    </>
  )
}
export default Header














// import React, { Component } from "react";
// import { Jumbotron, Container } from "reactstrap";
// import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink } from 'reactstrap'
//
//
//
// const Header = () => {
//  const [collapsed, setCollapsed] = useState(true);
//
//  const toggleNavbar = () => setCollapsed(!collapsed);
//
// 		return (
// 			<>
// 				<Jumbotron fluid>
// 					<Container fluid>
// 						<h1 className='display-3'>Cat Tinder !</h1>
// 						<p className='lead'>Like tinder but for cats.</p>
// 					</Container>
// 				</Jumbotron>
// 			</>
// 		);
// 	}
//
// export default Header;
