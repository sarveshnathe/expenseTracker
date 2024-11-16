import React from "react";

function ContextMenu({ menuPosition, setMenuPosition, setExpenses, rowId }) {
  if (!menuPosition?.left || !menuPosition?.top) return;
  return (
    <div className="context-menu" style={menuPosition}>
      <div
        onClick={() => {
          console.log("Editing");
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
