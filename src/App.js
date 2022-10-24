import './App.css';
import { useState, useEffect } from 'react';
import {setUsername, addMessage} from './Actions';
import {connect} from 'react-redux';
import Chat from './Components/Chat';
import Input from './Components/Input';

let username = prompt("Enter Username");

const mapStateToProps = (state) => {
  return {
     state: state
  }
}

const mapDispatchToProps = (dispatch) => {
   return {
      setUsername: () => {
        dispatch(setUsername(username));
      },

      addMessage: (msg) => {
        dispatch(addMessage(msg));
      } 
   }
}

function App({setUsername, addMessage}) {

const getChatsFromStorage = () => {
  return JSON.parse(localStorage.getItem('items') || '[]');
}

const [items, setItems] = useState(() => getChatsFromStorage());

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
    localStorage.setItem('chatSender', JSON.stringify(username));
  }, [items]);

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = () => {
    setUsername(username);
    if(message){
      addMessage(message);
      setItems([...items, message]);
    }
    setMessage("");
  }

  return (
    <>
      <div className="App">
        {getChatsFromStorage().map((msg, i) => {
           return <Chat key={i} chat={msg}/>
        })}
      </div>
      <Input inputValue={message} inputChange={handleInputChange} sendMessage={handleSend}/>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);