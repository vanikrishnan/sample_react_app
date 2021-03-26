import React, {useState} from 'react';

function HookCounterFour() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems([...items, {id: items.length, value: Math.floor(Math.random() * 10)+1}])
    }

    return (
        <div>
            <button onClick={addItem}>Add item</button>
            {items.length ? items.map(item => <h1 key={item.id}>{item.value}</h1>): null}
        </div>
    )
}

export default HookCounterFour;