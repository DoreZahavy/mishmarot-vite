import React from 'react'

import { useState } from 'react';
import Switch from '@mui/material/Switch';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormHelperText from '@mui/material/FormHelperText';

export default function ViewOptionsSwitch ({handle, isOn}) {
  const view_options = ['קריסה', 'פריסה']

  return (
    <FormControl component="fieldset" variant="standard">
      <FormLabel component="legend">תצוגה</FormLabel>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch checked={isOn} onChange={() => {handle()}}/>
          }
        />
      </FormGroup>
      <FormHelperText>{view_options[Number(isOn)]}</FormHelperText>
    </FormControl>
  )
}
