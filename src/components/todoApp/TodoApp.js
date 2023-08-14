import { useState, useContext } from 'react';
import GlobalContext from '../context/GlobalContext';
import TodoData from '../todoData/TodoData';

const TodoApp = () => {

    const { addTodo, todo } = useContext(GlobalContext);

    const [show, setShow] = useState(false);
    const [data, setData] = useState();

    const showTodo = () => {
        setShow(true);
    }

    const subFunc = () => {
        addTodo(data)
        setShow(false);
    }

    return (
        <div>
            {show && <div className='bg-zinc-100 p-5 outline-0 border-2 rounded w-[300px] shodow drop-shadow-xl'>
                <input
                    type="text"
                    className='p-2 w-full outline-0 border-2 rounded'
                    placeholder='Enter your todo'
                    autoFocus
                    onChange={e => setData(e?.target?.value)}
                />
                <button
                    onClick={subFunc}
                    className='bg-cyan-300 my-2 w-full rounded py-1 text-zinc-500 font-bold active:scale-95 ease-in-out duration-200'
                >Submit</button>
            </div>}
            <button onClick={showTodo} className='text-4xl bg-teal-500 text-white rounded-full px-[10px] pb-1 shadow drop-shadow-xl active:scale-100 active:pb-2 active:px-3 ease-in-out duration-300 absolute bottom-5 right-5'>
                +
            </button>
            {!show && <TodoData />}
        </div>
    )
}

export default TodoApp