import React from 'react'

const Email = ({email, setEmail,formErrors}) => {
  return (
    <div className="flex flex-col items-center">
    <label htmlFor="email">Email:</label>
    <input
      className='w-11/12 mb-4 p-2 rounded border-2 border-slate-300 text-black'
      type="email"
      id="email"
      name="email"
      placeholder="Your Email"
      required
      value={email}
      onChange={(e) => setEmail(e.target.value)}
    />
    {formErrors.email && <p className="text-black font-black">{formErrors.email}</p>}
  </div>
  )
}

export default Email