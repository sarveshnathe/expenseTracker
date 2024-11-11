import React from "react";
import './App.css'
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";

function App() {
  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
        <ExpenseForm />
        <ExpenseTable />
          <div className="context-menu">
            <div>Edit</div>
            <div>Delete</div>
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
