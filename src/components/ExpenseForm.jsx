import React from "react";

function ExpenseForm() {
  return (
    <>
      <form className="expense-form">
        <div className="input-container">
          <label for="title">Title</label>
          <input id="title" />
        </div>
        <div className="input-container">
          <label for="category">Category</label>
          <input id="category" />
        </div>
        <div className="input-container">
          <label for="amount">Amount</label>
          <input id="amount" />
        </div>
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
