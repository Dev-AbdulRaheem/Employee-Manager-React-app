import React from 'react'

const TaskList = () => {
  return (
    <div id="tasklist"className='flex overflow-auto items-center justify-start gap-5 flex-nowrap h-[50%] w-full  mt-10 py-5'>
        <div className='shrink-0 h-full bg-yellow-400  w-75 rounded-xl px-5'>
            <div className='flex flex-row py-3 justify-between items-center'>
                <h3 className='bg-red-600 text-md px-3 py-1 rounded-2xl'>High</h3>
                <h4 className='text-sm'>21-sep-2026</h4>

            </div>
            <h2 className='mt-5 text-2xl font-semibold'>Make Dsa Notes</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam explicabo minus veniam odio vero accusantium.</p>

        </div>
        
        
    </div>
  )
}

export default TaskList