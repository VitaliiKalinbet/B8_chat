export default  function name(state='',action){
    switch (action.type) {
        case 'addName':
        return action.payload
        default:
        return state;
    }
}