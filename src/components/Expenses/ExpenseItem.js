import './ExpenseItem.css';
// import { useState } from "react";
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
const ExpenseItem=(props) => {
    // let title=props.tile;
    // const [title, setTitle] = useState(props.title);
    // const clickHandler=()=>{
    //     title="updated";
    //     setTitle("updated title");
    //     console.log(title);
    // };

    return (
    <Card className="expense-item">
          <ExpenseDate date={props.date}/>
            <div className="expense-desc">
                <div className="expense-title">{props.title}</div>
                <div className="expense-price">{props.price}</div>
            </div>
            {/* <button onClick={clickHandler}>updated title</button> */}
    </Card>
    );
}
export default ExpenseItem;