import { FETCH_EMOJI, SEARCH_EMOJI } from "../types"

const GlobalReducer = (state, action) => {
    switch (action.type) {
        case SEARCH_EMOJI: {
            return {
                ...state,
                searchEmoji: state.emoji.filter(v=>v.slug.includes(action.payload) || v.group.includes(action.payload)||v.subGroup.includes(action.payload)||v.unicodeName.includes(action.payload))
            }
        }
        case FETCH_EMOJI: {
            return {
                loading:true,
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