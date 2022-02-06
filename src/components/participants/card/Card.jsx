import React from "react";
import Avatar from '@mui/material/Avatar';
import { MenuItem, TextField, Divider, Typography, Box, Paper, Grid, Button, } from '@mui/material'


const Card = ({ avat, name, date, lattestMessage }) => {
    return (
        <Paper elevation={2} sx={{ display: 'flex', marginBottom: 1, padding: 1 }}>
            <Avatar alt="Cindy Baker" src={avat} sx={{ marginRight: 2 }} />
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Typography>
                    {name}
                </Typography>
                <Typography>
                    {lattestMessage}
                </Typography>
                <Typography>
                    {date}
                </Typography>
            </Box>
        </Paper>
    )
}
export default Card