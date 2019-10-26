import React from "react";
// import { MdSend } from "react-icons/md";

const ExpenseForm = ({
  charge,
  expenseAmount,
  handleCharge,
  handleExpenseAmount,
  handleSubmitExpenses,
  ExpenseEdit
}) => {
  return (
    <form onSubmit={handleSubmitExpenses}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="expense">expense</label>
          <input
            type="text"
            className="form-control"
            id="expense"
            name="expense"
            placeholder="e.g. rent"
            value={charge}
            onChange={handleCharge}
          />
        </div>
        <div className="form-group">
          <label htmlFor="expenseAmount">expense amount</label>
          <input
            type="number"
            className="form-control"
            id="expenseAmount"
            name="expenseAmount"
            placeholder="e.g. 100"
            value={expenseAmount}
            onChange={handleExpenseAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {ExpenseEdit ? "edit" : "submit"}
        {/* submit  */}
        {/* <MdSend className="btn-icon" /> */}
      </button>
    </form>
  );
};

export default ExpenseForm;