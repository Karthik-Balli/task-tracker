import { useState, useEffect } from 'react'
import Header from  "./components/Header"
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([ ])
  
  useEffect(() => { 
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  // Fetch Tasks from db.json file also called as our database server
  const fetchTasks = async () => {
    const res = await fetch('http://localhost:5000/tasks')
    const data = await res.json()

    return data
  }

  // Fetch Task with belonging id's
  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await res.json()

    return data
  }

    // Add Task
    const addTask = async (task) => {
      const res = await fetch('http://localhost:5000/tasks', {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(task),
      })
  
      const data = await res.json()
  
      setTasks([...tasks, data])
  
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newTask = { id, ...task }
      // setTasks([...tasks, newTask])
    }
  

    // Delete Task
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, { method: 'DELETE' })

      setTasks(tasks.filter((task) => task.id !== id))
    }

    // Toggle Reminder
    const toggleReminder = async(id) => {
      const taskToToggle = await fetchTask(id)
      const updTask = {...taskToToggle, reminder: !taskToToggle.reminder }

      const res = await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT', 
        headers: {'Content-Type': 'application/json'}, 
        body: JSON.stringify(updTask)
      })
      const data = await res.json()
      
      setTasks(tasks.map((task) => task.id === id ? 
      {...task, reminder: data.reminder} : 
      task))
    }

  return (
    <div className="container">
      {/* Header Component */}
      <Header onAddTask={() => setShowAddTask(!showAddTask)} showTaskText={showAddTask} />
      {/* Add Task Component - It displays the component about Add the New Task*/}
      { showAddTask && <AddTask  onAdd={addTask} /> }
      {/* Task Component - Task Component consists List of tasks that are to be finished */}
      {tasks.length > 0 ? 
      (<Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>) : 
      ("No tasks to show")}
      
    </div> 
  ) 
}

export default App;
