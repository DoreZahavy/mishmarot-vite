import React from 'react'

import Grid from '@mui/material/Grid'; // Grid version 1

export default function WeekdayTitle ({title}) {
  return (
    <Grid xs={1} display="flex" justifyContent="Center">
      <item>{title}</item>
    </Grid>
  )
}
