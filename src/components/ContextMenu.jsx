import React from "react";

function ContextMenu({
  menuPosition,
  setMenuPosition,
  setExpenses,
  rowId,
  setFormData,
  expenses,
  setEditingRowId
}) {
  if (!menuPosition?.left || !menuPosition?.top) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          const {title, category, amount} = expenses.find((expense)=> expense.id === rowId)
          setEditingRowId(rowId)
          setFormData({
            title:title,
            category:category,
            amount:amount,
          })
          // console.log("Editing");
          setMenuPosition({});
        }}
      >
        Edit
      </div>
      <div
        onClick={() => {
          setExpenses((prevState) =>
            prevState.filter((expense) => expense.id !== rowId)
          );
          setMenuPosition({});
        }}
      >
        Delete
      </div>
    </div>
  );
}

export default ContextMenu;
