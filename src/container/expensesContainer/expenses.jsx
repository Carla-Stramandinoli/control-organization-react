import React from 'react'
import AddExpenses from '../../components/addExpensesComponent/addExpenses';
import NavBar from '../../components/navBarComponent/navBar';
import TableExpenses from '../../components/tableExpComponent/tableExpenses';
import TabsProducts from '../tabsContainer/tabsProducts';


const categoriesMonths = [
  { id: "january", title: "enero", key: 1 },
  { id: "february", title: "febrero", key: 2 },
  { id: "march", title: "marzo", key: 3 },
  { id: "april", title: "abril", key: 4 },
  { id: "may", title: "mayo", key: 5 },
  { id: "june", title: "junio", key: 6 },
  { id: "july", title: "julio", key: 7 },
  { id: "august", title: "agosto", key: 8 },
  { id: "september", title: "septiembre", key: 9 },
  { id: "october", title: "octubre", key: 10 },
  { id: "november", title: "noviembre", key: 11 },
  { id: "december", title: "diciembre", key: 12 },
];

function Expenses() {
  const [expenses, setExpenses] = React.useState([]);
  const [selectedMonths, setSelectedMonths] = React.useState(categoriesMonths);


  const handleSendExpense = (newExpense) => {
    setExpenses([...expenses, newExpense]);
    console.log(newExpense)
  };

  const deleteElement = (id) => {
    const deleteElement = expenses.filter((prod) => prod.id === id);
    setExpenses(deleteElement);
    console.log(id);
  };

  const handleMonthsChange = (category) => {
    setSelectedMonths(category);
  };

  return (
    <div>
      <NavBar />
      <AddExpenses sendExpenseLoad={handleSendExpense} />
      <TabsProducts
        categories={categoriesMonths}
        onCategoryChange={handleMonthsChange}
      />
      <TableExpenses
        months={selectedMonths}
        expenses={expenses}
        deleteElement={deleteElement}
      />
    </div>
  )
}

export default Expenses;