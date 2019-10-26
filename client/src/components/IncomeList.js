import React from "react";
import IncomeItem from "./IncomeItem";
// import { MdDelete } from "react-icons/md";

const IncomeList = ({ income, handleDeleteIncome, handleIncomeEdit, clearIncomeItems }) => {
  return (
    <>
      <ul className="list">
        {income.map(singleincome => {
          return (
            <IncomeItem
              key={singleincome.id}
              singleincome={singleincome}
              handleIncomeDelete={handleDeleteIncome}
              handleEditIncome={handleIncomeEdit}
            />
          );
        })}
      </ul>
      {income.length > 0 && (
        <button className="btn" onClick={clearIncomeItems}>
          clear earnings
          {/* <MdDelete className="btn-icon" /> */}
        </button>
      )}
    </>
  );
};

export default IncomeList;