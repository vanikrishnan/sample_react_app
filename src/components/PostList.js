import React from 'react';
import axios from 'axios';

class PostList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            errorMsg: ''
        }
    }

    componentDidMount() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {
           this.setState({
               posts: response.data
           })
            console.log(response)
        })
        .catch(error => {
            this.setState({
                errorMsg: "Error fetching PostList"
            })
            console.log(error);
        })
    }

    render() {
        const {posts, errorMsg} = this.state;
        return (
        <div>
            List of Posts
            {posts.length ? posts.map(post => <h2 key={post.id}>{post.title}</h2>): null}
            {errorMsg ? <h2>{errorMsg}</h2>: ''}
        </div>
            )
    }
}

export default PostList;