import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Styles/Chat.css';

const Chat = ({chat}) => {
    return(
        <div className='chat'> 
          <AccountCircleIcon className='user' fontSize='large' color='primary'/>
          <p className='msg'>{chat}</p>
        </div>
    )
}

export default Chat;