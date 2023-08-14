import GlobalReducer from './GlobalReducer';
import GlobalContext from './GlobalContext';
import { useEffect, useReducer } from 'react';

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
        console.log('fetchEmoji',emjJson)
        dispatch({type:'ADD_EMOJI', payload: emjJson});
    }

    const addTodo = data => {
        dispatch({ type: 'ADD_TODO', payload: data });
        console.log('addTodo function', state.searchEmoji);
    }

    const deleteTodo = data => {
        dispatch({ type: 'DELETE_TODO', payload: data });
    }

    const onCheckBox = (e, index, data) => {
        let todoObj = { index, mark: e?.target?.checked, data }
        dispatch({ type: 'MARK_TODO', payload: todoObj })
    }

    return <GlobalContext.Provider
        value={{
            todo: state.todo,
            emoji: state.emoji,
            searchEmoji: state.searchEmoji,
            loading: state.loading,
            addTodo,
            deleteTodo,
            onCheckBox,
            fetchEmoji
        }}
    >
        {props.children}
    </GlobalContext.Provider>
}

export default GlobalState;