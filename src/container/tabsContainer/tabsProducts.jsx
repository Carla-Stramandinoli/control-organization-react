import { Box, Tab, Tabs } from "@mui/material";
import React from "react";
import TableProducts from "../../components/tableProdComponent/tableProducts";

function TabsProducts({ categories, products, deleteElement }) {
  const [value, setValue] = React.useState(0);
  console.log("TabsProducts value", value);

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
          >
            {categories.map((prod, index) => {
              return <Tab key={prod.id + index} label={prod.title} />;
            })}
          </Tabs>
        </Box>
        <div>
          <TableProducts
            category={value}
            products={products}
            deleteElement={deleteElement}
          />
        </div>
      </Box>
    </div>
  );
}

export default TabsProducts;
