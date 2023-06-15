import './index.css'
import {Component} from 'react'

class TodoItem extends Component {
  render() {
    const {todoDetails, deleteTodo} = this.props
    const {id, title} = todoDetails
    const onDeleteTodo = () => {
      deleteTodo(id)
    }
    return (
      <li>
        <p className="title">{title}</p>
        <button type="button" className="delete-btn" onClick={onDeleteTodo}>
          Delete
        </button>
      </li>
    )
  }
}

export default TodoItem
