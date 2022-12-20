import Card from "../UI/Card";
import { useState } from "react";
const ExpenseForm = (props)=>{
    const [title, setTitle] = useState("");
    const [date, setDate] = useState("");
    const [price, setPrice] = useState("");
    const dateChangeHandler = (e) => {
        setDate(e.target.value);
        console.log(date);
    };    
        const titleChangeHandler = (e) => {
        setTitle(e.target.value);
        console.log(title);
    };
    const priceChangeHandler = (e) => {
        setPrice(e.target.value);
        console.log(price);
    };
    const onFormSubmitHandler = (e) =>{
        e.preventDefault();
        const expenseData = {
            title,
            date:new Date(date),
            price,
        };
        console.log(expenseData);
        props.onFormSubmit (expenseData);
        setTitle("");
        setDate("");
        setPrice("");
    }

    return (
        <Card>
            <form onSubmit={onFormSubmitHandler}>
                <input type="date" onChange={dateChangeHandler} value={date}/>
                <input type="text" placeholder="Enter  title " onChange={titleChangeHandler} value={title}/>
                <input type="number" placeholder="Enter  price" onChange={priceChangeHandler} value={price}/>
                <button type="Submit">Submit</button>
            </form>
        </Card>
    );
}; 
export default ExpenseForm;