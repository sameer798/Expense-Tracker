import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) =>{

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    // multiple input in single state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle :'',
    //     enteredAmount:'',
    //     enteredDate:''
    // })
    

    const titleChangeHandler = (event) =>{
        setEnteredTitle(event.target.value)
        // console.log(enteredTitle)

        // setUserInput({
        //     ...userInput,
        //     enteredTitle : event.target.value
        // })
        
        // console.log(userInput)
    }
    const amountChangeHandler = (event) =>{
        setEnteredAmount(event.target.value)
        // console.log(enteredAmount)

        // setUserInput({
        //     ...userInput,
        //     enteredAmount : event.target.value
        // })
    }
    const dateChangeHandler = (event) =>{
        setEnteredDate(event.target.value)
        // console.log(enteredDate)

        // setUserInput({
        //     ...userInput,
        //     enteredDate : event.target.value
        // })
        
    }

    const submitHandler = (e) =>{
        e.preventDefault();
        const expenseFormDate ={
            title : enteredTitle,
            amount : enteredAmount,
            date : new Date(enteredDate)
        }
        console.log(expenseFormDate)
       
        props.onSaveExpenseData(expenseFormDate);
    
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate('');

      
    }

    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label>Title</label>
                <input type="text" value={enteredTitle} onChange={titleChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Amount</label>
                <input type="number" min="0.01" step="0.01" value={enteredAmount} onChange={amountChangeHandler}/>
            </div>
            <div className="new-expense__control">
                <label>Date</label>
                <input type="date" min="2023-01-01" max="2024-01-01" value={enteredDate} onChange={dateChangeHandler}/>
            </div>
        </div>
        <div className="new-expense__action">
            <button type="button" onClick={props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>
}
export default ExpenseForm;