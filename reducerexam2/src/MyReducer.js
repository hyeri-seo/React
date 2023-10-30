export const initTodos = [
    {
        id:3,
        title:'Todo3',
        count:0,
        complete:false
    },
    {
        id:3,
        title:'Todo3',
        count:0,
        complete:false
    },
    {
        id:3,
        title:'Todo3',
        count:0,
        complete:false
    }
]

export const reducer = (state,action) => {
    switch(acition.type) {
        case "COMPLETE" :
            return(
                state.map(todo=> {
                    if(todo.id===action.id) {
                        return {...todo, complete:!todo.complete}
                        //다른 거는 그대로, complete만 변경하겠다
                        //특정 id에 해당하는 애만 바꿔서 배열을 return
                        //새로운 배열을 만들어서 state 자체를 return.
                    } else return todo
                })
            )
        case "INCREMENT" :
            return(
                state.map(todo=> {
                    if(todo.id===action.id) {
                        return {...todo, count:todo.count+1}
                    } else return todo
                })
            )
            default: return state;
    }
}