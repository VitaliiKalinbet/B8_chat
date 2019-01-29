import {combineReducers} from 'redux'; // объединяет все поля в один объект
import users from './usersReducer';
import currentUser from './currentUserReducer';
import channels from './channelReducer';


const rootReducer = combineReducers({
    users: users,
    currentUser: currentUser,
    channels: channels,
    

})

export default rootReducer;
