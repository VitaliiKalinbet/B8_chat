export const handlerChange = (evt) => {
  return {
    type: 'handlerChange',
    evt: evt.target.value,
  }
}
export const clearInput = () => ({
    type: 'clearInput',
})