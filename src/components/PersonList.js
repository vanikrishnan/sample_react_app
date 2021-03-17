import React from 'react';
import Person from './Person';

function PersonList() {
    const persos = [
        {
            id:1,
            name:'Bruce',
            age:27,
            skill: 'Angular'
        },
        {
            id:2,
            name:'Clark',
            age:28,
            skill: 'Vue'
        },
        {
            id:3,
            name:'Diana',
            age:29,
            skill: 'React'
        }
    ];
    // 1st approach
    // const personList = persos.map(person => (<h2>I am {person.name}. I am {person.age} yrsld. I know {person.skill}</h2>))
    // return (
    //     <div>{personList}</div>
    // )

    //2nd approach (to refactor JSX into separate component) - we have warning in console that Each child in a list should have a unique "key" prop.
    const personList = persos.map(person => (<Person key={person.id} person={person}></Person>))
    return (
        <div>
            {personList}
        </div>
    )
    
}

export default PersonList;