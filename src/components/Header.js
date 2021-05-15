import React from 'react'
import Button from './Button'

const Header = () => {
  const onClick = () => {
    console.log('Click')
  }
  return (
    <>
      <div className="flex justify-between mt-4">
        <span className="text-3xl font-medium text-indigo-500">
          Task Tracker
        </span>
        <Button onClick={onClick} />
      </div>
    </>
  )
}

export default Header
