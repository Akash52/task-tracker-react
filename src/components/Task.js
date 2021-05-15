import React from 'react'

const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${
        task.reminder
          ? 'max-w-md p-3 px-5 mt-3 cursor-pointer  bg-green-200 shadow-sm rounded-lg my-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
          : 'max-w-md p-3 px-5 mt-3 cursor-pointer  bg-gray-100 shadow-sm rounded-lg my-2 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105'
      } `}
      onDoubleClick={() => onToggle(task.id)}
    >
      <div className="flex justify-between ">
        <p className="mt-1 font-semibold  text-gray-600">{task.text}</p>{' '}
        <i
          className="fas fa-times mt-3 cursor-pointer"
          onClick={() => onDelete(task.id)}
        ></i>
      </div>
      <p className="mt-1 text-md leading-3 text-gray-500 dark:text-gray-100 ml-1">
        {task.day}
      </p>
    </div>
  )
}

export default Task
