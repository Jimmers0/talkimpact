import { createStore, combineReducers } from 'redux'

import authReducer from './reducers/auth.reducer'
import chatReducer from './reducers/chat.reducer'

const rootReducer = combineReducers({
    authReducer: authReducer,
    chatReducer: chatReducer
})



const store = createStore(rootReducer)

export default store