import React, { useState } from 'react'
import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Doctor Appointment',
      day: 'Feb 5th at 2:30pm',
      reminder: true,
    },
    {
      id: 2,
      text: 'Meeting At School',
      day: 'Feb 6th at 1:30pm',
      reminder: true,
    },
    {
      id: 3,
      text: 'Grocery Shoppinng',
      day: 'Feb 7th at 2:30pm',
      reminder: false,
    },
  ])

  //Delete Task

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }
  //Toggle

  const onReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    )
  }
  return (
    <>
      <div className="flex items-center justify-center mx-auto  w-full py-4">
        <div className="max-w-md py-2 px-8 bg-white w-full   shadow-lg rounded-lg my-2">
          <Header />
          <AddTask />
          {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} onToggle={onReminder} />
          ) : (
            <div className="max-w-md p-3 py-4 px-3 mt-3  bg-gray-100 shadow-sm rounded-lg my-2 ">
              <div className="flex justify-center ">
                <p className="mt-1 flex  text-md leading-3 text-gray-500 dark:text-gray-100 ml-1">
                  No Task Remaing
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default App
