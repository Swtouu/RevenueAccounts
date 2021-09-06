import { useContext } from "react";
import DataContext from "../data/DataContext";

import "./ReportComponent.css";

const ReportComponent = () => {
  const { income, expense } = useContext(DataContext);
  const formatNumber = (num) => {
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
  };
  return (
    <div>
      <h4>Income Remain (baht)</h4>
      <h1>{formatNumber((income - expense).toFixed(2))}</h1>
      <div className="report-container">
        <div>
          <h4>Total Income</h4>
          <h1 className="report plus">{formatNumber(income)}</h1>
        </div>
        <div>
          <h4>Total Expense</h4>
          <h1 className="report minus">{formatNumber(expense)}</h1>
        </div>
      </div>
    </div>
  );
};

export default ReportComponent;
