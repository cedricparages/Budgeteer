import React, { useState, useEffect } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeForm";
import Alert from "./components/Alert";
import uuid from "uuid/v4";

// const initialExpenses = [
//   { id: uuid(), charge: "rent", amount: 1600 },
//   { id: uuid(), charge: "car payment", amount: 400 },
//   {
//     id: uuid(),
//     charge: "credit card bill ",
//     amount: 1200
//   }
// ];
const initialExpenses = localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : [];
const initialIncome = localStorage.getItem("income")
  ? JSON.parse(localStorage.getItem("income"))
  : [];
function App() {
  // all expenses, add expense
  const [expenses, setExpenses] = useState(initialExpenses);
  // all income, add income
  const [income, setIncome] = useState(initialIncome);
  // single earning
  const [earning, setEarning] = useState("");
  // single expense
  const [charge, setCharge] = useState("");
  // single amount
  const [amount, setAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [edit, setEdit] = useState(false);
  // id
  const [id, setId] = useState(0);

  //useEffects (hooks)
  useEffect(() => {
    console.log("called");

    localStorage.setItem("expenses", JSON.stringify(expenses));
  }, [expenses]);

  useEffect(() => {
    console.log("called");

    localStorage.setItem("income", JSON.stringify(income));
  }, [income]);

  // *********** functionality **************
  //add charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  //add earning
  const handleEarning = e => {
    setEarning(e.target.value);
  };
  // add amount
  const handleAmount = e => {
    let amount = e.target.value;
    if (amount === "") {
      setAmount(amount);
    } else {
      setAmount(parseInt(amount));
    }
  };

  // handle alert
  const handleAlert = ({ type, text }) => {
    setAlert({ show: true, type, text });
    setTimeout(() => {
      setAlert({ show: false });
    }, 7000);
  };
  // handle submit for expenses
  const handleSubmitExpenses = e => {
    e.preventDefault();
    if (charge !== "" && amount > 0) {
      if (edit) {
        let tempExpenses = expenses.map(item => {
          return item.id === id ? { ...item, charge, amount } : item;
        });
        setExpenses(tempExpenses);
        setEdit(false);
      } else {
        const singleExpense = { id: uuid(), charge, amount };
        setExpenses([...expenses, singleExpense]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string
      setCharge("");
      // set amount back to zero
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `charge can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // handle submit for income
  const handleSubmitIncome = e => {
    e.preventDefault();
    if (earning !== "" && amount > 0) {
      if (edit) {
        let tempIncome = income.map(item => {
          return item.id === id ? { ...item, earning, amount } : item;
        });
        setIncome(tempIncome);
        setEdit(false);
      } else {
        const singleIncome = { id: uuid(), earning, amount };
        setExpenses([...income, singleIncome]);
        handleAlert({ type: "success", text: "item added" });
      }
      // set charge back to empty string
      setEarning("");
      // set amount back to zero
      setAmount("");
    } else {
      handleAlert({
        type: "danger",
        text: `earning can't be empty value and amount value has to be bigger than zero`
      });
    }
  };
  // handle expense delete
  const handleDeleteExpense = id => {
    let tempExpenses = expenses.filter(item => item.id !== id);
    setExpenses(tempExpenses);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  // handle income delete
  const handleDeleteIncome = id => {
    let tempIncome = income.filter(item => item.id !== id);
    setExpenses(tempIncome);
    handleAlert({ type: "danger", text: "item deleted" });
  };
  //clear all expense items
  const clearExpenseItems = () => {
    setExpenses([]);
  };
  //clear all income items
  const clearIncomeItems = () => {
    setIncome([]);
  };
  // handle expense edit
  const handleExpenseEdit = id => {
    let expense = expenses.find(item => item.id === id);
    let { charge, amount } = expense;
    setCharge(charge);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };
  // handle income edit
  const handleIncomeEdit = id => {
    let singleincome = income.find(item => item.id === id);
    let { earning, amount } = singleincome;
    setEarning(earning);
    setAmount(amount);
    setEdit(true);
    setId(id);
  };

  return (
    <>
      {alert.show && <Alert type={alert.type} text={alert.text} />}
      <h1>Budgeteer ! </h1>
      <main className="App">
        <ExpenseForm
          handleSubmitExpenses={handleSubmitExpenses}
          charge={charge}
          handleCharge={handleCharge}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <ExpenseList
          expenses={expenses}
          handleDeleteExpense={handleDeleteExpense}
          handleExpenseEdit={handleExpenseEdit}
          clearExpenseItems={clearExpenseItems}
        />
        <h1>
        Total Spending :
        <span className="total">
          $
          {expenses.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
        <IncomeForm
          handleSubmitIncome={handleSubmitIncome}
          earning={earning}
          handleEarning={handleEarning}
          amount={amount}
          handleAmount={handleAmount}
          edit={edit}
        />
        <IncomeList
          income={income}
          handleDeleteIncome={handleDeleteIncome}
          handleIncomeEdit={handleIncomeEdit}
          clearIncomeItems={clearIncomeItems}
        />
        <h1>
        Total Income :
        <span className="total">
          $
          {income.reduce((acc, curr) => {
            return (acc += curr.amount);
          }, 0)}
        </span>
      </h1>
      </main>
      
    </>
  );
}

export default App;