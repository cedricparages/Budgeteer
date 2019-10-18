import React from "react";

const IncomeForm = ({
  earning,
  amount,
  handleEarning,
  handleAmount,
  handleSubmit,
  edit
}) => {
  return (
    <form onSubmit={handleSubmit}>
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
          <label htmlFor="amount">amount</label>
          <input
            type="number"
            className="form-control"
            id="amount"
            name="amount"
            placeholder="e.g. 100"
            value={amount}
            onChange={handleAmount}
          />
        </div>
      </div>
      <button type="submit" className="btn">
        {edit ? "edit" : "submit"}
        {/* submit  */}
      </button>
    </form>
  );
};

export default IncomeForm;