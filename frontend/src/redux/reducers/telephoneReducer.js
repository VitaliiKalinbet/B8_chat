export default  function telephone(state='',action){
    switch (action.type) {
        case 'addTelephone':
        return action.payload
        default:
        return state;
    }
}