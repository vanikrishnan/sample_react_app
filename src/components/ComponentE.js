import React from 'react';
import ComponentF from './ComponentF';
import UserContext from './UserContext';

class ComponentE extends React.Component {

    // static contextType = UserContext;

    render(){
        return(
            <div>
                Component E {this.context}
            <ComponentF /> 
            </div>
        )
    }
}

ComponentE.contextType = UserContext;


export default ComponentE;