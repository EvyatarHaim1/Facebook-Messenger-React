import React,{useState, useEffect} from 'react';
import { IconButton, Input, FormControl } from '@material-ui/core';
import Message from './components/Message';
import './App.css';
import db from './firebase';
import firebase from 'firebase';
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles({
  FormControl: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%'
  },
  iconBtn: {
    flex: 0.1 ,
  },
  appInput: {
    flex: 0.9,
  }

});

function App() {
  const classes = useStyles();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'asc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})))
    });
  }, [])

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <img className="msgIcon"
           src="https://facebookbrand.com/wp-content/uploads/2018/09/Header-e1538151782912.png?w=100&h=100"
           alt="facebook-msg icom"/>
      <h2>Welcome {username}</h2>
      <form className="app_form">
      <FormControl className={classes.FormControl}>
          <Input      className={classes.appInput}
                      placeholder="Type a messege..."    
                      value={input} 
                      onChange={event => setInput(event.target.value)}/>
          <IconButton 
            className= {classes.iconBtn}
            variant="contained" 
            color="primary"
            disabled={!input}
            type="submit" 
            onClick={sendMessage}><SendIcon/>
          </IconButton>

        </FormControl>
      </form>
          <FlipMove>
              {messages.map(({id, message}) => (
                  <Message username={username} 
                           message={message}
                           key={id} />
                ))
              }
          </FlipMove>
    </div>
  );
}

export default App;
 