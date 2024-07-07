import Task from './Task';

const Tasks = ({tasks, onDelete, onToggle }) => {
  return (
    <div>
        {tasks.map((task, index) => (
            <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default Tasks


/* 
This is a Tasks Component
- It takes the single task component and iterates or map the number of tasks.
*/