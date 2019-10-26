import React, { useEffect, useState } from "react";
import "./App.css";
import ExpenseForm from "./components/ExpenseForm";
import ExpenseList from "./components/ExpenseList";
import IncomeForm from "./components/IncomeForm";
import IncomeList from "./components/IncomeList";
import Alert from "./components/Alert";
import axios from "axios";




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
  // single expense
  const [charge, setCharge] = useState("");
  // all income, add income
  const [income, setIncome] = useState(initialIncome);
  // single earning
  const [earning, setEarning] = useState("");
  // single expense amount
  const [expenseAmount, setExpenseAmount] = useState("");
   // single income amount
   const [incomeAmount, setIncomeAmount] = useState("");
  // alert
  const [alert, setAlert] = useState({ show: false });
  // edit
  const [expenseEdit, setExpenseEdit] = useState(false);
  // edit
  const [incomeEdit, setIncomeEdit] = useState(false);
  // id
  const [id, setId] = useState(0);
  // array of expenses from our database
  const [savedExpenses, getSavedExpenses] = useState([]);
   // array of income from our database
  const [savedIncome, getSavedIncome] = useState([]);

  
  // hook to get saved expenses and income
  useEffect(() => {
    console.log("called");
    getExpenses();
    getIncome();
  }, [])

  //useEffects (hooks)
  // useEffect(() => {
  //   console.log("called");

  //   localStorage.setItem("expenses", JSON.stringify(expenses));
  // }, [expenses]);

  // useEffect(() => {
  //   console.log("called");

  //   localStorage.setItem("income", JSON.stringify(income));
  // }, [income]);

  // *********** functionality **************
  //add charge
  const handleCharge = e => {
    setCharge(e.target.value);
  };
  //add earning
  const handleEarning = e => {
    setEarning(e.target.value);
  };
  // add Expense Amount
  const handleExpenseAmount = e => {
    let expenseAmount = e.target.value;
    if (expenseAmount === "") {
      setExpenseAmount(expenseAmount);
    } else {
      setExpenseAmount(parseInt(expenseAmount));
    }
  };

  // add Income Amount
  const handleIncomeAmount = e => {
    let incomeAmount = e.target.value;
    if (incomeAmount === "") {
      setIncomeAmount(incomeAmount);
    } else {
      setIncomeAmount(parseInt(incomeAmount));
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
  // const handleSubmitExpenses = e => {
  //   console.log("passedsubmit1")
  //   e.preventDefault();
  //   if (charge !== "" && expenseAmount > 0) {
  //     console.log("first if statement true")
  //     if (expenseEdit) {
  //       console.log("second if statement")
  //       let tempExpenses = expenses.map(item => {
  //         return item.id === id ? { ...item, charge, expenseAmount } : item;
  //       });
  //       setExpenses(tempExpenses);
  //       // LOCAL STORAGE EXPENSES
  //       localStorage.setItem("expenses", JSON.stringify(expenses));
  //       handleAlert({ type: "success", text: "item added" });
  //       setExpenseEdit(false);
  //     } else {
  //       console.log("else statement true")
  //       const singleExpense = { charge, expenseAmount };
  //       setExpenses([...expenses, singleExpense]);
  //       // LOCAL STORAGE EXPENSES
  //       localStorage.setItem("expenses", JSON.stringify(expenses));
  //       handleAlert({ type: "success", text: "item added" });
  //     }
  //     // set charge back to empty string
  //     setCharge("");
  //     // set amount back to zero
  //     setExpenseAmount("");
  //   } else {
  //     console.log("alert success")
  //     handleAlert({
  //       type: "danger",
  //       text: `charge can't be empty value and amount value has to be bigger than zero`
  //     });
  //   }
  // };
  // handle submit for income

  

  const handleSubmitExpenses = e => {
    e.preventDefault();
    console.log(expenseAmount)
    console.log (charge)
    axios.post("/expenses", {
      expenseAmount,
      charge
    }).then(res => console.log(res)).catch(err => console.log(err));
  }

  const getExpenses = () => {
    console.log("getexpenses ran")
    axios.get("/expenses")
    .then(res => {
    console.log(res.data)
    getSavedExpenses(res.data)
    console.log(savedExpenses)
  })
    .catch(err => console.log(err));

  }

  const handleSubmitIncome = e => {
    e.preventDefault();
    console.log(incomeAmount)
    console.log (earning)
    axios.post("/income", {
      incomeAmount,
      earning
    }).then(res => console.log(res)).catch(err => console.log(err));
  }

  const getIncome = () => {
    console.log("getincome ran")
    axios.get("/income")
    .then(res => {
    console.log(res.data)
    getSavedIncome(res.data)
    console.log(savedIncome)
  })
    .catch(err => console.log(err));

  }

  // const handleSubmitIncome = e => {
  //   e.preventDefault();
  //   if (earning !== "" && incomeAmount > 0) {
  //     if (incomeEdit) {
  //       let tempIncome = income.map(item => {
  //         return item.id === id ? { ...item, earning, incomeAmount } : item;
  //       });
  //       setIncome(tempIncome);
  //       // LOCAL STORAGE INCOME
  //       localStorage.setItem("income", JSON.stringify(income));
  //       handleAlert({ type: "success", text: "item added" });
  //       setIncomeEdit(false);
  //     } else {
  //       const singleIncome = { earning, incomeAmount };
  //       setExpenses([...income, singleIncome]);
  //       // LOCAL STORAGE INCOME
  //       localStorage.setItem("income", JSON.stringify(income));
  //       handleAlert({ type: "success", text: "item added" });
  //     }
  //     // set charge back to empty string
  //     setEarning("");
  //     // set amount back to zero
  //     setIncomeAmount("");
  //   } else {
  //     handleAlert({
  //       type: "danger",
  //       text: `earning can't be empty value and amount value has to be bigger than zero`
  //     });
  //   }
  // };
  
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
    let { charge, expenseAmount } = expense;
    setCharge(charge);
    setExpenseAmount(expenseAmount);
    setExpenseEdit(true);
    setId(id);
  };
  // handle income edit
  const handleIncomeEdit = id => {
    let singleincome = income.find(item => item.id === id);
    let { earning, incomeAmount } = singleincome;
    setEarning(earning);
    setIncomeAmount(incomeAmount);
    setIncomeEdit(true);
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
          expenseAmount={expenseAmount}
          handleExpenseAmount={handleExpenseAmount}
          expenseEdit={expenseEdit}
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
            return (acc += curr.expenseAmount);
          }, 0)}
        </span>
      </h1>
        <IncomeForm
          handleSubmitIncome={handleSubmitIncome}
          earning={earning}
          handleEarning={handleEarning}
          incomeAmount={incomeAmount}
          handleIncomeAmount={handleIncomeAmount}
          incomeEdit={incomeEdit}
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
            return (acc += curr.incomeAmount);
          }, 0)}
        </span>
      </h1>
      </main>
      
    </>
  );
}

export default App;