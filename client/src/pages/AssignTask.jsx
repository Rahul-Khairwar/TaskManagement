// AssignTask.js
import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import BASE_URL from '../config/Api';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import "../css/AssignTask.css";


const AssignTask = () => {
  const [mydata, setMydata] = useState([]);
  const [input, setInput] = useState({});
  const [show, setShow] = useState(false);
  const [userid, setUserid] = useState("");

  const handleClose = () => setShow(false);

  const handleShow = (uid) => {
    setUserid(uid);
    setShow(true);
  };

  const loadData = async () => {
    try {
      const response = await axios.get(`${BASE_URL}/user/showuserdata`);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!userid) {
      alert("User ID not found!");
      return;
    }

    try {
      const response = await axios.post(`${BASE_URL}/user/assigntask`, {
        ...input,
        userid,
      });
      alert("Task assigned successfully!");
      handleClose();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="assign-task-page">
      <h2 className="heading">Assign Task To User</h2>
      <hr />
      <Table striped bordered hover className="custom-table">
        <thead>
          <tr>
            <th>Sno</th>
            <th>User Name</th>
            <th>Email</th>
            <th>Designation</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {mydata.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>
              <td>{user.designation}</td>
              <td>
                <Button
                  variant="outline-primary"
                  onClick={() => handleShow(user._id)}
                >
                  Assign Task
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Assign New Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit} className="assign-form">
            <Form.Group className="mb-3">
              <Form.Label>Task Title</Form.Label>
              <Form.Control type="text" name="title" onChange={handleInput} placeholder="Enter task title" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control type="text" name="description" onChange={handleInput} placeholder="Task description" />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Completion Day</Form.Label>
              <Form.Control type="number" name="compday" onChange={handleInput} placeholder="e.g. 5" />
            </Form.Group>
            <div className="form-actions">
              <Button variant="success" type="submit">Submit</Button>
              <Button variant="secondary" onClick={handleClose} className="ms-2">Cancel</Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </div>
  );
};

export default AssignTask;
