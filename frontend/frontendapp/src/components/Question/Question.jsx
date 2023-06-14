import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import ClassNames from 'classnames';


function Question(props) {

  const SelectButtonRef = React.useRef(null)


  React.useEffect(() => {
    if('selected' in props.question.options[0]){
      SelectButtonRef.current.style.pointerEvents = "none";
    }
    else{
      SelectButtonRef.current.style.pointerEvents = "auto";
    }
  }, [props.question.options])



    return (
      <div className='QuizStart w-full h-[597px] relative'>
        <div className="Background w-full h-full">
          <img src="https://images5.alphacoders.com/422/422068.jpg" className='w-full h-full object-cover brightness-50' alt="" />
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
            <div className='Question bg-black/60 border border-white rounded-[30px] min-h-[140px] m-auto py-10 px-14'>
              <span className='text-white text-[17px]'>{props.question.title}</span>
            </div>
            <div ref={SelectButtonRef} className="Answers w-full flex flex-wrap justify-around items-center mt-[20px]">
                {props.question.options.map((option, index) => {
                  
                    const optionLetter = String.fromCharCode(65+index)
                    return (
                        <div key={option.id} onClick={() => {props.onSelectOption(props.question.id, option.id)}} className={ClassNames('Answer w-[47%] border border-white m-[10px] rounded-[20px] p-[15px] bg-black/60 cursor-pointer', {'bg-red/60': option.selected === true && option.correct === false}, {'bg-green/60': option.selected === true && option.correct === true || option.selected === false && option.correct === true})}><strong className='text-white text-[15px] mr-[15px]'>{optionLetter})</strong><span className='text-white text-[16px]'>{option.answer}</span></div>
                    )
                })}
            </div>
          </div>
          <div className="QuizNavigation w-full flex justify-around items-center text-center mt-[20px]">
            <div className="PrevQuestion p-[10px] h-[100px]" onClick={props.onPrevHandler}>
            <svg style={props.index !== 0 ? null : { visibility: 'hidden' }} className='Prev rotate-[270deg] text-white/50 hover:text-white w-[80px] h-full'><NavigationIcon className='cursor-pointer'></NavigationIcon></svg>
            </div>
            <div className="Timer">
              <div className='TimeCircle border border-white rounded-[50%] bg-white  w-[100px] h-[100px] flex justify-center items-center'>
                <strong className='text-black text-[40px]'>
                  {props.quizTime > 10 ? props.quizTime : "0" + props.quizTime}
                </strong>
              </div>
            </div>
            {
            (props.index + 1) !== props.questionLength
            ?
            <div className="NextQuestion p-[10px] h-[100px]" onClick={props.onNextHandler}>
              <svg className='Next rotate-90 text-white/50 hover:text-white w-[80px] h-full'><NavigationIcon className='cursor-pointer' ></NavigationIcon></svg>
            </div>
            :
            <div className='SubmitQuiz bg-white/50 rounded-full w-[100px] h-[60px] flex justify-center items-center cursor-pointer duration-100 hover:bg-white' onClick={props.onSubmitQuiz}><span className='text-black text-[18px] font-poppins font-semibold'>Finish</span></div>
            }
          </div>
        </div>
      </div>
    )
  }

export default Question