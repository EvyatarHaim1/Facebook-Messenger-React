import React,{useState, useEffect} from 'react';
import { Button, Input, FormControl,InputLabel } from '@material-ui/core';
import Message from './components/Message';
import './App.css';

function App() {

  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{username:'Yanis', text:'Hola papasito'}]);
  const [username, setUsername] = useState('');

  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  const sendMessage = (event) => {
    event.preventDefault();
    setMessages([
      ...messages, {username: username, text: input}
    ]);
    setInput('');
  }

  return (
    <div className="App">
      <h2>Welcome {username}</h2>
      <FormControl>
        <InputLabel>Enter a messege...</InputLabel>
          <Input 
                      value={input} 
                      onChange={event => setInput(event.target.value)}/>
          <Button variant="contained" 
                  color="primary"
                  disabled={!input}
                  type="submit" 
                  onClick={sendMessage}>Send Messege
          </Button>
</FormControl>
          
          {messages.map(message => (
              <Message username={username} message={message} />
            ))
          }
    </div>
  );
}

export default App;
