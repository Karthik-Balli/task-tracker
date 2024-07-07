import { useState } from 'react';

const AddTask = ({ onAdd }) => {
    const [text, setText] = useState(' ')
    const  [day, setDay] = useState(' ')
    const [reminder, setReminder] = useState(false)

    // onSubmit function
    const onSubmitTask = (e) => {
        e.preventDefault()
        if(!text) {
            alert('Please add a task !')
            return
        }
 
        onAdd( {text, day, reminder} )

        setText(' ')
        setDay(' ')
        setReminder(false)
    }
  return (
    <form className='add-form' onSubmit={onSubmitTask}>
        <div className='form-control'>
            <label>Add Task</label>
            <input type='text' placeholder='Add Task' value={text} onChange={(e) => setText(e.target.value)}></input>
        </div>
        <div className='form-control'>
            <label>Date & Time</label>
            <input type='text' placeholder='Set Date & Time' value={day} onChange={(e) => setDay(e.target.value)}></input>
        </div>
        <div className='form-control-check'>
            <label>Set Reminder</label>
            <input type='checkbox'  checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)}></input>
        </div>
        <input type='submit' value='Save Task' className='btn btn-block' />
    </form>
  )
}

export default AddTask



/**
 * AddTask Component
- This component works when clicked add Task button, then the AddTask component firesup, then users have to add new task
- This component having a form, that contains of various input methods and functions.
 */