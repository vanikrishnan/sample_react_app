import React from 'react';
import axios from 'axios';

class PostForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            title: '',
            body: ''
        }
    }

    clickHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = (e) => {
        e.preventDefault();
        axios.post('https://jsonplaceholder.typicode.com/posts', this.state) 
        .then(response => {
            console.log(response);
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        const {userId, title, body} = this.state;
        return (
            <div>
                <form onSubmit={this.submitHandler}>
                    <div>
                        <label>
                            UserId
                        </label>
                        <input type="text" name="userId" value={userId} onChange={this.clickHandler}></input>
                    </div>
                    <div>
                        <label>
                            Title
                        </label>
                        <input type="text" name="title"  value={title} onChange={this.clickHandler}></input>
                    </div>
                    <div>
                        <label>
                            Body
                        </label>
                        <input type="text" name="body" value={body} onChange={this.clickHandler}></input>
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;
