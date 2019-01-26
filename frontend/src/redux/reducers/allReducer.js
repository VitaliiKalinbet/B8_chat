import {combineReducers} from 'redux'; // объединяет все поля в один объект
import users from './usersReducer';
import currentUser from './currentUserReducer';
import channels from './channelReducer';
import email from  './emailReducer';
import password from './passwordReducer'

const rootReducer = combineReducers({
    users: users,
    currentUser: currentUser,
    channels: channels,
    email:email,
    password:password,
})

export default rootReducer;
