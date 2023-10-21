import React from 'react'

const Board = ({board, setBoard, formErrors}) => {
  return (
    <div className="pt-4 pb-4 h-32">
    <p className="selectcourse">Examination Board</p>
    <select id="course" className='rounded border-2 border-slate-300 text-gray-500' required value={board} onChange={(e) => setBoard(e.target.value)}>
      <option value="">Board</option>
      <option value="1">NEB</option>
      <option value="2">CTEVT</option>
      <option value="3">A level</option>
    </select>
    {formErrors.board && <p className="text-black font-black">{formErrors.board}</p>}
  </div>
  )
}

export default Board;