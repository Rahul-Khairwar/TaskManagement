import axios from "axios";
import { useState, useEffect } from "react";
import Table from 'react-bootstrap/Table';
import Button from "react-bootstrap/esm/Button";
import Pagination from 'react-bootstrap/Pagination';
import "../css/mytask.css"; // 🔥 Make sure this path is correct

const MyTask = () => {
  const [mydata, setMydata] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const loadData = async () => {
    let api = `http://localhost:8080/client/mytask/?id=${localStorage.getItem("userid")}`;
    try {
      const response = await axios.get(api);
      setMydata(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const submitTask = async (id) => {
    let api = `http://localhost:8080/client/completetask/?id=${id}`;
    try {
      await axios.get(api);
    } catch (error) {
      console.log(error);
    }
    loadData();
  };

  const totalPages = Math.ceil(mydata.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const endIdx = startIdx + itemsPerPage;
  const paginatedData = mydata.slice(startIdx, endIdx);
  let no = startIdx + 1;

  const ans = paginatedData.map((key, index) => (
    <tr key={index}>
      <td>{no++}</td>
      <td>{key.title}</td>
      <td>{key.description}</td>
      <td>{key.compday}</td>
      <td>
        {key.taskstatus ? (
          <Button className="btn-submitted" disabled>Task Submitted</Button>
        ) : (
          <Button className="btn-submit" onClick={() => submitTask(key._id)}>Submit Task</Button>
        )}
      </td>
    </tr>
  ));

  let paginationItems = [];
  for (let number = 1; number <= totalPages; number++) {
    paginationItems.push(
      <Pagination.Item
        key={number}
        active={number === currentPage}
        onClick={() => setCurrentPage(number)}
      >
        {number}
      </Pagination.Item>
    );
  }

  return (
    <div className="task-container">
      <h2 className="task-title">📋 Task List Given By Admin</h2>
      <Table striped bordered hover responsive className="task-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Description</th>
            <th>Deadline</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>{ans}</tbody>
      </Table>
      <Pagination className="justify-content-center pagination-custom">
        {paginationItems}
      </Pagination>
    </div>
  );
};

export default MyTask;
