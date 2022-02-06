import React from "react";
import { MenuItem, TextField, Divider, Typography, Box, Paper, Grid, Button, } from '@mui/material'
import Participant from "../participants/Participant";
import Message from "../message/Message"
import './Chat.css'
const Chat = () => {
    return (
        <Box className='responsive' sx={{ marginTop: 2, display: 'flex' }}>
            <Paper className="participant_comp" sx={{ flexGrow: 1, marginRight: 2, height: 100 }} elevation={3} >
                <Participant />
            </Paper>
            <Paper className="message_comp" sx={{ flexGrow: 3, height: 100 }} elevation={3} >
                <Message />
            </Paper>
        </Box>
    )
}
export default Chat