import React from "react";

function Input({ label, id, value, name, onChange, error }) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <input id={id} name={name} value={value} onChange={onChange} />
      <p className="error">{error}</p>
    </div>
  );
}

export default Input;
