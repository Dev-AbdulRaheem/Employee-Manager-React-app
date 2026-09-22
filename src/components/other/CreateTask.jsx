import React from 'react'

const CreateTask = () => {
  return (
    <div className='mt-3 bg-[#302d2d] p-3'>

        <form className='flex w-full items-start justify-between gap-10'>

          <div className='w-1/2'>

            <div className='mb-5 w-full'>
              <h3 className='mb-2 text-sm'>Task Title</h3>
              <input
                className='w-full rounded-md border-2 border-gray-600 bg-transparent px-3 py-2 outline-none focus:border-gray-400'
                type="text"
                placeholder='make ui design'
              />
            </div>

            <div className='mb-5 w-full'>
              <h3 className='mb-2 text-sm'>Date</h3>
              <input
                className='w-full rounded-md border-2 border-gray-600 bg-transparent px-3 py-2 outline-none focus:border-gray-400'
                type="date"
              />
            </div>

            <div className='mb-5 w-full'>
              <h3 className='mb-2 text-sm'>Assign to</h3>
              <input
                className='w-full rounded-md border-2 border-gray-600 bg-transparent px-3 py-2 outline-none focus:border-gray-400'
                type="text"
                placeholder='employee name'
              />
            </div>

            <div className='mb-5 w-full'>
              <h3 className='mb-2 text-sm'>Category</h3>
              <input
                className='w-full rounded-md border-2 border-gray-600 bg-transparent px-3 py-2 outline-none focus:border-gray-400'
                type="text"
                placeholder='design,dev etc...'
              />
            </div>

           

          </div>

          <div className='w-1/2'>

            <h3 className='mb-2 text-sm'>Description</h3>

            <textarea
              name="desc"
              id="description"
              className='h-36 w-full resize-none rounded-md border-2 border-gray-600 bg-transparent p-3 outline-none focus:border-gray-400'
            ></textarea>

            <button
              className='mt-4 w-full rounded-md cursor-pointer bg-emerald-400 py-3 font-medium text-white transition hover:bg-emerald-500'
            >
              Create Task
            </button>

          </div>
        </form>

      </div>

  )
}

export default CreateTask