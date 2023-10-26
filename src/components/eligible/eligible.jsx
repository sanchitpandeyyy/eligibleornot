import React, { useState } from 'react';
import './eligible.css';
import Schooling from '../../form/Schooling';
import Board from '../../form/Board';
import Faculty from '../../form/Faculty';
import ReCAPTCHA from 'react-google-recaptcha';
import Input from '../../form/Input';
import NavBar from '../Navbar/NavBar';


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
  const [recapcha, setRecapcha] = useState(false);

  function onChange(value) {
    console.log("Captcha value:", value);
    setRecapcha(true)
  }



  // --------FORM VALIDATION STARTED -------------

  const validateForm = () => {
    const errors = {};

    if (!name.trim()) {
      errors.name = 'Name is required';
    }



    if (schoolingCompleted !== 'Yes') {
      errors.schoolingCompleted = 'You must have completed +2/equivalent(CTEVT/A-Level/etc)';
    }

    if (schoolingCompleted === 'Yes' && !board) {
      errors.board = 'Please select your Examination board';
    }

    if (board === '2' && takenPhysics === "Yes" && !ctevtCompleted) {
      errors.ctevtCompleted = 'Please select the above option';
    }

    if (board === '3' && AlevelCompleted !== 'Yes') {
      errors.AlevelCompleted = 'You must have chosen Physics and Mathematics to be eligible for BSc.CSIT';
    }

    if (board === '2' && takenPhysics !== 'Yes') {
      errors.takenPhysics = 'You must have chosen Physics and Mathematics to be eligible for BSc.CSIT';
    }

    if (board === '3' && AlevelCompleted === 'Yes' && !gradeAlevel) {
      errors.gradeAlevel = 'Please select Your Grade';
    }

    if (board === '1' && !faculty) {
      errors.faculty = 'Please select your +2 faculty';
    }

    if (board === '1' && faculty === '2' && !technicalPass) {
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

    const validAlevelgrades = ['1', '2', '3', '4', '5'];

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
            technicalPass === 'Yes' &&
            faculty === '2') {
            setEligible(true);
          }
          else {
            setEligible(false);
          }

        }

        // -----------CTEVT criteria--------
        else if (board === '2') {

          if (takenPhysics === 'Yes' && ctevtCompleted === 'Yes') {
            setEligible(true);
          }
          else {
            setEligible(false);
          }
        }

        // -----------A LEVEL criteria-------- 
        else if (board === '3') {
          // A Level
          if (validAlevelgrades.includes(gradeAlevel) && AlevelCompleted === 'Yes') {
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
     <div className='dark:bg-blue-900'>


      <nav className='w-full'>
           <NavBar/>
           </nav>

           <div id='wholediv' className='text-gray-900 p-20 m-auto'></div>


      {/* ------- HEADER -------- */}
      <header>
      <div id='toptext' className="text-blue-950 text-center text-5xl font-black">Are You Eligible to Study BSc.CSIT?</div>
      <div id='sectext' className="text-center text-2xl pt-3 pb-3 font-black ">Let's Check!</div>
      </header>



      <div className="mx-8 ">

        <form id='formclear' action="" className='w-full font-black p-10 pt-5 rounded-lg shadow-xl bg-gradient-to-br from-blue-200 to-cyan-200 dark:from-blue-950 dark:to-blue-950 dark:text-gray-50'>

          <div class="grid gap-6 mb-6 md:grid-cols-2">

          
          {/* ------- NAME -------- */}
          <Input 
          lable='Full Name' 
          placeholder='Your Name' 
          value={name} 
          Name='name' 
          setElement={setName} 
          formErrors={formErrors} />


          {/* ------- EMAIL -------- */}
          <Input 
          lable='Email' 
          placeholder='You Email Address' 
          value={email} 
          Name='email' 
          setElement={setEmail} 
          formErrors={formErrors} />

          </div>




          {/* ------- 12 YEARS OF SCHOOLING -------- */}

          <div id='schoolingwhole' className="flex justify-between items-center mb-4">

            <Schooling schoolingCompleted={schoolingCompleted} setSchoolingCompleted={setSchoolingCompleted} formErrors={formErrors} />

            {/* ------- EXAMINATION BOARD -------- */}
            {schoolingCompleted === 'Yes' && (

              <Board board={board} setBoard={setBoard} formErrors={formErrors} />
            )}
          </div>



          {/* ------- FACULTY -------- */}

          {schoolingCompleted === 'Yes' && board === '1' && (
            <Faculty faculty={faculty} setFaculty={setFaculty} formErrors={formErrors} />
          )}



          {/* ------- SCIENCE SUBJECTS -------- */}


          {schoolingCompleted === 'Yes' && board === '1' && faculty === '1' && (
            
            <div className="flex justify-around items-center mt-4" id='sub'>
         
              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">English:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={english} onChange={(e) => setEnglish(e.target.value)}>
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
                {formErrors.english && <p className=" text-center text-black font-black">{formErrors.english}</p>}
              </div>

              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">Nepali:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={nepali} onChange={(e) => setNepali(e.target.value)}>
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
                {formErrors.nepali && <p className=" text-center text-black font-black">{formErrors.nepali}</p>}
              </div>

              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">Mathematics:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={maths} onChange={(e) => setMath(e.target.value)}>
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
                {formErrors.maths && <p className=" text-center text-black font-black">{formErrors.maths}</p>}
              </div>

              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">Physics:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={physics} onChange={(e) => setPhysics(e.target.value)}>
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
                {formErrors.physics && <p className=" text-center text-black font-black">{formErrors.physics}</p>}
              </div>
            </div>
          )}

          {schoolingCompleted === 'Yes' && faculty === '1' && board === '1' && (
            <div className="flex justify-around mb-8" id='sub'>
              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">Chemistry:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={chemistry} onChange={(e) => setChemistry(e.target.value)}>
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
                {formErrors.chemistry && <p className=" text-center text-black font-black">{formErrors.chemistry}</p>}
              </div>

              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">Computer:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={computer} onChange={(e) => setComputer(e.target.value)}>
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
                {formErrors.subjects && <p className=" text-center text-black font-black">{formErrors.subjects}</p>}
              </div>

              <div className="pt-3 pb-3 flex flex-col">
                <label htmlFor="grade-12">Biology:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={biology} onChange={(e) => setBiology(e.target.value)}>
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
                {formErrors.subjects && <p className=" text-center text-black font-black">{formErrors.subjects}</p>}
              </div>
            </div>
          )}



          {/* ------- TECHNICAL SUBJECTS -------- */}


          {schoolingCompleted === 'Yes' && board === '1' && faculty === '2' && (
            <div className="flex justify-around" id='sub'>
              <div className="pt-3 pb-3 flex flex-col items-center">
                <label htmlFor="grade-12">Physics:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={physics} onChange={(e) => setPhysics(e.target.value)}>
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
                {formErrors.physics && <p className=" text-center text-black font-black">{formErrors.physics}</p>}
              </div>

              <div className="pt-3 pb-3 flex flex-col items-center">
                <label htmlFor="grade-12">Mathematics:</label>
                <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={maths} onChange={(e) => setMath(e.target.value)}>
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
                {formErrors.maths && <p className=" text-center text-black font-black">{formErrors.maths}</p>}
              </div>

              <div className="pt-4 pb-4">
                <p>Have you passed in the rest of the subjects?</p>

         <ul class=" w-full  text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:flex">
           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
            type="radio"
            name=""technical
            required
            value="Yes"
            checked={technicalPass === "Yes"}
            onChange={() => setTechnicalPass("Yes")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">Yes</label>
           </div>
           </li>
           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
            type="radio"
            name="technical"
            required
            value="No"
            checked={technicalPass === "No"}
            onChange={() => setTechnicalPass("No")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">No</label>
      
                </div>
                 </li>
                 </ul>
                {formErrors.technicalPass && <p className=" text-center  text-black font-black text-sm flex justify-center">{formErrors.technicalPass}</p>}

              </div>

            </div>

          )}



          {/* --------------- CTEVT SECTION  -------------- */}

          {schoolingCompleted === 'Yes' && board === '2' && (
            <div id='ctevt' className='flex justify-between items-center'>
              <div className="pt-4 pb-4">
                <p>Have you chosen Physics and Mathematics for your course?</p>
                   

                <ul class=" w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:flex">
           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
             type="radio"
             name="physicschems"
             required
             value="Yes"
             checked={takenPhysics === "Yes"}
             onChange={() => setTakenPhysics("Yes")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">Yes</label>
           </div>
           </li>

           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
             type="radio"
             name="physicschems"
             required
             value="No"
             checked={takenPhysics === "No"}
             onChange={() => setTakenPhysics("No")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">No</label>
           </div>
           </li>
        </ul>
      {formErrors.takenPhysics && <p className=" text-center  text-black font-black text-sm flex justify-center">{formErrors.takenPhysics}</p>}
    </div>
               
               
       {takenPhysics === "Yes" && (
                <div className="pt-4 pb-4">
                  <p>Have you passed in the rest of the subjects?</p>
 
           <ul class=" w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:flex">
           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
             type="radio"
             name="ctevt"
            required
            value="Yes"
           checked={ctevtCompleted === "Yes"}
           onChange={() => setCtevtCompleted("Yes")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">Yes</label>
           </div>
           </li>

           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
             type="radio"
             name="ctevt"
            required
            value="No"
           checked={ctevtCompleted === "No"}
           onChange={() => setCtevtCompleted("No")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">No</label>
           </div>
           </li>

        </ul>

     {formErrors.ctevtCompleted && <p className=" text-center  text-black font-black text-sm flex justify-center">{formErrors.ctevtCompleted}</p>}
          </div>
         )}
       </div>


          )}


          {/* ----------- A LEVEL SECTION ------------- */}

          {schoolingCompleted === 'Yes' && board === '3' && (
            <div id='alevel' className='flex justify-between items-center'>
              <div className="pt-4 pb-4">
                <p>Have you chosen Physics and Mathematics for your course?</p>
                
                <ul class=" w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg md:flex">
           
           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
              type="radio"
              name="ctevt"
              required
              value="Yes"
              checked={AlevelCompleted === "Yes"}
             onChange={() => setAlevelCompleted("Yes")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">Yes</label>
           </div>
           </li>

           <li class="w-full border-b border-gray-200 md:border-b-0 md:border-r dark:border-gray-600">
            <div class="flex items-center pl-3">
            <input
              type="radio"
              name="ctevt"
              required
              value="No"
              checked={AlevelCompleted === "No"}
             onChange={() => setAlevelCompleted("No")}
            class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 "
            />

            <label 
            class="w-full py-3 ml-2 text-sm font-semibold text-gray-900">No</label>
           </div>
           </li>

           </ul>
         {formErrors.AlevelCompleted && <p className=" text-center  text-black font-black text-sm flex justify-center">{formErrors.AlevelCompleted}</p>}
      </div>

                


              {AlevelCompleted === 'Yes' && (
                <div className='pb-4'>
                  <p>Your Overall Grade:</p>
                  <select className='text-gray-900 bg-gray-50 font-semibold rounded-lg text-sm p-2  w-fit' id='grade' value={gradeAlevel} onChange={(e) => setGradeAlevel(e.target.value)}>
                    <option value="">Obtained Grade</option>
                    <option value="1">A*</option>
                    <option value="2">A</option>
                    <option value="3">B</option>
                    <option value="4">C</option>
                    <option value="5">D</option>
                    <option value="6">E</option>
                  </select>
                  {formErrors.gradeAlevel && <p className=" text-center  text-black font-black text-sm flex justify-center">{formErrors.gradeAlevel}</p>}
                </div>
              )}


            </div>

          )}


          <ReCAPTCHA className='flex justify-center items-center mt-4'
            sitekey="6LeVBMgoAAAAAP4c26e6ujQxBzbAmTFxSPxYDul3"
            onChange={onChange} />


          {/* ---------- BUTTON ----------- */}
           <div className='flex justify-center'>
          <button
            type="button" disabled={!recapcha}
            className=" py-2 mt-4 px-4 bg-orange-500 text-white font-semibold rounded-lg shadow-xl hover:bg-yellow-400 "
            onClick={handleCheckEligibility}
          >
            Check Eligibility
          </button>
          </div>
        </form>

        {/* ---------- POPUP ----------- */}

        {showPopup && (
          <div className="text-center text-gray-700 dark:text-white font-black text-xl p-4">
            {eligible ? (
              <p>Congratulations! You are eligible to study BSc.CSIT according to criteria provided by TU IOST.</p>
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
