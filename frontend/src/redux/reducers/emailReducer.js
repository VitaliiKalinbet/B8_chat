export default  function text(state='',action){
    switch (action.type) {
        case 'addEmail':
        return action.payload
        default:
        return state;
    }
}