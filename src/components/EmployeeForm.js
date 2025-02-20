import React, { useState } from "react";

function EmployeeForm({ setEmployees, setShowInputFields }) {
  const [newEmployee, setNewEmployee] = useState({
    firstName: "",
    lastName: "",
    workingHours: "",
    ratePerHour: "",
    salary: 0,
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    if ((name === "workingHours" || name === "ratePerHour") && value !== "" && !/^\d+$/.test(value)) {
      return;
    }
    setNewEmployee((prev) => {
      const updatedEmployee = { ...prev, [name]: value };
      updatedEmployee.salary = (parseInt(updatedEmployee.workingHours, 10) || 0) * (parseInt(updatedEmployee.ratePerHour, 10) || 0);
      return updatedEmployee;
    });
  };

  const handleSubmit = () => {
    setEmployees((prev) => [...prev, newEmployee]);
    setNewEmployee({ firstName: "", lastName: "", workingHours: "", ratePerHour: "", salary: 0 });
    setShowInputFields(false);
  };

  return (
    <div className="input-container">
      <input type="text" name="firstName" placeholder="First Name" value={newEmployee.firstName} onChange={handleInputChange} />
      <input type="text" name="lastName" placeholder="Last Name" value={newEmployee.lastName} onChange={handleInputChange} />
      <input type="number" name="workingHours" placeholder="Working Hours" value={newEmployee.workingHours} onChange={handleInputChange} />
      <input type="number" name="ratePerHour" placeholder="Rate Per Hour" value={newEmployee.ratePerHour} onChange={handleInputChange} />
      <button className="submit-btn" onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default EmployeeForm;