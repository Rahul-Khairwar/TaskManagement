import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import BASE_URL from '../config/Api';
import { useState } from 'react';
import axios from 'axios';
import "../css/createuser.css";

const CreateUser = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const api = `${BASE_URL}/usercreation`;
    try {
      const response = await axios.post(api, { name, email, designation });
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-wrapper">
      <h2 className="form-heading">🚀 Create New User</h2>
      <Form className="user-form" onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>👤 Name</Form.Label>
          <Form.Control
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="John Doe"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>📧 Email Address</Form.Label>
          <Form.Control
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="john@example.com"
          />
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>🎯 Designation</Form.Label>
          <Form.Select
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
          >
            <option>--Select Designation--</option>
            <option>Programmer</option>
            <option>Developer</option>
            <option>Designer</option>
            <option>DataBase Developer</option>
            <option>Analyst</option>
            <option>Coder</option>
          </Form.Select>
        </Form.Group>

        <Button type="submit" className="submit-btn">
          🌟 Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
