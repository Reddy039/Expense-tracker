import Expenses from "./components/Expenses/Expenses";

import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import { useState } from "react";

const dummy_expenses=[
  {
    id:Math.random() * 100000,
    title:"Chocolate",
    date:new Date('2022-06-23'),
    price:150,
  },                                  
  {
    id:Math.random() * 100000,
    title:"Ice-Cream",
    date:new Date('2021-07-02'),
    price:50,
  },
  {
    id:Math.random() * 100000,
    title:"Chips",
    date:new Date('2020-09-14'),
    price:20,
  },
  {
    id:Math.random() * 100000,
    title:"Cakes",
    date:new Date('2019-11-11'),
    price:200,
  },
];
function App() {
  const [expenses, setExpenses] = useState(dummy_expenses);

  const formDataHandler = (newExpenses) => {
    setExpenses((previousState) => {
      return [...previousState, newExpenses];
    });
  };

  return (
    <div>
      <ExpenseForm onFormSubmit={formDataHandler}></ExpenseForm>
      <Expenses expenses={expenses}></Expenses>
    </div>
  );
}

export default App;

