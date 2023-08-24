import React from 'react'
import AddExpenses from '../../components/addExpensesComponent/addExpenses';
import NavBar from '../../components/navBarComponent/navBar';
import TabsProducts from '../tabsContainer/tabsProducts';

const categoriesMonths = [
  { id: "january", title: "enero" },
  { id: "february", title: "febrero" },
  { id: "march", title: "marzo" },
  { id: "april", title: "abril" },
  { id: "may", title: "mayo" },
  { id: "june", title: "junio" },
  { id: "july", title: "julio" },
  { id: "august", title: "agosto" },
  { id: "september", title: "septiembre" },
  { id: "october", title: "octubre" },
  { id: "november", title: "noviembre" },
  { id: "december", title: "diciembre" },
];

function Expenses() {
  const [expenses, setExpenses] = React.useState([]);

  const handleSendExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
  };

  return (
    <div>
      <NavBar />
      <AddExpenses sendExpenseLoad={handleSendExpense} />
      <TabsProducts categories={categoriesMonths} itemList={expenses} />
    </div>
  )
}

export default Expenses;