import React from "react";

function EmployeeTable({ employees, editing, editedEmployees, setEditedEmployees }) {
  const handleEditChange = (event, index) => {
    const { name, value } = event.target;
    if ((name === "workingHours" || name === "ratePerHour") && !/^\d*$/.test(value)) {
      return;
    }
    setEditedEmployees((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], [name]: value };
      updated[index].salary = (parseInt(updated[index].workingHours, 10) || 0) * (parseInt(updated[index].ratePerHour, 10) || 0);
      return updated;
    });
  };

  return (
    <table>
      <thead>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Working Hours</th>
          <th>Rate per Hour</th>
          <th>Salary</th>
        </tr>
      </thead>
      <tbody>
        {employees.map((employee, index) => (
          <tr key={index} style={{ color: "black", backgroundColor: index % 2 === 0 ? "#f0f0f1" : "#b5b4b8" }}>
            <td>{editing ? <input type="text" name="firstName" value={editedEmployees[index]?.firstName} onChange={(e) => handleEditChange(e, index)} /> : employee.firstName}</td>
            <td>{editing ? <input type="text" name="lastName" value={editedEmployees[index]?.lastName} onChange={(e) => handleEditChange(e, index)} /> : employee.lastName}</td>
            <td>{editing ? <input type="number" name="workingHours" value={editedEmployees[index]?.workingHours} onChange={(e) => handleEditChange(e, index)} /> : employee.workingHours}</td>
            <td>{editing ? <input type="number" name="ratePerHour" value={editedEmployees[index]?.ratePerHour} onChange={(e) => handleEditChange(e, index)} /> : employee.ratePerHour}</td>
            <td>{editing ? editedEmployees[index]?.salary : employee.salary}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default EmployeeTable;
