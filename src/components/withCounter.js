import React from 'react';

const withCounter = (WrappedComp, incrementNum) => {
class WithCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    incrementCount = () => {
        this.setState((prevState)=> {
            return {
            count: prevState.count + incrementNum
            }
        })
    }

    render() {
        console.log(this.props.name);
        return <WrappedComp count={this.state.count} incrementCount={this.incrementCount} 
        {...this.props}
        />
    }
}
return WithCounter;
}

export default withCounter;