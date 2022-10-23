import './App.css';
import { useState } from 'react';
import {setUsername} from './Actions';
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
        console.log(store.getState().username);
      } 
   }
}

function App({setUsername}) {
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  }

  const handleSend = () => {
    setUsername(username);
    setMessage("");
  }

  return (
    <>
      <div className="App">
        <Chat/>
      </div>
      <Input inputValue={message} inputChange={handleInputChange} sendMessage={handleSend}/>
    </>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);