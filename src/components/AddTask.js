import React, { useState } from 'react'

const AddTask = ({ onAdd }) => {
  const [text, setText] = useState('')
  const [day, setDay] = useState('')
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()

    if (!text) {
      alert('Please Add Task')
      return
    }
    onAdd({ text, day, reminder })
    setText('')
    setDay('')
    setReminder(false)
  }

  return (
    <>
      <form
        autoComplete="off"
        className="bg-pink-50 shadow-sm rounded px-8 pt-6 pb-8 mb-4"
        onSubmit={onSubmit}
      >
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Task
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            value={text}
            onChange={(e) => setText(e.target.value)}
            type="text"
            placeholder="Add Task"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">
            Day & Time
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            value={day}
            onChange={(e) => setDay(e.target.value)}
            placeholder="Day & Time"
          />
        </div>
        <div className="flex items-center justify-between">
          <span className="block text-gray-700 text-sm font-bold mb-2">
            Reminder{' '}
          </span>
          <input
            type="checkbox"
            value={reminder}
            checked={reminder}
            onChange={(e) => setReminder(e.currentTarget.checked)}
            className="form-checkbox h-5 w-5 text-red-600"
          />
        </div>
        <div className="flex items-center justify-ceneter">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white  rounded-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Save Task
          </button>
        </div>
      </form>
    </>
  )
}

export default AddTask
