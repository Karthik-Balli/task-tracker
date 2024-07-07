import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({ title, onAddTask, showTaskText }) => {

  return (
    <header className='header'>
      <h1>{title}</h1>
      <Button color={showTaskText ? 'red' : 'green'} text={showTaskText ? "Close" : "Add"} btnClick={onAddTask} />
    </header>
  )
}

Header.defaultProps = {
  title: 'Task Tracker',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}
export default Header



/* 
This is a Header Component
- It consists of Header components like Title of the Application and Add Task button
*/