import {combineReducers} from 'redux'; // объединяет все поля в один объект
import users from './usersReducer';
import currentUser from './currentUserReducer';
import channels from './channelReducer';
import email from  './emailReducer';
import password from './passwordReducer';
import name from './nameReducer';
import surname from './surnameReducer';
import telephone from './telephoneReducer';

const rootReducer = combineReducers({
    users: users,
    currentUser: currentUser,
    channels: channels,
    email:email,
    password:password,
    name:name,
    surname:surname,
    telephone:telephone

})

export default rootReducer;
