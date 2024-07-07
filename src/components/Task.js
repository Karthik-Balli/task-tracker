import { FaTimes } from 'react-icons/fa'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div className={`task ${task.reminder && 'reminder'}`} onDoubleClick={() => onToggle(task.id)}  >
        <h3>{task.text} <FaTimes style={{color: 'red', cursor:'pointer'}} onClick={() => onDelete(task.id)} /></h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task 


/**
 * Task Component - A Single Task Component
- This component is contains of a div tag that holds the information of task array - that include id, text, day and remainder.
- In this component Task includes various function onClick and onDoubleClick.
 */