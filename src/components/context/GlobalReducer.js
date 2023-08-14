const GlobalReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO': {
            return {
                ...state,
                // todo: [...state.todo, action.payload]
                // emoji: state.emoji.filter(v=>v.slug.includes(action.payload))
                searchEmoji: state.emoji.filter(v=>v.slug.includes(action.payload) || v.group.includes(action.payload)||v.subGroup.includes(action.payload)||v.unicodeName.includes(action.payload))
                // emoji: state.emoji.filter(v=>v.slug === action.payload)
                // searchEmoji: state.emoji.filter(v=>v.slug === action.payload),
            }
        }
        case 'DELETE_TODO': {
            return {
                ...state,
                todo: state.todo.filter((v, i) => v.data !== action.payload)
            }
        }
        case 'MARK_TODO': {
            const index = state.todo.findIndex((td, i) => td === action.payload.data)
            const newArr = [...state.todo]
            newArr[index].mark = action.payload.mark
            return {
                ...state,
                todo: newArr,
            }
        }
        case 'ADD_EMOJI': {
            console.log('ADD_EMOJI')
            return {
                ...state,
                emoji: action.payload,
                loading:false
            }
        }
        default: {
            return {
                ...state
            }
        }
    }
}

export default GlobalReducer;