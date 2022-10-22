import './App.css';
import {setUsername} from './Actions';
import {connect} from 'react-redux';
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
  return (
    <div className="App">
      <h1>Welcome To My ChatApp</h1>
      <button onClick={setUsername}>SetName</button> 
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(App);