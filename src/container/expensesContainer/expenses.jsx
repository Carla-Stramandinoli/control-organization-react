import React from 'react'
import AddExpenses from '../../components/addExpensesComponent/addExpenses';
import NavBar from '../../components/navBarComponent/navBar';

function Expenses() {
  return (
    <div>
        <NavBar />
        <AddExpenses />
    </div>
  )
}

export default Expenses;