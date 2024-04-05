import React from 'react'

import Grid from '@mui/material/Grid'; // Grid version 1
import { Button, MenuItem, Select } from '@mui/material';
import { useState } from "react";
import WorkdayContainer from './WorkdayContainer';
import ViewOptionsSwitch from './ViewOptionsSwitch';

const weekdays = ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"]

export default function MonthlyScheduler ({year, month, workers}) {
  const first_weekday_of_month = new Date(year, month, 1).getDay();
  const end_of_month = new Date(year, month+1, 0).getDate();
  const used = first_weekday_of_month + end_of_month;
  const week_count = Math.ceil( used / 7);

  const end_of_last_month = new Date(year, month, 0).getDate()

  const [isAdmin, setIsAdmin] = new useState(true)
  const admin_display = isAdmin ? 'visible' : 'hidden'
  const constraint_options = new Map([['חסום', 'error'], ['מועדף', 'success'], ['אם אין ברירה', 'warning'], ['פנוי', 'default']])
  const onConstraintSelect = () => {}

  const [f_expand, setExpandAll] = useState(true)
  const onViewOptionSelected = () => {
    setExpandAll(!f_expand)
  }

  const onSubmit = (event, val) => {
    console.log('Submitting Constraints: TODO')
  }

  const rows = []
  for (let i = 0; i < week_count; ++i) {
    const row = []
    const week_start_date = (i==0)*(end_of_last_month)+i*7 - first_weekday_of_month
    for (let j = 0; j < 7; ++j) {
        const i_date = (i==0) ? ((week_start_date+j)%(end_of_last_month)+1) : ((week_start_date+j)%(end_of_month)+1)
        row.push(<WorkdayContainer workers={workers} number={i_date} weekday={weekdays[j]} f_expand={f_expand} isAdmin={isAdmin}/>)
    }
    rows.push(row)
  }
  
  return (
    <>
      <ViewOptionsSwitch handle={onViewOptionSelected} isOn={f_expand} sx={{visibility: admin_display}}/>
      <Select id="constraint-select" value={"פנוי"} onChange={onConstraintSelect}>
        {constraint_options.forEach((val, key) => {<MenuItem value={key} sx={{background: val}}>{key}</MenuItem>})}
      </Select>
      <Grid container columns={7}>
        {/*weekdays.map(weekday => <WeekdayTitle title={weekday}/>)*/}
        {rows}
      </Grid>
      <Button variant='outlined' onClick={onSubmit}>שליחה</Button>
    </>
  )
}

// export default MonthlyScheduler