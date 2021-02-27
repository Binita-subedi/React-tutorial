import React, { Component } from 'react'


 class Form extends Component {

  constructor(props) {
    super(props)
  
    this.state = {
       username: '',
       Comment: '',
       topic: 'angular'
    }
  }
  handleUsernameChange = (event) => {
    this.setState({
      username: event.target.value
    })
  }
  handleCommentChange =(event) => {
    this.setState({
      Comment: event.target.value
    })
  }
  handleTopicChange = (event) => {
    this.setState({
      topic: event.target.Value
    })
  }
  handleSubmit = event => {
    
     alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`)
    event.preventDefault()
  }
  render() {
    const { username, Comment, topic } = this.state
    return (
    <form onSubmit={this.handleSubmit}>
      <div>
        <lable>Username</lable>
        <input type='text' value={username} onChange={this.handleUsernameChange} />
      </div>
      
      <div>
        <label>Comment</label>
        <textarea value={Comment} onChange={this.handleCommentChange}></textarea>
      </div>
      <div>
        <label>Topic</label>
        <select value={topic} onChange={this.handleTopicChange}>
          <option value='react'>Angular</option>
          <option value='angular'>React</option>
          <option value='vue'>Vue</option>
        </select>
        <div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
    )
  }
}

export default  Form
