import React from "react";
import '../../src/table.css'
const Table = () => {
  return (
    <div className="table-container">
      <table className="combined-table">
        <thead>
          <tr>
            <th className="fixed-col-1" style={{ width: "150px" }}>
              Column 1
            </th>
            <th className="fixed-col-2" style={{ width: "150px" }}>
              Column 2
            </th>
            <th style={{ width: "200px" }}>Column 3</th>
            <th style={{ width: "200px" }}>Column 4</th>
            <th style={{ width: "200px" }}>Column 5</th>
            <th style={{ width: "100px" }}>Column 6</th>
          </tr>
        </thead>
        <tbody>
          {Array.from({ length: 6 }, (_, rowIndex) => (
            <tr key={rowIndex}>
              <td className="fixed-col-1">Row {rowIndex + 1} - Col 1</td>
              <td className="fixed-col-2">Row {rowIndex + 1} - Col 2</td>
              <td>Row {rowIndex + 1} - Col 3</td>
              <td>Row {rowIndex + 1} - Col 4</td>
              <td>Row {rowIndex + 1} - Col 5</td>
              <td>Row {rowIndex + 1} - Col 6</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
