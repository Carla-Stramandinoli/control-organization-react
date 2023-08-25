import { Box, Tab, Tabs } from "@mui/material"
import React from "react"
import TableProducts from "../../components/tableProdComponent/tableProducts"

function TabsProducts({ categories, itemList, deleteElement }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <Box sx={{ width: "100%" }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            TabIndicatorProps={{
              style: {
                backgroundColor: "#9E768F"
              }
            }}
          >
            {categories.map((prod, index) => {
              return <Tab key={prod.id + index} label={prod.title} style={{ color: "#9E768F" }} />
            })}
          </Tabs>
        </Box>
        <div>
          <TableProducts
            category={value}
            products={itemList}
            deleteElement={deleteElement}
          />
        </div>
      </Box>
    </div>
  );
}

export default TabsProducts;
