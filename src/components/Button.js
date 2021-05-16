import React from 'react'

const Button = ({ onClick, text }) => {
  return (
    <button
      className="text-white font-bold uppercase text-base px-8 py-3 rounded-full shadow-md hover:shadow-lg outline-none focus:outline-none mr-1 mb-1  transition-all   bg-blue-700 hover:bg-blue-600 ease-in duration-150 "
      type="button"
      onClick={onClick}
    >
      {text}
    </button>
  )
}

export default Button
