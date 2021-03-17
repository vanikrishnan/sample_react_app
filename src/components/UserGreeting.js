import React,{ Component } from 'react';

class UserGreeting extends Component {
    constructor() {
        super();
        this.state = {
            isLoggedIn: false
        }
    }

    render() {
        // 1st Approach if/else 
        // if (this.state.isLoggedIn)
        // return (
        //     <div>
        //     Welcome Vani
        //     </div>
        // );
        // else
        // return (
        //     <div>
        //     Welcome Guest
        //     </div>
        // );

        //2nd Approach element variable 
        // let message;
        // if (this.state.isLoggedIn)
        // message = <div>Welcome Vani</div> // or message = 'Welcome Vani'
        // else
        // message = <div>Welcome Guest</div>
        // return (<div>{message}</div>)

        // 3rd Approach ternary condition  

        return (this.state.isLoggedIn) ? (<div>Welcome Vani</div>): (<div>Welcome Guest</div>)

        // 4th Approach Short circuit operator 

        // return (this.state.isLoggedIn) && (<div>Welcome Vani</div>)

       // (Best Approach) 3 & 4
    }
}

export default UserGreeting;