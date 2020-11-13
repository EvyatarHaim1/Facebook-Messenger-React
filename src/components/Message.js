import React from 'react';
import {Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

function Message({ message ,username }) {

    const isUser = username === message.username;

    return (
        <Div className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
                <CardContent>
                    <Typography
                       color="white"
                       variant="h5"
                       component="h2"
                       >
                       {message.username}: {message.text}
                       </Typography>
                </CardContent>
            </Card>
        </Div>
    )
}

export default Message;

const Div = styled.div`
    padding: 10px;
    margin: 10px;
    width: fit-content;
.message_user {
    margin-left: auto;
    color: white;
    text-align: left !important;
}
.message_userCard {
    background-color:#0b81ff !important;
    margin-left: 400px;
}
.message_guestCard {
    background-color:#e9e9eb !important;
}`
