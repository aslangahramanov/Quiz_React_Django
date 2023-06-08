import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';


function Question(props) {


    return (
      <div className='QuizStart w-full h-[628px] relative'>
        <div className="Background w-full h-full">
          <img src="https://wallpaperaccess.com/full/651709.jpg" className='w-full h-full object-cover' alt="" />
        </div>
        <div className="Container absolute w-4/5 top-0 left-1/2 translate-x-[-50%] m-auto">
          <div className="QuizInfo w-full flex justify-between items-center my-10">
            <div className="QuizName w-[30%] rounded-[15px] text-center mx-[60px] bg-white py-0.5">
              <strong>{props.quizTitle}</strong>
            </div>
            <div className="FullName w-[40%] rounded-[15px] text-center mx-[60px] bg-white py-0.5">
              <strong>{props.fullName}</strong>
            </div>
            <div className="QuestionNumber w-[30%] rounded-[15px] text-center mx-[60px] bg-white py-0.5">
              <strong>{props.index + 1} / {props.questionLength}</strong>
            </div>
          </div>
          <div className="QuizMain w-4/5 text-center mt-20 mx-auto">
            <div className='Question bg-black/60 border border-white rounded-[30px] min-h-[120px] m-auto py-10 px-14'>
              <span className='text-white text-[17px]'>{props.question.title}</span>
            </div>
            <div className="Answers w-full flex flex-wrap justify-around items-center mt-[20px]">
                {props.question.options.map((option, index) => {
                    const optionLetter = String.fromCharCode(65+index)
                    return (
                        <div key={option.id} className='Answer w-[47%] border border-white m-[10px] rounded-[20px] p-[15px] bg-black/60 cursor-pointer'><strong className='text-white text-[15px] mr-[15px]'>{optionLetter})</strong><span className='text-white text-[16px]'>{option.answer}</span></div>
                    )
                })}
            </div>
          </div>
          <div className="QuizNavigation w-full flex justify-around items-center text-center mt-[20px]">
            <div className="PrevQuestion p-[10px]" style={props.index !== 0 ? null : { visibility: 'hidden' }} onClick={props.onPrevHandler}>
            <svg className='Next rotate-[270deg] text-white/50 duration-200 hover:text-white w-[80px]'><NavigationIcon className='cursor-pointer'></NavigationIcon></svg>
            </div>
            <div className="Timer">
              <div className='TimeCircle w-full border border-white rounded-[50%] py-[20px] px-[30px] bg-white'><strong className='text-black text-[40px]'>{props.questionTime > 10 ? props.questionTime : "0" + props.questionTime}</strong></div>
            </div>
            <div className="NextQuestion p-[10px]" style={props.index + 1 < props.questionLength  ? null : { visibility: 'hidden' }} onClick={props.onNextHandler}>
              <svg className='Next rotate-90 text-white/50 duration-200 hover:text-white w-[80px]'><NavigationIcon className='cursor-pointer' ></NavigationIcon></svg>
            </div>
  
          </div>
        </div>
      </div>
    )
  }

export default Question