import React, { useState, useEffect } from "react";
import { MenuItem, TextField, Divider, Typography, Box, Paper, Grid, Button, } from '@mui/material'
import Card from "./card/Card";
import Axios from 'axios'
import dateFormat, { masks } from "dateformat";
const Participant = () => {
    const [data, setData] = useState([])
    const fetchApi = async () => {
        const response = await Axios.get('https://api.jsonbin.io/b/61d47e2d2675917a6289eb0c')
        const data = response?.data?.data?.conversations;
        setData(() => data)
    }

    useEffect(() => {
        fetchApi()
    }, [])
    return (
        <Paper elevation={2} sx={{ padding: 1, cursor: 'pointer' }}>
            {data.map((e, index) => (
                <Card name={data[index]?.user.firstName} avat={data[index]?.user?.profilePic} date={dateFormat(data[index]?.updatedAt, 'dd/mm/yyyy')}
                    lattestMessage={data[index]?.chats.length > 0 ? (data[index]?.chats[0].message) : ''}
                />
            ))}
        </Paper>
    )
}
export default Participant