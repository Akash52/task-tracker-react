import React from 'react'

const AddTask = () => {
  return (
    <>
      <form
        autoComplete="off"
        className="bg-white shadow-sm rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Task
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="task"
            type="text"
            placeholder="Add Task"
          />
        </div>
        <div className="mb-4">
          <label
            class="block text-gray-700 text-sm font-bold mb-2"
            for="username"
          >
            Day & Time
          </label>
          <input
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username"
            type="text"
            placeholder="Day & Time"
          />
        </div>
        <div class="flex items-center justify-between">
          <span class="block text-gray-700 text-sm font-bold mb-2">
            Reminder{' '}
          </span>
          <input
            type="checkbox"
            class="form-checkbox h-5 w-5 text-red-600"
            checked
          />
        </div>
        <div class="flex items-center justify-ceneter">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white  rounded-md font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="button"
          >
            Save Task
          </button>
        </div>
      </form>
    </>
  )
}

export default AddTask
