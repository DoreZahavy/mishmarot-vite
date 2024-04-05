import React from 'react'

import ListItem from '@mui/material/ListItem';
import ShiftAccordion from './ShiftAccordion';

export default function ShiftAssigner ({workers, f_expand, shift_types}) {

  return (
    <>
      {shift_types.map(shift_type => <ShiftAccordion workers={workers} title={shift_type} f_expand={f_expand}/>)}
    </>
  )
}