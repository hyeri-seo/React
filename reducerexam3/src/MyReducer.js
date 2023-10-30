export const initState = {
    id:'hong',
    nickname:'gildon',
    subject:'computer',
    grade:1
}

export const reducer = (state,action) => {
    let newState;
    switch(action.type) {
        case "ID": newState = {...state, id:action.payload}; break;
        case "NICKNAME": return {...state, nickname:action.payload}; break;
        case "SUBJECT": return {...state, subject:action.payload}; break;
        case "GRADE": return {...state, grade:action.payload}; break;
        default: newState = {...state};
    }
    return newState;
}