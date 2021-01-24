import React from 'react'
import hug from './images/hug.jpg';
import SidebarChat from './SidebarChat'
import DonutLargeIcon from '@material-ui/icons/DonutLarge';
import ChatIcon from '@material-ui/icons/Chat';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import{Avatar, IconButton} from '@material-ui/core'
import{SearchOutlined, searchOutlined} from '@material-ui/icons'



const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Avatar src={hug}/>
                <div className="sidebar-headerRight">
                    <IconButton>
                        <DonutLargeIcon/>
                    </IconButton>
                    <IconButton>
                        <ChatIcon/>
                    </IconButton>
                    <IconButton>
                        <MoreVertIcon/>
                    </IconButton>
                </div>
            </div>
            <div className="sidebar-search">
                <div className="sidebar-search-container">
                    <SearchOutlined/>
                    <input placeholder="Search" type="text"/>
                </div>
            </div>
            <div className="sidebar-chats">
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
                <SidebarChat/>
            </div>
        </div>
    )
}

export default Sidebar
