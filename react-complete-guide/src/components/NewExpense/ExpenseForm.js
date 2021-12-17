import './ExpenseForm';
import React, { useState } from 'react';

const ExpenseForm = (props) => {

    const [enteredTitle, setTitle] = useState('');
    const [enteredAmout, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');

    // const [userInput, setUserInput] = useState( {
    //     enteredTitle: '',
    //     enteredAmout: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        setTitle(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredTitle: event.target.value,
        // })
    };

    
    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredAmout: event.target.value,
        // })
    };

    
    
    const dateChangeHandler = (event) => {
        setDate(event.target.value);
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value,
        // })
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredTitle: event.target.value};
        // })
    };

    const sumitHandler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: +enteredAmout,
            date: new Date(enteredDate),
        };

        props.onSaveExpenseData(expenseData);
        //console.log(expenseData);
        setTitle('');
        setAmount('');
        setDate('');
    };

    return <form onSubmit= {sumitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__controls">
                <label>Title</label>
                <input type='text' value={enteredTitle} onChange = {titleChangeHandler}/>
            </div>

            <div className="new-expense__controls">
                <label>Amout</label>
                <input type='number' min="0.01" step="0.01" value={enteredAmout} onChange = {amountChangeHandler}/>
            </div>

            <div className="new-expense__controls">
                <label>Date</label>
                <input type='date' min="2019-01-01" max="2022-12-31" value={enteredDate} onChange = {dateChangeHandler} /> 
            </div>
        </div>
        <div className="new-expense__actions">
            <button type="button" onClick = {props.onCancel}>Cancel</button>
            <button type="submit">Add Expense</button>
        </div>
    </form>

};

export default ExpenseForm;