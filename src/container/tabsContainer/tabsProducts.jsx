import { Box, Tab, Tabs } from "@mui/material"
import React from "react"

function TabsProducts({ categories, onCategoryChange }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (_, newValue) => {
    setValue(newValue);
    onCategoryChange(categories[newValue]);
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
      </Box>
    </div>
  );
}

export default TabsProducts;
