// import NumberInput from './components/NumberInput';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import { useState } from "react";
import { MenuItem } from '@mui/material';
import MonthlyScheduler from '../cmps/MonthlyScheduler';
import NumberInput from '../cmps/NumberInput';


export default function EditorPage() {


    const months = ["Jan", "Feb", "Mar", "Apr", "May",
        "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    const workers = ["הדר", "לימור", "עודד", "ג'ני", "קים", "יסמין ליאם", "בר", "ליאם"]


    const today = new Date()
    const init_date = new Date(today.getFullYear(), today.getMonth() + 2, 0)
    const [year, setYear] = useState(init_date.getFullYear())
    const [month, setMonth] = useState(init_date.getMonth())

    const onMonthSelect = (event, val) => {
        setMonth(months.indexOf(val.props.value))
    }
    const onYearSelect = (event, val) => {
        setYear(val)
    }



    return (
        <>
            <FormControl sx={{ m: 1, minWidth: 80 }}>
                <InputLabel htmlFor="month-select">חודש</InputLabel>
                <Select id="month-select" defaultValue={months[month]} onChange={onMonthSelect}>
                    {months.map(month => <MenuItem value={month}>{month}</MenuItem>)}
                </Select>
            </FormControl>
            <FormControl sx={{ m: 2 }}>
                <NumberInput id="year-select" value={year} onChange={(event, val) => setYear(val)}></NumberInput>
            </FormControl>
            <MonthlyScheduler year={year} month={month} workers={workers} />
        </>

    );
}