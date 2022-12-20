import { useState } from "react";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseItem from "./ExpenseItem";
const Expenses=(props)=>{
    const [filteredValue, setfilterValue]=useState("2019");
    const filterHandler=(filterValue)=>{
        setfilterValue(filterValue);
    };
    const filterExpenses=props.expenses.filter (
        (expense)=>+filteredValue===expense.date.getFullYear()
    );
    const mappedExpenses=filterExpenses.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        price={expense.price}
        date={expense.date}
        ></ExpenseItem>
    ));
    return(
        <Card>
            Expenses list{""}
            <ExpenseFilter
            onFilter={filterHandler}
            filterValue={filteredValue}
            ></ExpenseFilter>
            {/* <ExpenseItem
            title={props.expenses[0].title}
            price={props.expenses[0].price}
            date={props.expenses[0].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.expenses[1].title}
            price={props.expenses[1].price}
            date={props.expenses[1].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.expenses[2].title}
            price={props.expenses[2].price}
            date={props.expenses[2].date}
            ></ExpenseItem>
            <ExpenseItem
            title={props.expenses[3].title}
            price={props.expenses[3].price}
            date={props.expenses[3].date}
            ></ExpenseItem> */}
            {!mappedExpenses.length ? <p>No Expenses Found</p> : mappedExpenses}
        </Card>
    );
};
export default Expenses;