export default function text(state='', action){
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