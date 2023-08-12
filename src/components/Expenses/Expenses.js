import React, { useState } from "react";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpenseFilter from './ExpenseFilter';
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


const Expense = (props) => {
const [filteredYear, setFilterYear] = useState('2020')

const filterChangeHandler = selectedYear =>{
  setFilterYear(selectedYear)
  
}

const filteredExpenses = props.item.filter(expense =>{
 return expense.date.getFullYear().toString() === filteredYear;
});

  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
      <ExpensesChart expenses={filteredExpenses}/>
      <ExpensesList items={filteredExpenses}/>
     
      {/* <ExpenseItem title={props.item[0].title} date={props.item[0].date} amount={props.item[0].amount}></ExpenseItem>
        <ExpenseItem title={props.item[1].title} date={props.item[1].date} amount={props.item[1].amount}></ExpenseItem>
        <ExpenseItem title={props.item[2].title} date={props.item[2].date} amount={props.item[2].amount}></ExpenseItem>
        <ExpenseItem title={props.item[3].title} date={props.item[3].date} amount={props.item[3].amount}></ExpenseItem> */}
    </Card>
  );
};
export default Expense;
