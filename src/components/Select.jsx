import React from "react";

function Select({
  label,
  id,
  name,
  value,
  options,
  defaultOption,
  onChange,
  error,
}) {
  return (
    <div className="input-container">
      <label htmlFor={id}>{label}</label>
      <select id={id} name={name} value={value} onChange={onChange}>
        {defaultOption && (
          <option value="" hidden>
            {defaultOption}
          </option>
        )}
        {options.map((option, i) => {
          return (
            <option key={i} value={option}>
              {option}
            </option>
          );
        })}
      </select>
      <p className="error">{error}</p>
    </div>
  );
}

export default Select;
