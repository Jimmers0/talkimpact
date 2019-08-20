import store from '../store'
import socket from '../socket'


export function sendMessage(message, font, color, room) {

    const username = store.getState().authReducer.username

    const msg = {
        style: {
            fontFamily:font,
            color:color
        },
        username: username,
        text: message,
        room: room,
        time: new Date()
    }

    socket.emit('new message', msg)
}

export function join(room) {
    socket.emit('join', room)
}


socket.on('new message', message => {
    

    store.dispatch({
        type: 'ADD_MESSAGE',
        payload: message

    
    })

})

