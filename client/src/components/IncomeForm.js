import React from "react";
// import { MdSend } from "react-icons/md";

const IncomeForm = ({
  earning,
  incomeAmount,
  handleEarning,
  handleIncomeAmount,
  handleSubmitIncome,
  IncomeEdit
}) => {
  return (
    <form onSubmit={handleSubmitIncome}>
      <div className="form-center">
        <div className="form-group">
          <label htmlFor="income">earning</label>
          <input
            type="text"
            className="form-control"
            id="earning"
            name="earning"
            placeholder="e.g. salary"
            value={earning}
            onChange={handleEarning}
          />
        </div>
        <div className="form-group">
          <label htmlFor="incomeAmount">earning amount</label>
          <input
            type="number"
            className="form-control"
            id="incomeAmount"
            name="incomeAmount"
            placeholder="e.g. 100"
            value={incomeAmount}
            onChange={handleIncomeAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {IncomeEdit ? "edit" : "submit"}
        {/* submit  */}
        {/* <MdSend className="btn-icon" /> */}
      </button>
    </form>
  );
};

export default IncomeForm;