import { useContext, useEffect, Fragment } from 'react';
import GlobalContext from '../context/GlobalContext';

const EmojiData = () => {

    const { emoji, fetchEmoji, searchEmoji, loading } = useContext(GlobalContext);

    useEffect(() => {
        loading && fetchEmoji();
    }, [])

    return (
        <>
            {!loading ? <div>
                {searchEmoji.length ?
                <>
                    <button onClick={() => window.location.reload(true)} className='fixed top-8 left-5 bg-teal-200 p-5 rounded text-bold text-2xl transform -scale-x-100 active:scale-100 ease-in-out duration-300'>↳</button>
                    {searchEmoji?.map((v, i) =>
                        <span className='m-2 text-2xl' key={i}>
                            {v.character}
                        </span>
                    )}
                </>
                    : emoji?.map((v, i) =>
                        <span className='m-2 text-2xl' key={i}>
                            {v.character}
                        </span>
                    )}
            </div> : <h1>Loading...</h1>}
        </>
    );
}

export default EmojiData;