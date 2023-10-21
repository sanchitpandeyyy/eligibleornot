import React, { useState } from 'react';
import './eligible.css';

const Eligible = () => {


  // ----------------Declared & Initialized state variables ----------------------
  const [eligible, setEligible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schoolingCompleted, setSchoolingCompleted] = useState('');
  const [nepali, setNepali] = useState('');
  const [maths, setMath] = useState('');
  const [physics, setPhysics] = useState('');
  const [chemistry, setChemistry] = useState('');
  const [computer, setComputer] = useState('');
  const [biology, setBiology] = useState('');
  const [faculty, setFaculty] = useState('');
  const [english, setEnglish] = useState('');
  const [technicalPass, setTechnicalPass] = useState('');
  const [board, setBoard] = useState('');
  const [ctevtCompleted, setCtevtCompleted] = useState('');
  const [takenPhysics, setTakenPhysics] = useState('');
  const [AlevelCompleted, setAlevelCompleted] = useState('');
  const [gradeAlevel, setGradeAlevel] = useState('');
  const [formErrors, setFormErrors] = useState({});
  const [showPopup, setShowPopup] = useState(false);

 
  // --------FORM VALIDATION STARTED -------------

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }

    if (!email.trim() || !email.includes('@')) {
      errors.email = 'Invalid email address';
    }

    if (schoolingCompleted !== 'Yes') {
      errors.schoolingCompleted = 'You must have completed 12 years of schooling';
    }

    if (schoolingCompleted==='Yes' && !board) {
      errors.board = 'Please select your Examination board';
    }

    if (board === '2' && takenPhysics === "Yes" && !ctevtCompleted  ) {
      errors.ctevtCompleted = 'Please select the above option';
    }

    if (board === '3' &&  AlevelCompleted !== 'Yes') {
      errors.AlevelCompleted = 'You must have chosen Physics and Mathematics to be eligible for BSc.CSIT';
    }

    if (board === '2' &&  takenPhysics !== 'Yes') {
      errors.takenPhysics = 'You must have chosen Physics and Mathematics to be eligible for BSc.CSIT';
    }

    if (board === '3' && AlevelCompleted === 'Yes' && !gradeAlevel) {
      errors.gradeAlevel = 'Please select Your Grade';
    }

    if (board==='1' && !faculty) {
      errors.faculty = 'Please select your +2 faculty';
    }

    if (board==='1' && faculty=== '2' && !technicalPass){
      errors.technicalPass = 'Please select the above option';
    }

    if (faculty === '1' && !english) {
      errors.english = 'Please select your English grade';
    }

    if (faculty === '1' && !nepali) {
      errors.nepali = 'Please select your Nepali grade';
    }

    if (faculty === '1' && !maths) {
      errors.maths = 'Please select your Mathematics grade';
    }

    if (faculty === '1' && !physics) {
      errors.physics = 'Please select your Physics grade';
    }

    if (faculty === '2' && !maths) {
      errors.maths = 'Please select your Mathematics grade';
    }

    if (faculty === '2' && !physics) {
      errors.physics = 'Please select your Physics grade';
    }

    if (faculty === '1' && !chemistry) {
      errors.chemistry = 'Please select your Chemistry grade';
    }

    if (faculty === '1' && !(computer || biology)) {
      errors.subjects = 'Select either Computer or Biology';
    }

    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };


  // ------------ CHECKING THE ELIGIBILITY-------------------

  const handleCheckEligibility = () => {
    const validGrades = ['1', '2', '3', '4', '5', '6'];
    const validPercentages = ['1', '2', '3'];
    const validAlevelgrades = ['1', '2', '3','4','5'];

    if (validateForm()) {
      if (schoolingCompleted === 'Yes') {

         // -----NEB criteria-------- 
        if (board === '1') {
         
          if (
            validGrades.includes(english) &&
            validGrades.includes(nepali) &&
            validGrades.includes(maths) &&
            validGrades.includes(physics) &&
            validGrades.includes(chemistry) &&
            (validGrades.includes(computer) || validGrades.includes(biology)) &&
            faculty === '1') {
            setEligible(true);
          } 
          else if (
          validGrades.includes(maths) &&
          validGrades.includes(physics) && 
          technicalPass=== 'Yes' && 
          faculty === '2') 
          {
            setEligible(true);
          }
          else{
            setEligible(false);
          }

        } 
        
         // -----------CTEVT criteria--------
        else if (board === '2') {
         
          if ( takenPhysics === 'Yes' && ctevtCompleted === 'Yes' )
          {
            setEligible(true);
          }
           else {
            setEligible(false);
          }
        }

         // -----------A LEVEL criteria-------- 
        else if (board === '3') {
          // A Level
          if (validAlevelgrades.includes(gradeAlevel) &&  AlevelCompleted === 'Yes' ) {
            setEligible(true);
          } else {
            setEligible(false);
          }
        }

      } 
      else {
        setEligible(false);
      }
      setName('');
      setEmail('');
      setSchoolingCompleted('');
      setBoard('');
      setFaculty('');
      setNepali('');
      setMath('');
      setPhysics('');
      setChemistry('');
      setComputer('');
      setBiology('');
      setFaculty('');
      setEnglish('');
      setTechnicalPass('');
      setCtevtCompleted('');
      setAlevelCompleted('');
      setTakenPhysics('');
      setGradeAlevel('');
      setFormErrors({});
      setShowPopup(true);
    }
  };

  return (
    <div id='wholediv' className=' p-20 '>

    {/* ------- HEADER -------- */}

      <div id='toptext' className="text-center text-5xl font-black text-blue-950">Are You Eligible to Study BSc.CSIT?</div>
      <div id='sectext' className="text-center text-2xl p-3 font-black text-blue-950">Let's Check!</div>


      <div className="mx-8">
        <form action="" className='w-full text-white font-black p-10 rounded-lg shadow-xl bg-blue-600 text-center'>
          
          
           {/* ------- NAME -------- */}

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
            {formErrors.name && <p className="text-red-400 font-black">{formErrors.name}</p>}
          </div>


            {/* ------- EMAIL -------- */}

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
            {formErrors.email && <p className="text-red-400 font-black">{formErrors.email}</p>}
          </div>

           {/* ------- 12 YEARS OF SCHOOLING -------- */}

          <div id='schoolingwhole' className="flex justify-around items-center ">
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
              {formErrors.schoolingCompleted && <p className=" text-red-400 font-black text-sm flex justify-center">{formErrors.schoolingCompleted}</p>}
            </div>
          </div> 


               {/* ------- EXAMINATION BOARD -------- */}

          {schoolingCompleted === 'Yes' && (
            <div className="pt-4 pb-4 h-32">
              <p className="selectcourse">Examination Board</p>
              <select id="course" className='rounded border-2 border-slate-300 text-gray-500' required value={board} onChange={(e) => setBoard(e.target.value)}>
                <option value="">Board</option>
                <option value="1">NEB</option>
                <option value="2">CTEVT</option>
                <option value="3">A level</option>
              </select>
              {formErrors.board && <p className="text-red-400 font-black">{formErrors.board}</p>}
            </div>
          )}

 

          {/* ------- FACULTY -------- */}

          {schoolingCompleted === 'Yes' && board === '1' && (
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
              {formErrors.faculty && <p className="text-red-400 font-black">{formErrors.faculty}</p>}
            </div>
          )}



       {/* ------- SCIENCE SUBJECTS -------- */}


          {board === '1' &&  faculty === '1' && (
            <div className="flex justify-center" id='sub'>
              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">English:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={english} onChange={(e) => setEnglish(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.english && <p className="text-red-400 font-black">{formErrors.english}</p>}
              </div>

              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Nepali:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={nepali} onChange={(e) => setNepali(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.nepali && <p className="text-red-400 font-black">{formErrors.nepali}</p>}
              </div>

              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Mathematics:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={maths} onChange={(e) => setMath(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.maths && <p className="text-red-400 font-black">{formErrors.maths}</p>}
              </div>

              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Physics:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={physics} onChange={(e) => setPhysics(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.physics && <p className="text-red-400 font-black">{formErrors.physics}</p>}
              </div>
            </div>
          )}

          {faculty === '1' && board === '1' && (
            <div className="flex justify-center mb-8" id='sub'>
              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Chemistry:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={chemistry} onChange={(e) => setChemistry(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.chemistry && <p className="text-red-400 font-black">{formErrors.chemistry}</p>}
              </div>

              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Computer:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={computer} onChange={(e) => setComputer(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.subjects && <p className="text-red-400 font-black">{formErrors.subjects}</p>}
              </div>

              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Biology:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={biology} onChange={(e) => setBiology(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.subjects && <p className="text-red-400 font-black">{formErrors.subjects}</p>}
              </div>
            </div>
          )}

                        
                        
          {/* ------- TECHNICAL SUBJECTS -------- */}


           {schoolingCompleted==='Yes' && board === '1' &&  faculty === '2' && (
            <div className="flex justify-center" id='sub'>
              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Physics:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={physics} onChange={(e) => setPhysics(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.physics && <p className="text-red-400 font-black">{formErrors.physics}</p>}
              </div>

              <div className="p-3 flex flex-col">
                <label htmlFor="grade-12">Mathematics:</label>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={maths} onChange={(e) => setMath(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A+</option>
                  <option value="2">A</option>
                  <option value="3">B+</option>
                  <option value="4">B</option>
                  <option value="5">C+</option>
                  <option value="6">C</option>
                  <option value="7">D</option>
                  <option value="8">NG</option>
                </select>
                {formErrors.maths && <p className="text-red-400 font-black">{formErrors.maths}</p>}
              </div>
         
              <div className="pt-4 pb-4">
                <p>Have you passed in the rest of the subjects?</p>
                <div className="flex justify-center gap-14 ">
                  <div className='w-4 '>
                    <input
                      type="radio"
                      name="technical"
                      required
                      value="Yes"
                      checked={technicalPass === "Yes"}
                      onChange={() => setTechnicalPass("Yes")}
                    />
                    Yes
                  </div>
                  <div className='w-4'>
                    <input
                      type="radio"
                      name="technical"
                      required
                      value="No"
                      checked={technicalPass === "No"}
                      onChange={() => setTechnicalPass("No")}
                    />
                    No

                  </div>
                </div>
                {formErrors.technicalPass && <p className=" text-red-400 font-black text-sm flex justify-center">{formErrors.technicalPass}</p>}

              </div>

            </div>
          
          )}

          

                 {/* --------------- CTEVT SECTION  -------------- */}

          { schoolingCompleted==='Yes' && board === '2' && (
            <div>
              <div className="pt-4 pb-4">
                <p>Have you chosen Physics and Mathematics for your course?</p>
                <div className="flex justify-center gap-14 ">
                  <div className='w-4 '>
                    <input
                      type="radio"
                      name="physicschems"
                      required
                      value="Yes"
                      checked={takenPhysics === "Yes"}
                      onChange={() => setTakenPhysics("Yes")}
                    />
                    Yes
                  </div>
                  <div className='w-4'>
                    <input
                      type="radio"
                      name="physicschems"
                      required
                      value="No"
                      checked={takenPhysics === "No"}
                      onChange={() => setTakenPhysics("No")}
                    />
                    No

                  </div>
                </div>
                {formErrors.takenPhysics && <p className=" text-red-400 font-black text-sm flex justify-center">{formErrors.takenPhysics}</p>}
              </div>

            { takenPhysics==="Yes" && (
              <div className="pt-4 pb-4">
                <p>Have you passed in the rest of the subjects?</p>
                <div className="flex justify-center gap-14 ">
                  <div className='w-4 '>
                    <input
                      type="radio"
                      name="ctevt"
                      required
                      value="Yes"
                      checked={ctevtCompleted === "Yes"}
                      onChange={() => setCtevtCompleted("Yes")}
                    />
                    Yes
                  </div>
                  <div className='w-4'>
                    <input
                      type="radio"
                      name="ctevt"
                      required
                      value="No"
                      checked={ctevtCompleted === "No"}
                      onChange={() => setCtevtCompleted("No")}
                    />
                    No

                    
                  </div>
                </div>
                {formErrors.ctevtCompleted && <p className=" text-red-400 font-black text-sm flex justify-center">{formErrors.ctevtCompleted}</p>}
              </div>
              )}
            
            </div>

            
          )}


           {/* ----------- A LEVEL SECTION ------------- */}

          { schoolingCompleted==='Yes' && board === '3' && (
            <div>
              <div className="pt-4 pb-4">
                <p>Have you chosen Physics and Mathematics for your course?</p>
                <div className="flex justify-center gap-14 ">
                  <div className='w-4 '>
                    <input
                      type="radio"
                      name="ctevt"
                      required
                      value="Yes"
                      checked={AlevelCompleted === "Yes"}
                      onChange={() => setAlevelCompleted("Yes")}
                    />
                    Yes
                  </div>
                  <div className='w-4'>
                    <input
                      type="radio"
                      name="ctevt"
                      required
                      value="No"
                      checked={AlevelCompleted === "No"}
                      onChange={() => setAlevelCompleted("No")}
                    />
                    No

                   
                  </div>
                </div>
                {formErrors.AlevelCompleted && <p className=" text-red-400 font-black text-sm flex justify-center">{formErrors.AlevelCompleted}</p>}
              </div>


            {AlevelCompleted === 'Yes' && (
              <div className=''>
                <p>Your Grade:</p>
                <select className='rounded border-2 border-slate-300 text-gray-500' id='grade' value={gradeAlevel} onChange={(e) => setGradeAlevel(e.target.value)}>
                  <option value="">Obtained Grade</option>
                  <option value="1">A*</option>
                  <option value="2">A</option>
                  <option value="3">B</option>
                  <option value="4">C</option>
                  <option value="5">D</option>
                  <option value="6">E</option>
                </select>
                {formErrors.gradeAlevel && <p className=" text-red-400 font-black text-sm flex justify-center">{formErrors.gradeAlevel}</p>}
              </div>
              )}
            </div>
            
          )}


              {/* ---------- BUTTON ----------- */}
          <button
            type="button"
            className="py-2 mt-4 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-xl hover:bg-yellow-400 "
            onClick={handleCheckEligibility}
          >
            Check Eligibility
          </button>
        </form>

          {/* ---------- POPUP ----------- */}

        {showPopup && (
          <div className="text-center text-xl p-4">
           {eligible ? (
              <p>Congratulations! You are eligible to study BSc.CSIT.</p>
            ) : (
              <p>Sorry! You are unable to study BSc.CSIT.</p>
            )} 
 
          </div>
        )}
      </div>
    </div>
  );
};

export default Eligible;
