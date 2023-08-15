import GlobalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import { useReducer } from 'react';
import { FETCH_EMOJI, SEARCH_EMOJI } from '../types';

const GlobalState = props => {

    const initialState = {
        emoji:null,
        todo: [],
        searchEmoji: [],
        loading:true
    }

    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    const fetchEmoji = async () => {
        let emj = await fetch('https://emoji-api.com/emojis?access_key=56d713742ad50de3f7052181d3c05cb570a79509 ');
        let emjJson = await emj.json();
        console.log('fetchEmojiff',emjJson)
        dispatch({type:FETCH_EMOJI, payload: emjJson});
    }

    const searchEmojiFunc = data => {
        dispatch({ type: SEARCH_EMOJI, payload: data });
    }

    return <GlobalContext.Provider
        value={{
            todo: state.todo,
            emoji: state.emoji,
            searchEmoji: state.searchEmoji,
            loading: state.loading,
            searchEmojiFunc,
            fetchEmoji
        }}
    >
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalState;