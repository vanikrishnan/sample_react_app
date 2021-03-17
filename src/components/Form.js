import React, { Component } from 'react';

class Form extends Component {
    constructor() {
      super();
      this.state= {
          username: '',
          comments: '',
          topic:'react'
      }; 
    }

    handleUserNameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handleCommentChange = (event) => {
        this.setState({
            comments: event.target.value
        })
    }

    handleTopicChange = (event) => {
        this.setState({
            topic: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`);
        event.preventDefault();
    }

    render() {
        const {username, comments, topic} = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>User Name</label>
                    <input type="text" value = {username} onChange={this.handleUserNameChange}></input>
                </div>
                <div>
                    <label>comments</label>
                    <textarea value = {comments} onChange={this.handleCommentChange}></textarea>
                </div>
                <div>
                    <select value={topic} onChange={this.handleTopicChange}>
                        <option value="angular">Angular</option>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                    </select>
                </div>
                <button type="submit">Submit</button>
            </form>
        )
    }
}

export default Form;