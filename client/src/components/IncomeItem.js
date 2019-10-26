import React from "react";
// import { MdEdit, MdDelete } from "react-icons/md";


const IncomeItem = ({
  income: { id, earnings, incomeAmount },
  handleDeleteIncome,
  handleIncomeEdit
}) => {
  return (
    <li className="item">
      <div className="info">
        <span className="earnings">{earnings}</span>
        <span className="incomeAmount">${incomeAmount}</span>
      </div>
      <div>
        <button
          className="edit-btn"
          aria-label="edit button"
          onClick={() => handleIncomeEdit(id)}
        >
           {/* <MdEdit /> */}
        </button>
        <button
          className="clear-btn"
          aria-label="delete button"
          onClick={() => handleDeleteIncome(id)}
        >
          {/* <MdDelete /> */}
        </button>
      </div>
    </li>
  );
};

export default IncomeItem;