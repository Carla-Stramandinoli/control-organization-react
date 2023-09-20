import React from 'react'
import AddPending from '../../components/addPendingComponent/addPending';
import ListPending from '../../components/listPendingComponent/listPending';
import NavBar from '../../components/navBarComponent/navBar'

function Pending() {
  const [pending, setPending] = React.useState([]);

  const handleSendDescription = (newPending) => {
    setPending([...pending, newPending]);
  };

  return (
    <div>
        <NavBar />
        <AddPending sendNewDescription={handleSendDescription}/>
        <ListPending itemList={pending}/>
    </div>
  )
}

export default Pending;