import React, { Component } from 'react'

class Form extends Component {
constructor(props) {
  super(props)

  this.state = {
    username: '',
    comments: '',
    topic: 'react'
  }
}

handlerUsernameChange = (event) => {
   this.setState({
    username: event.target.value
   })
}
handleCommentChange = (event) =>{
    this.setState({
        comments: event.target.value
    })
}
handleTopicChange = (event) =>{
    this.setState({
        comments: event.target.value
    })
} 
handleSubmit = (event) => {
     alert(`${this.state.username} ${this.state.comments} ${this.state.topic}`)
}
  render() {
    return (
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Username</label>
                <input type='text' value={this.state.username}
                 onChange={this.handlerUsernameChange}/>
            </div>
            <div>
                <label>Comments</label>
                <textarea value={this.state.comments} 
                onChange={this.handleCommentChange}></textarea>
            </div>
            <div>
                <label value={this.state.topic} onChange={this.handleTopicChange}>Topic</label>
                <select>
                    <option value="react">React</option>
                    <option value="angular">Angular</option>
                    <option value="vue">Vue</option>
                </select>
            </div>
            <button type='submit' >Submit</button>
        </form>
    )
  }
}

export default Form