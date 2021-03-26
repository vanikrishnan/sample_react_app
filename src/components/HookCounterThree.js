import React, {useState} from 'react';

function HookCounterThree() {
    const [name, setName] = useState({firstName: '', lastName: ''});
    return (
        <div>
            <label>First Name</label>
           <input type="text" value={name.firstName} onChange={(e) => setName({...name, firstName: e.target.value})}></input>
           <label>Last Name</label>
           <input type="text" value={name.lastName} onChange={(e) => setName({...name, lastName: e.target.value})}></input>
           <h2>{JSON.stringify(name)}</h2>
        </div>
    )
}

export default HookCounterThree;