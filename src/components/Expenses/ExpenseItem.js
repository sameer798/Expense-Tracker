import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

const ExpenseItem = (props) =>{

    // const [title, setTitle] = useState(props.title);
    // const [count, setPrice] = useState(props.amount);

    // const titleChange = ()=>{
    //     setTitle('updated title');
     
    //     // console.log(title)
    // }
    // const priceHandler = () =>{
    //     setPrice(100);
    // }
    
    return (
        <Card className="expense-item">
            
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
                <h2>{props.title}</h2>
                <div className="expense-item__price">{props.amount}</div>
            </div>
            {/* <button onClick={titleChange}>Change Title</button>
            <button onClick={priceHandler}>Change Amount</button> */}
        </Card>
    );
}

export default ExpenseItem;