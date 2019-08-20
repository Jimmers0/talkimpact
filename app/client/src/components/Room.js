import React, { useEffect } from 'react'
import { logout } from '../actions/auth.actions'
import { join } from '../actions/chat.actions'

import Messages from './Messages'
import ChatForm from './ChatForm'

export default props => {
    useEffect(() => {
        join(props.match.params.roomname)
    }, props.match.params.roomname)
    return (
        <div className="roomcontainer">
            
        <Messages room={props.match.params.roomname}/>
        <div className="roomcontrols">
        <div><button onClick={logout} >logout</button></div>
        <ChatForm room={props.match.params.roomname}/>
        </div>
        
        </div>

    )
}