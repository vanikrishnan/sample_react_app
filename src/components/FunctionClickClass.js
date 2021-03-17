import React, {Component} from 'react';

class FunctionClickClass extends Component {
constructor() {
    super();
    this.clickHandler=this.clickHandler.bind(this)
}

clickHandler = () => {
console.log("Button Clicked", this)
}

render(){
    return (
        <div>
            <button onClick={this.clickHandler}>Click</button>
        </div>
    )
}
}

export default FunctionClickClass;