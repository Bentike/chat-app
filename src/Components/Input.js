import './Styles/Input.css';

const Input = ({inputValue, inputChange, sendMessage}) => {
    return(
        <div className='input'>
           <input className='message' value={inputValue} onChange={inputChange}/>
           <button onClick={sendMessage}>Send</button>
        </div>
    )
}

export default Input;