import { Box, Tab, Tabs } from '@mui/material';
import React from 'react'

const categories = [{ id: 'greengrocery', title: 'verduleria' }, { id: 'supermarket', title: 'supermercado' }, { id: 'others', title: 'otros' }]

function TableProducts() {
  // const [items, setItems] = React.useState([]);
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            {categories.map((prod, index)=> {
              return <Tab key={prod.id + index} label={prod.title} />
            })}
          </Tabs>
        </Box>
      </Box>
    </div>
  )
}

export default TableProducts;