import React from 'react';

function NameList() {
    const names = ['Bruce', 'Clark', 'Diana']
    // return (
        // 1st Approach (Not a proper solution)
        // <div>
        //     <h1>{names[0]}</h1>
        //     <h1>{names[1]}</h1>
        //     <h1>{names[2]}</h1>
        // </div>
        // )

        //2nd Approach using map

        // return (
        //     <div>
        //         {names.map(name => <h1>{name}</h1>)}
        //     </div>
        // )

        //3rd approach (to resolve warning key prop is used)
        // const nameList = names.map(name => <h1 key={name}>{name}</h1>)
        // return (
        //     <div>{nameList}</div>
        // )

        //3rd approach (to resolve warning key prop is used and index is assigned if we have duplicates in  name )
        const nameList = names.map((name, index) => <h1 key={index}>{name}</h1>)
        return (
            <div>{nameList}</div>
        )
}

export default NameList;