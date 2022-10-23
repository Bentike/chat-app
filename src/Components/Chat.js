import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import './Styles/Chat.css';

const Chat = () => {
    return(
        <div className='chat'> 
          <AccountCircleIcon className='user' fontSize='large' color='primary'/>
          <p className='msg'>lorem ipsum dolar amet sit amet lol.</p>
        </div>
    )
}

export default Chat;