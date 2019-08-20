import React, { useState } from 'react'
import { sendMessage } from '../actions/chat.actions'

export default props => {
    const [message, setMessage] = useState('')
    const [font, setFont] = useState('Arial')
    const [color, setColor] = useState('')

    const fonts = [ 'Arial',
                    'Helvetica',
                    'Times New Roman', 
                    'Times', 
                    'Courier New', 
                    'Verdana', 
                    'Georgia', 
                    'Palatino', 
                    'Garamond', 
                    'Bookman', 
                    'Comic Sans MS', 
                    'Trebuchet MS', 
                    'Arial Black', 
                    'Impact']

    function handleSubmit(e) {
        e.preventDefault()
        sendMessage(message, font, color, props.room)
        setMessage('')
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <select onChange={e => setFont(e.target.value)}>
                {fonts.map((f, i) => (
                    <option key={'font' + i} value={f}>{f}</option>
                ))}
                </select>
                <input type="color" onChange={e => setColor(e.target.value)} />
            </div>
            <textarea style={{fontFamily:font, color:color}} onChange={e => setMessage(e.target.value)} value={message}></textarea>
            <button onClick={handleSubmit}>Send</button>
        </form>
    )
}

