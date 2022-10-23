import './App.css';
import { useState } from 'react';
import {setUsername, addMessage} from './Actions';
import {connect} from 'react-redux';
import Chat from './Components/Chat';
import Input from './Components/Input';
import {store} from './';

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

  const chats = store.getState().messages;

  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = () => {
    setUsername(username);
    addMessage(message);
    setMessage("");
  }

  return (
    <>
      <div className="App">
        {chats.map((msg, i) => {
           return <Chat key={i} chat={msg}/>
        })}
      </div>
      <Input inputValue={message} inputChange={handleInputChange} sendMessage={handleSend}/>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);