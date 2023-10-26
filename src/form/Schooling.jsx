import React from 'react'

const Schooling = ({schoolingCompleted, setSchoolingCompleted, formErrors}) => {
  return (
    
    <div className="pt-4 pb-4 max-w-[35rem]">


    <h3 class="mb-4 font-semibold">Your Qualification</h3>
<ul class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:flex">
    <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input
            type="radio"
            name="schooling"
            required
            value="Yes"
            checked={schoolingCompleted === 'Yes'}
            onChange={() => setSchoolingCompleted('Yes')}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "/>

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">Completed +2 /(+2 equivalent)</label>
        </div>
    </li>
    <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
        <div class="flex items-center pl-3">
            <input 
            type="radio"
            name="schooling"
            required
            value="No"
            checked={schoolingCompleted === 'No'}
            onChange={() => setSchoolingCompleted('No')}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300"/>

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">Under Secondary Level</label>
        </div>
    </li>
</ul>

    {formErrors.schoolingCompleted && <p className=" text-black font-black text-sm flex justify-center">{formErrors.schoolingCompleted}</p>}
  </div>
  )
}

export default Schooling