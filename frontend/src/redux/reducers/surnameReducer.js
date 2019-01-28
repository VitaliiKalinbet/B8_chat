export default  function surname(state='',action){
    switch (action.type) {
        case 'addSurname':
        return action.payload
        default:
        return state;
    }
}