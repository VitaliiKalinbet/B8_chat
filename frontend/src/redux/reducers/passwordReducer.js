export default  function password(state='',action){
    switch (action.type) {
        case 'addPassword':
        return action.payload
        default:
        return state;
    }
}