import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex justify-between w-full gap-3 '>
        <div className='h-40 w-[45%] py-6 px-9 bg-red-400 rounded-2xl'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>
        <div className='h-40 w-[45%] py-6 px-9 bg-blue-400 rounded-2xl'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>
        <div className='h-40 w-[45%] py-6 px-9 bg-green-400 rounded-2xl'>
            <h2 className='text-3xl'>0</h2>
            <h3 className='text-xl'>New Task</h3>
        </div>
    </div>
  )
}

export default TaskListNumber