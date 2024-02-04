import React, {useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpenses from "./components/NewExpenses/NewExpenses";

const App = () => {
  
  let DUMMY_EXPENSE = [];
  
  const [expenses, setExpenses]= useState(DUMMY_EXPENSE); 
  
  const addExpenseHandler = (expense) => {
    const updatedExpense = [expense, ...expenses]
    setExpenses(updatedExpense);
  }


  return (
    <div className="App">
      <NewExpenses onAddExpense={addExpenseHandler}/>
      <Expenses item={expenses}/>
    </div> 
  );
}

export default App;
