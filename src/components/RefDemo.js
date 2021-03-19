import React, {Component} from 'react';

class RefDemo extends Component {
    constructor(props) {
        super(props);
        this.inputRef = React.createRef();
        this.cbRef = null;
        this.setCbRef = (element) => {
            this.cbRef = element;
        }
    }

    componentDidMount() {
        this.inputRef.current.focus(); // 1st approach for focussing input field
        // if(this.cbRef)  // 2nd approach for focussing input field
        // this.cbRef.focus(); 
        console.log(this.inputRef, "InputRef", this.cbRef, "this.cbRef");
    }

    clickHandler = () => {
        alert(`${this.inputRef.current.value}`)
    }

    render() {
        return (
            <div>
                <input type="text" ref={this.inputRef} />
                <input type="text" ref={this.setCbRef} />
                <button onClick ={this.clickHandler}>Click</button>
            </div>
        )
    }
}

export default RefDemo;