import React,{ useState } from "react";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';
const NewExpense = (props) =>{

   const [isEditing, setIsEditing] = useState(false);
   const onSaveExpenseDataHandler =(expenseData)=>{
         const expense = {
            ...expenseData,
            id: Math.random().toString()
         }
       
         props.onAddExpenseData(expense);
       
         setIsEditing(false);
   }
   
   const startEditingHandler = () =>{
      setIsEditing(true)
   }
   const stopEditingHandler = ()=>{
      setIsEditing(false);
   }

 return <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
   {isEditing && <ExpenseForm onSaveExpenseData={onSaveExpenseDataHandler} onCancel={stopEditingHandler}/>}
 </div>
}
export default NewExpense;