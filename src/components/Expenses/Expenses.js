import React, { useState } from 'react';

import './Expenses.css'
import Card from '../UI/Card'
import ExpensesFilter from "../ExpenseFilter/ExpensesFilter";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";


function Expenses(props) {
    const [enteredDate, setEnteredDate] = useState('2020');

    const addSelectDate = (dateSelected) => {
        setEnteredDate(dateSelected);
    };

    const filteredExpenses = props.items.filter(expense => {
        return expense.date.getFullYear().toString() === enteredDate;
    })

    return (
        <div >
            <Card className="expenses">
            <ExpensesFilter
                onSelectDate={addSelectDate}
                selected={enteredDate}/>
                <ExpensesChart expenses={filteredExpenses}/>
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    )
}

export default Expenses;
