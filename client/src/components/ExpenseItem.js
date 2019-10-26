import React from "react";
// import { MdEdit, MdDelete } from "react-icons/md";

const ExpenseItem = ({
  expense: { id, charge, expenseAmount },
  handleDeleteExpense,
  handleExpenseEdit
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="expense">{charge}</span>
        <span className="expenseAmount">${expenseAmount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleExpenseEdit(id)}
        >
           {/* <MdEdit /> */}
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDeleteExpense(id)}
        >
          {/* <MdDelete /> */}
        </button>
      </div>
    </li>
  );
};

export default ExpenseItem;