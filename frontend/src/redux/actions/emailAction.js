export  const addEmail=(ev)=>{
    return{
        type:'addEmail',
        payload:ev.target.value

    }
}
export  const addPassword=(ev)=>{
    return{
        type:'addPassword',
        payload:ev.target.value

    }
}
