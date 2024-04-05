import React from 'react'

import Grid from '@mui/material/Grid'; // Grid version 1
import List from '@mui/material/List';
import Card from '@mui/material/Card';
import ListItemButton from '@mui/material/ListItemButton';
import ShiftAssigner from './ShiftAssigner';
import WorkdayConstraintsContainer from './WorkdayConstraintsContainer';

export default function WorkdayContainer({ workers, number, weekday, f_expand, isAdmin }) {
    const shift_types = ["🌈", "☀️", "🌙"]

    return (
        <Grid xs={1} display="flex" justifyContent="Center">
            <Card elevation={0} sx={{ width: '97%' }}>
                <List>
                    <ListItemButton htmlFor="shift-card">{String(number).padStart(2, '0') + ' ' + weekday}</ListItemButton>
                    {isAdmin
                        ? <ShiftAssigner workers={workers} f_expand={f_expand} shift_types={shift_types} />
                        : <WorkdayConstraintsContainer shift_types={shift_types} />
                    }
                </List>
            </Card>
        </Grid>
    )
}

