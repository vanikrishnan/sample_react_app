import React, {useState} from 'react';

function HookCounterTwo() {
    const [count, setCount] = useState(0);
    return (
        <div>
            <button onClick={() => setCount(prevState => prevState+1)}>Count {count}</button>
        </div>
    )
}

export default HookCounterTwo;