import React from 'react';

class ClickCounterTwo extends React.Component {
    render() {
        const {count, incrementCount} = this.props;
        return (
            <button onClick={incrementCount}>
    {this.props.name} Clicked {count} times</button>
        )
    }
 }

 export default ClickCounterTwo;