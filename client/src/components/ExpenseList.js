import React from "react";
import ExpenseItem from "./ExpenseItem";
// import { MdDelete } from "react-icons/md";

const ExpenseList = ({ expenses, handleDeleteExpense, handleExpenseEdit, clearExpenseItems }) => {
  return (
    <>
      <ul className="list">
        {expenses.map(expense => {
          return (
            <ExpenseItem
              key={expense.id}
              expense={expense}
              handleDelete={handleDeleteExpense}
              handleEdit={handleExpenseEdit}
            />
          );
        })}
      </ul>
      {expenses.length > 0 && (
        <button className="btn" onClick={clearExpenseItems}>
          clear expenses

          {/* <MdDelete className="btn-icon" /> */}
        </button>

      )}
    </>
  );
};

export default ExpenseList;