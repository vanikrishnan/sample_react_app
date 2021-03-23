import React from 'react';
import { UserContextConsumer } from './UserContext';

class ComponentF extends React.Component {
    render(){
        return(
            <div>
                Component F
                <UserContextConsumer>
                    {(username) => {
                        return <h1>Hello {username}</h1>
                    }}
                </UserContextConsumer>
            </div>
        )
    }
}

export default ComponentF;