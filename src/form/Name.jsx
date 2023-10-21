import React from 'react'

const Name = ({name,setName,formErrors}) => {
  return (
    <div className="flex flex-col items-center">
    <label htmlFor="name">Full Name:</label>
    <input
      className='w-11/12 mb-4 p-2 rounded border-2 border-slate-300 text-black'
      type="text"
      id="name"
      placeholder="Your Name"
      required
      value={name}
      onChange={(e) => setName(e.target.value)}
    />
    {formErrors.name && <p className="text-black font-black">{formErrors.name}</p>}
  </div>
  )
}

export default Name