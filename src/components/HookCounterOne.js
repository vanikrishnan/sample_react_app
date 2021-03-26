import React, {useState, useEffect} from 'react';

function HookCounterOne() {
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');

    useEffect(() => {
        console.log("useEffect")
        document.title = `You Clicked ${count} times`
    }, [count])

    return(
        <div>
            <button onClick={() => setCount(count+1)}>Clicked {count} times</button>
            <input type="text" value={name} onChange={(e) => setName(e.target.value)}></input>
        </div>
    )
}

export default HookCounterOne