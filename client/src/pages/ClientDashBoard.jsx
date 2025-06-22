import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import "../css/ClientDashBoard.css"

const ClientDashBoard = () => {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/home");
  };

  const name = localStorage.getItem("clientname");
  const email = localStorage.getItem("clientemail");

  return (
    <div className="dashboard-container">
      {/* Header */}
      <div className="dashboard-header">
        <div className="dashboard-userinfo">
          <h2>Welcome, {name}</h2>
          <p>{email}</p>
        </div>
        <button className="logout-btn" onClick={logout}>Logout</button>
      </div>

      {/* Navigation + Content */}
      <div className="dashboard-content">
        <Navbar bg="dark" data-bs-theme="dark" className="dashboard-navbar">
          <Container>
            <Navbar.Brand>User Area</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link as={Link} to="mytask">My Task</Nav.Link>
              <Nav.Link as={Link} to="resetpassword">Reset Password</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <div className="dashboard-outlet">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ClientDashBoard;
