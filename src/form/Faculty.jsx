import React from 'react'

const faculty = ({faculty,setFaculty,formErrors}) => {
  return (
    <div className=" pb-2 h-32">
    <p className="selectcourse">Your +2 Faculty</p>
    <select id="course" className='rounded border-2 border-slate-300 text-gray-500' required value={faculty} onChange={(e) => setFaculty(e.target.value)}>
      <option value="">Courses</option>
      <option value="1">Science</option>
      <option value="2">Technical</option>
      <option value="3">Management</option>
      <option value="4">Commerce</option>
      <option value="5">Arts</option>
      <option value="6">Humanities</option>
    </select>
    {formErrors.faculty && <p className="text-black font-black">{formErrors.faculty}</p>}
  </div>
  )
}

export default faculty