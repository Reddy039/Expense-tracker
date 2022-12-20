import './ExpenseDate.css'
import Card from '../UI/Card'
function ExpenseDate(props){
    const month = props.date.toLocaleString("en-us",{month:"long"});
    const day = props.date.toLocaleString("en-us",{day:"2-digit"});
    const year = props.date.getFullYear();
    return (
        <Card className="expense-date">
            <div>{day}</div>
            <div>{month}</div>
            <div>{year}</div>
        </Card>
    );
}
export default ExpenseDate;






