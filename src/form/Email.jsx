import React from 'react'

const Email = ({email, setEmail,formErrors}) => {
  return (
    <div className="flex flex-col items-center md:items-start md:w-[40%]">
    <label htmlFor="email" className=''>Email:</label>
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
    {/* {formErrors.email && <p className="font-black text-xs mt-2 text-red-500 dark:text-yellow-400">{formErrors.email}</p>} */}
  </div>
  )
}

export default Email