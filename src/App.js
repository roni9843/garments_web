import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import "./App.css";
import InputSection from "./components/InputSection";
import socket from "./socket";

const StyledApp = styled.div`
  font-family: "Arial", sans-serif;
  padding: 20px;

  h1 {
    color: #007bff;
    margin-bottom: 20px;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 20px;
  }

  th,
  td {
    border: 1px solid #dee2e6;
    padding: 10px;
    text-align: left;
  }

  th {
    background-color: #007bff;
    color: white;
  }

  tr:nth-child(even) {
    background-color: #f8f9fa;
  }

  tr:hover {
    background-color: #e2e6ea;
  }
`;

function App() {
  const [productStore, setProductStore] = useState([]);

  useEffect(() => {
    socket.on("getValue", (arg) => {
      setProductStore(arg);
    });
  }, [socket]);

  useEffect(() => {
    socket.on("broadcast", (arg) => {
      setProductStore(arg);
    });
  }, [socket]);

  return (
    <StyledApp>
      <div style={{ display: "none" }}>
        <InputSection socket={socket}></InputSection>
      </div>

      <div>
        <h1>Factory Stock Management</h1>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Production Date</th>
              <th>Shift</th>
              <th>Block</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {productStore.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.product_name}</td>
                <td>{product.productionDate}</td>
                <td>{product.shift}</td>
                <td>{product.block}</td>
                <td>{product.qty}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </StyledApp>
  );
}

export default App;
