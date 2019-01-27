import { combineReducers} from 'redux';
import channelReducer from './channelReducer';



const rootReducer = combineReducers({
    channel: channelReducer,

});

export default rootReducer;