import './App.css';
import Sidebar from './Sidebar'
import Chat from './Chat'
import Pusher from 'pusher-js'
import React ,{useEffect, useState} from 'react'
import axios from "./axios.js"

function App() {

  const [messages, setMessages] = useState([])

  useEffect(() => {
    axios.get('/message/sync').then(res=>{
      setMessages(res.data)
    })
  }, [])

  useEffect(()=>{
    const pusher = new Pusher('ca6e88f9b5c52c3da7b2', {
      cluster: 'ap1'
    });

    const channel = pusher.subscribe('message');
    channel.bind('inserted', (newMessage)=> {
      setMessages([...messages, newMessage])
    });

    //clean up 
    return ()=>{
      channel.unbind_all();
      channel.unsubscribe()
    }

  }, [messages])

  console.log(messages)

  return (
    <div className="app">
      <div className="appbody">
        <Sidebar/>
        <Chat messages={messages}/>
      </div>
    </div>
  );
}

export default App;
