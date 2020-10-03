import React from 'react';
import { connect } from 'react-redux'
import { completeToDo } from '../actions'
import '../index.css'

const Todo = ({ id, todo, completed, completeToDo }) => {
  return (
    <li onClick={() => {completeToDo(id)}} className={completed ? "completed" : "not-completed"}>
      {todo}
    </li>
  )
}

const mapDispatchToProps = dispatch => ({
  completeToDo: id => dispatch( completeToDo(id) )
})

export default connect(null, mapDispatchToProps)(Todo)