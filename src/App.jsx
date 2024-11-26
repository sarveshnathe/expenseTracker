import React, { useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseTable from "./components/ExpenseTable";
import ContextMenu from "./components/ContextMenu";
import expenseData from "./expenseData";

function App() {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [expenses, setExpenses] = useState(expenseData);
  const [editingRowId, setEditingRowId] = useState('');

  return (
    <>
      <main>
        <h1>Track Your Expense</h1>
        <div className="expense-tracker">
          <ExpenseForm
            setExpenses={setExpenses}
            formData={formData}
            setFormData={setFormData}
            editingRowId={editingRowId}
            setEditingRowId={setEditingRowId}
          />
          <ExpenseTable
            expenses={expenses}
            setExpenses={setExpenses}
            setFormData={setFormData}
            setEditingRowId={setEditingRowId}
          />
        </div>
      </main>
    </>
  );
}

export default App;
