import React, { useState } from "react";
import Input from "./Input";
import Select from "./Select";

function ExpenseForm({ setExpenses }) {
  const [formData, setFormData] = useState({
    title: "",
    category: "",
    amount: "",
  });

  const [errors, setErrors] = useState({});

  const validationConfig = {
    title: [
      { required: true, message: "Please enter a title" },
      { minLenght: 5, message: "Title must be atleast 5 characters long" },
    ],
    category: [{ required: true, message: "Please select a category" }],
    amount: [
      { required: true, message: "Amount is required" },
      { type: "number", message: "Only Numbers are Allowed" },
    ],
  };

  const validate = (data) => {
    const errorsData = {};

    Object.entries(data).forEach(([key, value]) => {
      validationConfig[key].some((rule) => {
        if (rule.required && !value) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.minLenght && value.length < 5) {
          errorsData[key] = rule.message;
          return true;
        }
        if (rule.type === "number" && isNaN(value)) {
          errorsData[key] = rule.message;
          return true;
        }
      });
    });

    setErrors(errorsData);
    return errorsData;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validateResult = validate(formData);
    if (Object.keys(validateResult).length) return;
    setExpenses((prevState) => [
      ...prevState,
      { ...formData, id: crypto.randomUUID() },
    ]);
    setFormData({
      title: "",
      category: "",
      amount: "",
    });
  };

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    setErrors({});
  };

  return (
    <>
      <form className="expense-form" onSubmit={handleSubmit}>
        <Input
          label={"Title"}
          id={"title"}
          name={"title"}
          value={formData.title}
          onChange={handleOnChange}
          error={errors.title}
        />
        <Select
          label={"Category"}
          id={"category"}
          name={"category"}
          value={formData.category}
          options={["Grocery", "Clothes", "Bills", "Education", "Medicine"]}
          defaultOption="Select Category"
          onChange={handleOnChange}
          error={errors.category}
        />
        <Input
          label={"Amount"}
          id={"amount"}
          name={"amount"}
          value={formData.amount}
          onChange={handleOnChange}
          error={errors.amount}
        />
        <button className="add-btn">Add</button>
      </form>
    </>
  );
}

export default ExpenseForm;
