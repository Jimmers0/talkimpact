import React, {useState } from 'react'
import { login } from '../actions/auth.actions'
import { Redirect } from 'react-router-dom'
import { useSelector } from 'react-redux'
 
export default props => {
    const [username, setUsername] = useState('')
    const authorized = useSelector(appState => appState.authReducer.authorized)

    function handleSubmit(e) {
        e.preventDefault()
        login(username)
        props.history.push("/general")
    }


    return(
        authorized 
        ? <Redirect to="/general" />
        : <div className="logincontainer">
            <form className="loginform" onSubmit={handleSubmit}>
                <div className="logintitle">Login</div>
                <div>
                <input type="text" className="logininput" value={username} onChange={e => setUsername(e.target.value)} placeholder="Enter a username" />
                </div>
                <div>
                <button type="submit" className="loginsubmit">login</button>
                </div>
            </form>
        </div>
    )
}