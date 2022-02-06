import React, { useState } from "react";
import { MenuItem, TextField, Divider, Typography, Box, Paper, Grid, Button, } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import { textAlign } from "@mui/system";
import TextComp from './textComp/TextComp'
const Filter = () => {
    const [value0, setValue0] = useState('');
    const [value1, setValue1] = useState('');
    const [value2, setValue2] = useState('');
    const [value3, setValue3] = useState('');

    const handleChange0 = (event) => {
        setValue0(() => event.target.value);
    };
    const handleChange1 = (event) => {
        setValue1(() => event.target.value);
    }
    const handleChange2 = (event) => {
        setValue2(() => event.target.value);
    }
    const handleChange3 = (event) => {
        setValue3(() => event.target.value);
    }


    return (
        <Paper elevation={3} sx={{ padding: 2 }} >
            <Grid fluid container spacing={2}>
                <Grid item xs={12} sm={12} lg={3}>
                    <TextComp value={value0} handleChange={handleChange0} />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <TextComp value={value1} handleChange={handleChange1} />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <TextComp value={value2} handleChange={handleChange2} />
                </Grid>
                <Grid item xs={12} sm={12} lg={3}>
                    <TextComp value={value3} handleChange={handleChange3} />
                </Grid>
            </Grid>
            <Divider sx={{ marginBottom: 1, marginTop: 2 }} />
            <Box sx={{ display: 'flex', justifyContent: 'end', alignContent: 'center' }}>
                <Button variant="secondary" sx={{ marignRight: 3 }}>Cancel</Button>
                <Button variant="text" disabled={true} sx={{ marignRight: 1 }}><SendIcon /> &#x2800; Apply</Button>
            </Box>
        </Paper>
    )
}

export default Filter
