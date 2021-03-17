import React, { Component } from 'react';

class Counter extends Component {

constructor() {
    super();
    this.state= {
        counter: 0
    };
}

increment() {
    this.setState((prevState, props) => 
        ({
            counter: prevState.counter + Number(props.value)
        })
    , () => {
        console.log("Counter"+ this.state.counter);
    })
}

incrementFive() {
    this.increment();
    // this.increment();
    // this.increment();
    // this.increment();
    // this.increment();
}

render() {
    return (
        <div>
            <h1>Counter:  {this.state.counter}</h1>
            <button onClick ={() => this.incrementFive()}>increment</button>
        </div>
    )
}
}

export default Counter;