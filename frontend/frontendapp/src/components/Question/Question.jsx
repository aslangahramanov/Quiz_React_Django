import React from 'react'
import NavigationIcon from '@mui/icons-material/Navigation';
import './Question.scss'


function Question(props) {
  return (
    <div className='QuizStart'>
      <div className="Background">
        <img src="https://cutewallpaper.org/27/blue-stars-wallpaper-dark/1101613413.jpg" alt="" />
      </div>
      <div className="Container">
        <div className="QuizInfo">
          <div className="QuizName">
            <strong>{props.quizTitle}</strong>
          </div>
          <div className="FullName">
            <strong>{props.fullName}</strong>
          </div>
          <div className="QuestionNumber">
            <strong>{props.index + 1} / {props.questionLength}</strong>
          </div>
        </div>
        <div className="QuizMain">
          <div className='Question'>
            <span>{props.question.title}</span>
          </div>
          <div className="Answers">
            {props.question.options.map((option, index) => {
                const optionLetter = String.fromCharCode(65+index)
                return (
                    <div key={option.id} className='Answer'><strong>{optionLetter})</strong><span>{option.answer}</span></div>
                )
            })}
          </div>
        </div>
        <div className="QuizNavigation">
          <div className="PrevQuestion">
          <NavigationIcon className='Prev'></NavigationIcon>
          </div>
          <div className="Timer">
            <div className='TimeCircle'><strong>{props.questionTime > 10 ? props.questionTime : "0" + props.questionTime}</strong></div>
          </div>
          <div className="NextQuestion">
          <NavigationIcon className='Next'></NavigationIcon>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Question