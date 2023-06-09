import React from 'react'


function AddQuiz(props) {

    const titleRef = React.useRef('null')
    const timeRef = React.useRef('null')

    
   const AddFormHandler = React.useCallback(() => {
        props.setNewQuizTitle(titleRef.current.value)
        props.setNewQuizTime(timeRef.current.value * 60)
   }, [props])

  
    return (
    <>
      <div className='AddQuiz w-full h-full flex justify-center items-center'>
        <div onClick={() => {props.closeHandler()}} className="Overlay w-full h-full bg-black/50"></div>
            <div className="AddQuizForm py-16 w-[400px] h-[350px] bg-white rounded-[20px] absolute z-20">
        <div className="QuizTitle text-center">
            <input ref={titleRef} onChange={AddFormHandler} className='w-3/4 border border-black/40 text-center py-2 px-5 text-[18px] outline-none rounded' type="text" placeholder='Enter Quiz Title'/>
        </div>
        <div className="QuizImage text-center">
            <input className='w-3/4 border border-black/40 text-center py-2 px-5 mt-6 rounded' type="file" />
        </div>
        <div className="QuestionTime text-center">
            <span className='text-[16px] text-blue font-semibold mr-14'>Quiz Time : </span>
            <input ref={timeRef} onChange={AddFormHandler} className='w-[60px] border border-black/40 text-center mt-6 p-1 rounded' type="number" min={0} max={10}/>
        </div>
        <div className="SubmitButton text-center mt-8 cursor-pointer group" onClick={props.postQuiz}>
            <span className='border py-2 px-8 rounded bg-blue text-white text-[16px] font-semibold duration-100 group-hover:bg-red'>Add Quiz</span>
        </div>
            </div>
      </div>
       
   </>
    );
  }

export default AddQuiz