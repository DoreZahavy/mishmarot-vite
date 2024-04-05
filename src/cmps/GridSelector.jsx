import React from 'react'

import { ToggleButton, ToggleButtonGroup } from "@mui/material"

export default function GridSelector ({options, handle, value}) {
  const handleChange = (event,selected) => {
    handle(selected);
  };

  return (
    <ToggleButtonGroup exclusive sx={{ flexWrap: "wrap" }} onChange={handleChange} value={value}>
      {options.map(option => <ToggleButton value={option}>{option}</ToggleButton>)}
    </ToggleButtonGroup>
  )
}