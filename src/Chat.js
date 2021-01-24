import React, { useState } from 'react'
import hug from './images/hug.jpg'
import SearchIcon from '@material-ui/icons/Search';
import AttachFileIcon from '@material-ui/icons/AttachFile';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import MicIcon from '@material-ui/icons/Mic';
import {Avatar, IconButton} from '@material-ui/core'
import axios from './axios'

const Chat = ({messages}) => {

    const [input, setInput] = useState('')
    const sendMessage = async (e)=>{
        e.preventDefault()
        await axios.post('/message/new', {
            message: input,
            name: "faker",
            recieved: true,
            timeStamp: "just now",
        })
    }
    return (
        <div className="chat">
            <div className="chat-header">
                <Avatar src={hug}/>
                <div className="chat-header-info">
                    <h3>Room Name</h3>
                    <p>Last seen at...</p>
                </div>
                <div className="chat-header-right">
                    <IconButton>
                        <SearchIcon/>
                    </IconButton>
                    <IconButton>
                        <AttachFileIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className='chat-body'>
                {messages.map(message=>(
                    <p className={`chat-message ${message.recieved ? "chat-reciever " :""}`}>
                    <span className="chat-name">{message.name}</span>
                    {message.message}
                    <span className="chat-timestamp">
                        {message.timeStamp}
                    </span>
                </p>
                ))}

            </div>
            <div className="chat-footer">
                <IconButton>                 
                    <InsertEmoticonIcon/>
                </IconButton>
                <form>
                    <input value={input} onChange={(e)=> setInput(e.target.value)} placeholder="Type a message" type="text"/>
                    <button type="submit" onClick={sendMessage}>Send a message</button>
                </form>
                <IconButton>
                    <MicIcon/>
                </IconButton>

            </div>
        </div>
    )
}

export default Chat
