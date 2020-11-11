import React, { Component } from 'react'

class Task extends Component {
  
  StyleCompleted(){
    return{
      fontSize:'20px',
      color: this.props.task.done ? 'gray' : 'blue',
      textDecoration:'none'
    }
  }

  render(){
    const {task} = this.props
    return (
      <div style={this.StyleCompleted()}>
        {task.title}-
        {task.description}-
        {task.done}-
        {task.id}
        <input type="checkbox" />
        <button style={btnDelete}>X</button>
      </div>
    )
  }
}

const btnDelete = {
  fontSize: '10px',
  background: '#ea2027',
  color: '#fff',
  border: 'none',
  padding: '10px 15px',
  borderRadius: '50%',
  cursor: 'pointer'
}

export default Task