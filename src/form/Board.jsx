import React from 'react'

const Board = ({board, setBoard, formErrors}) => {
  return (
    <div className="pt-4 pb-4 h-32 flex justify-center items-center flex-col">

    <h3 class="mb-2 font-semibold text-center">Examination Board</h3>

   
    <select id="course" className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2.5 items-center' required value={board} onChange={(e) => setBoard(e.target.value)}>

      <option value="" className='font-semibold'>Board</option>
      <option value="1" className='font-semibold'>NEB</option>
      <option value="2" className='font-semibold'>CTEVT</option>
      <option value="3" className='font-semibold '>A  level</option>
    </select>
    {formErrors.board && <p className="font-black text-xs mt-2 text-red-500 dark:text-yellow-400">{formErrors.board}</p>}
    
    
  </div>
  )
}

export default Board;