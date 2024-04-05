import React from 'react'

import { AlignHorizontalCenter } from "@mui/icons-material"
import { ButtonGroup, Button } from "@mui/material"

export default function WorkdayConstraintsContainer ({shift_types}) {
  return (
    <ButtonGroup sx={{alignItems:"center", justifyContent:"center"}}>
        {shift_types.map(shift_type => <Button>{shift_type}</Button>)}
    </ButtonGroup>
  )
}