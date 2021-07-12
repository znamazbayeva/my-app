import { combineReducers } from 'redux'
import userReducer from './usersReducer'
import randReducer from './randomReducer'

export default combineReducers({
  users: userReducer,
  user: randReducer
})