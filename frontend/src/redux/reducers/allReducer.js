import {combineReducers} from 'redux'; // объединяет все поля в один объект
import users from './usersReducer';
import currentUser from './currentUserReducer';
import channels from './channelReducer';
import text from './textReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
    users: users,
    currentUser: currentUser,
    channels: channels,
    text: text,
    search: search,
})

export default rootReducer;
