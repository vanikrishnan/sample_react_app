import React, {PureComponent} from 'react';
import Memo from './Memo';
import PureComp from './PureComp';
import RegularComp from './RegularComp';

class ParentCompo extends PureComponent {
    constructor(props){
        super(props);
        this.state = {
            name: 'Vani'
        }
    }

    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vani'
            })
        }, 2000);
    }

    render() {
        console.log("Parent Compo");
        return (
            <div>
                Parent Comp
                <PureComp name={this.state.name} />
                <RegularComp name={this.state.name} />
                <Memo name={this.state.name}  />
            </div>
        )
    }
}

export default ParentCompo;