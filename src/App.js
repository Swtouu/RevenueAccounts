import Transaction from "./component/Transaction";
import FormComponent from "./component/FormComponent";
import DataContext from "./data/DataContext";

import "./App.css";
import { useState, useEffect } from "react";
import ReportComponent from "./component/ReportComponent";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

function App() {
  const design = { color: "red", textAlign: "center", fontSize: "1.5rem" };
  // const initData = [
  // { id: 1, title: "Price", amount: 2000 },
  // { id: 2, title: "Gas", amount: 5000 },
  // { id: 3, title: "Car", amount: 8000 },
  // ];
  // const initState = [
  //   {
  //     id: 1,
  //     title: "Home",
  //     amount: -2000,
  //   },
  //   { id: 2, title: "Income", amount: 12000 },
  //   { id: 3, title: "Transport", amount: -500 },
  //   { id: 4, title: "Sell something", amount: 2000 },
  // ];
  const initData = [
    { id: 1, title: "home", amount: -3000 },
    { id: 2, title: "income", amount: 50000 },
  ];
  const [items, setItems] = useState(initData); // useState is the same as const initData above
  const [reportIncome, setReportIncome] = useState(0);
  const [reportExpense, setReportExpense] = useState(0);
  const onAddNewItem = (newItem) => {
    setItems((prevItem) => {
      return [newItem, ...prevItem];
    });
  };
  useEffect(() => {
    const amounts = items.map((items) => items.amount);
    const income = amounts
      .filter((e) => e > 0)
      .reduce((total, e) => (total += e), 0)
      .toFixed(2);
    const expense = (
      amounts.filter((e) => e < 0).reduce((total, e) => (total += e), 0) * -1
    ).toFixed(2);
    // console.log("Total Income: ", income);
    // console.log("Total Expense: ", expense);
    setReportIncome(income);
    setReportExpense(expense);
  }, [items, reportIncome, reportExpense]);

  return (
    <DataContext.Provider
      value={{
        income: reportIncome,
        expense: reportExpense,
      }}
    >
      <div className="container">
        <h1 style={design}>Income-Outcome</h1>
        <Router>
          <div>
            <ul className="horizontal-menu">
              <li>
                <Link to="/">Account Information</Link>
              </li>
              <li>
                <Link to="/insert">Save Data</Link>
              </li>
            </ul>
            <Switch>
              <Route path="/" exact>
                <ReportComponent />
              </Route>
              <Route path="/insert">
                <FormComponent onAddItem={onAddNewItem} />
                <Transaction items={items} />
              </Route>
            </Switch>
          </div>
        </Router>
      </div>
    </DataContext.Provider>
  );
}

export default App;
