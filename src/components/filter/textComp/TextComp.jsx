import React from 'react'
import { TextField, MenuItem } from '@mui/material'
const TextComp = ({ value, handleChange }) => {
    return (
        <TextField
            sx={{ width: 300 }}
            id="outlined-select-currency"
            select
            label="Select"
            value={value}
            onChange={handleChange}
            helperText='Please select a query type'
        >
            {['ten', 'twenty', 'thirty'].map((e, index) => (
                <MenuItem value={e} key={index} sx={{ paddingLeft: 4, paddingRight: 4, textAlign: 'center' }}>
                    {e}
                </MenuItem>
            ))}
        </TextField>
    )
}

export default TextComp