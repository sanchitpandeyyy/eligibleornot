import React from 'react'

const Schooling = ({schoolingCompleted, setSchoolingCompleted, formErrors}) => {
  return (
    <div className="pt-4 pb-4">
    <p>Completed Your 12 years of Schooling?</p>
    <div className="flex justify-center gap-14 ">
      <div className='w-4 '>
        <input
          type="radio"
          name="schooling"
          required
          value="Yes"
          checked={schoolingCompleted === 'Yes'}
          onChange={() => setSchoolingCompleted('Yes')}
        />
        Yes
      </div>
      <div className='w-4'>
        <input
          type="radio"
          name="schooling"
          required
          value="No"
          checked={schoolingCompleted === 'No'}
          onChange={() => setSchoolingCompleted('No')}
        />
        No

        
      </div>
    </div>
    {formErrors.schoolingCompleted && <p className=" text-black font-black text-sm flex justify-center">{formErrors.schoolingCompleted}</p>}
  </div>
  )
}

export default Schooling