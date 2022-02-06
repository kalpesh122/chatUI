import React, { useState, useEffect } from "react";
import { MenuItem, TextField, Divider, Typography, Box, Paper, Grid, Button, InputAdornment } from '@mui/material'
import AttachFileIcon from '@mui/icons-material/AttachFile';
import SendIcon from '@mui/icons-material/Send';
import InsertDriveFileIcon from '@mui/icons-material/InsertDriveFile';
import Axios from 'axios'

const Message = () => {
    const [data, setData] = useState('')
    const [disable, setDisable] = useState(false)
    const onClickHandler = (e) => {
        if (e.charCode === 13) {
            if (e.target.value !== '') {
                const message = e.target.value
                messageHandler(message)
                setData('')
            }
        }
    }
    const messageHandler = (message) => {
        const content = message
        let tag = document.createElement("p");
        let text = document.createTextNode(content);
        tag.appendChild(text);
        tag.setAttribute('id', 'pG1');
        let element = document.getElementById('eid')
        element.appendChild(tag);
    }

    const onChangeHandler = (e) => {
        setData(e.target.value)
    }
    const stateHandler = () => {
        setDisable(() => !disable)
    }
    const fetachApi = async () => {
        const response = await Axios.get('https://api.jsonbin.io/b/61d47e752675917a6289eb3a')
        console.log(response)
        const data = response?.data?.data.chats
        setData(() => data)
    }

    useEffect(() => {
        fetachApi()
    }, [])
    return (
        <Paper elevation={6} sx={{ height: 430, marginBottom: 0 }}>
            <Box elevation={6} sx={{ display: 'flex', height: 335, padding: 2 }} >
            </Box >
            <Box fullWidth sx={{ height: 39, display: 'flex', flexDirection: 'row', justifyContent: 'end' }}>
                <Button onClick={stateHandler} variant='secondary' sx={{ justifySelf: 'end', border: 0, borderRadius: 6, boxShadow: `3.5px 3.5px 4px grey`, backgroundColor: '#D2D2CF' }}><InsertDriveFileIcon />  Mark as Solved</Button>
            </Box>
            <Box variant='filled' sx={{ display: 'flex', flexDirection: 'row', alignContent: 'end' }}>
                <TextField
                    id="input-with-icon-textfield"
                    variant="filled"
                    onChange={onChangeHandler}
                    onKeyPress={onClickHandler}
                    fullWidth
                    InputProps={{
                        startAdornment: (
                            <>
                                <InputAdornment position="end">
                                    <AttachFileIcon sx={{ width: 50, height: 30, alignSelf: 'center', cursor: 'pointer' }} />
                                </InputAdornment>
                            </>
                        ),
                    }}
                    variant="filled"
                />
                <Button disabled={disable} onClick={onClickHandler} variant="filled"><SendIcon sx={{ width: 50, height: 30, alignSelf: 'center', cursor: 'pointer' }} /></Button>
            </Box>
        </Paper >
    )
}

export default Message