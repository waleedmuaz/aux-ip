// import Container from 'react-bootstrap/Container';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';

// function DashboardHeader() {
//   return (
//     <Navbar bg="light" expand="lg">
//       <Container>
//         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav" />
//         <Navbar.Collapse id="basic-navbar-nav">
//           <Nav className="me-auto">
//             <Nav.Link href="#home">Home</Nav.Link>
//             <Nav.Link href="#link">Link</Nav.Link>
//           </Nav>
//         </Navbar.Collapse>
//       </Container>
//     </Navbar>
//   );
// }

// export default DashboardHeader;


import React from 'react';
import {Link} from "react-router-dom";

const DashboardHeader = () => {
    return (
        <ul className="mainmenu">
            <li className="has-droupdown"><Link to="/">Home</Link></li>
            <li><Link to="/ip-software">IP Service</Link></li>
            <li><Link to="/about-us">Company</Link></li>
        </ul>
    )
}
export default DashboardHeader;
