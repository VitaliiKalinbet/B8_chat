export default function search(state='', action){
  switch(action.type){
    case 'handlerChange':
    let value = action.evt;
      return value;
    case 'clearInput':
      return '';
    default:
      return state;
  }
}