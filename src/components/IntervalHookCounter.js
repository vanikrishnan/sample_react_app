import React, {useState, useEffect} from 'react';

function IntervalHookCounter() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const tick = () => {
            setCount(prevState => prevState+1)
        }
        const interval = setInterval(tick, 1000);

        return (()=> {
            clearInterval(interval);
        })
    })

    return (
        <h1>{count}</h1>
    )
}

export default IntervalHookCounter;