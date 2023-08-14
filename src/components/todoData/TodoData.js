import { useContext, useEffect, Fragment } from 'react';
import GlobalContext from '../context/GlobalContext';

const TodoData = () => {

    // const { todo, deleteTodo, onCheckBox, emoji } = useContext(GlobalContext);
    const { emoji, fetchEmoji, searchEmoji, loading } = useContext(GlobalContext);

    useEffect(() => {
        loading && fetchEmoji();
    }, [])

    return (
        // <>{console.log('emojiiii', emoji)}</>
        <>
            {!loading ? <div>
                {searchEmoji.length ?
                    searchEmoji?.map((v, i) =>
                        <Fragment key={i}>
                            {v.character}
                        </Fragment>
                    )
                    : emoji?.map((v, i) =>
                        <Fragment key={i}>
                            {v.character}
                        </Fragment>
                    )}
            </div> : <h1>Loading...</h1>}
        </>
        // <>
        //     <div className='relative'>
        //         {todo.length > 0 ? todo.map((v, i) => {
        //             return (
        //                 <div className='m-1 flex flex-rows' key={i}>
        //                     <div className={`-top-2 -left-1 bg-teal-100 px-3 rounded-l-lg shadow drop-shadow-xl text-sm text-center flex items-center ${v.mark ? 'bg-zinc-100 text-zinc-500' : ''}`}>{i + 1}</div>
        //                     <div
        //                         className={`bg-teal-300 p-2 px-5 ${v.mark ? 'bg-zinc-100 text-zinc-500' : ''}`}
        //                         key={i}>{v?.data}</div>
        //                     <div onClick={() => deleteTodo(v.data)}
        //                         className={`-top-2 -right-1 bg-teal-100 px-2 rounded-r-lg shadow drop-shadow-xl text-sm text-red-500 font-bold flex items-center cursor-pointer hover:scale-105 ease-in-out duration-300 ${v.mark ? 'bg-zinc-100 text-zinc-500' : ''}`}
        //                     >{'x'}</div>
        //                     <input type="checkbox" disabled={v.mark ? true : false} checked={v.mark} onChange={e => onCheckBox(e, i, v)} />
        //                 </div>
        //             )
        //         }) : ""}
        //     </div>
        //     {console.log('tododo', todo)}
        // </>
    )
}

export default TodoData