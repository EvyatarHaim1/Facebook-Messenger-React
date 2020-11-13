import React, {forwardRef} from 'react';
import {Card, CardContent, Typography } from '@material-ui/core';
import styled from 'styled-components';

const Message = forwardRef(({ message ,username }, ref) => {

    const isUser = username === message.username;

    return (
        <Div ref={ref} className={`message ${isUser && 'message_user'}`}>
            <Card className={isUser ? 'message_userCard' : 'message_guestCard'}>
                <CardContent>
                    <Typography
                       color="white"
                       variant="h5"
                       component="h2"
                       >
                       {!isUser && `${message.username || 'Unknown User'}: `} {message.message}
                       </Typography>
                </CardContent>
            </Card>
        </Div>
    )
})

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
