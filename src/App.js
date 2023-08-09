import React,{ useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_DATA = [
  {id: 'e1', title: 'Car Insurance', amount: 200, date: new Date(2022, 2, 28)},
  {id: 'e2', title: 'Health Insurance', amount: 300, date: new Date(2021, 3, 27)},
  {id: 'e3', title: 'Life Insurance', amount: 400, date: new Date(2020, 4, 26)},
  {id: 'e4', title: 'Shopping', amount: 4000, date: new Date(2020, 4, 26)},
  {id: 'e5', title: 'Bike Insurance', amount: 500, date: new Date(2019, 5, 25)}

]      

const  App = () => { 
  
  const [expenses,setExpenses] = useState(DUMMY_DATA);
  
  const onAddExpenseDataHandler = (receiveExpenseData) =>{
    const updatedExpense = [receiveExpenseData,...expenses]
    setExpenses(updatedExpense)
  }
  
  return (
    <div> 
        <NewExpense onAddExpenseData={onAddExpenseDataHandler}/>
        <Expenses item={expenses}/>
    </div>
  );
}

export default App;
