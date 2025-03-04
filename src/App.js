import React, { useState } from "react";
import EmployeeForm from "./components/EmployeeForm";
import EmployeeTable from "./components/EmployeeTable";
import EditControls from "./components/EmployeeControls";
import "./App.css";
import Table from "./components/Table";

function App() {
  const [employees, setEmployees] = useState([]);
  const [editing, setEditing] = useState(false);
  const [editedEmployees, setEditedEmployees] = useState([]);
  const [showInputFields, setShowInputFields] = useState(false);

  const handleAddRow = () => setShowInputFields(true);
  const handleEdit = () => {
    setEditing(true);
    setEditedEmployees([...employees]);
  };
  const handleSave = () => {
    setEmployees(editedEmployees);
    setEditing(false);
  };
  const handleCancel = () => setEditing(false);

  return (
    <div className="container">
      <h2 className="title">Employee Table</h2>
      <div className="header">
        <button className="add-btn" onClick={handleAddRow}>Add Section</button>
        <EditControls editing={editing} handleEdit={handleEdit} handleSave={handleSave} handleCancel={handleCancel} />
      </div>
      {/* {showInputFields && <EmployeeForm setEmployees={setEmployees} setShowInputFields={setShowInputFields} />}
      <EmployeeTable employees={employees} editing={editing} editedEmployees={editedEmployees} setEditedEmployees={setEditedEmployees} /> */}
      <Table/>
    </div>
  );
}

export default App;