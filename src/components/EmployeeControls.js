import React from "react";

function EditControls({ editing, handleEdit, handleSave, handleCancel }) {
  return (
    <div className="edit-controls">
      {!editing ? (
        <button className="edit-btn" onClick={handleEdit}>Edit</button>
      ) : (
        <div className="save-cancel">
          <button className="save-btn" onClick={handleSave}>Save</button>
          <button className="cancel-btn" onClick={handleCancel}>Cancel</button>
        </div>
      )}
    </div>
  );
}

export default EditControls;