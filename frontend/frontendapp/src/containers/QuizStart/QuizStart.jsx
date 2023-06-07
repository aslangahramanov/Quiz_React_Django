import React from 'react'
import './QuizStart.scss'
import { getQuestions } from '../../api/quizApi';
import Question from '../../components/Question/Question';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const initialState = []

const reducer = (state, action) => {
  switch(action.type){
    case 'LOAD_QUESTIONS':
      return action.questions
    default:
      return state
  }
}

function QuizStart(props) {

  const [questions, dispatch] = React.useReducer(reducer, initialState)
  const [quizTitle, setQuizTitle] = React.useState('')
  const [questionTime, setQuestionTime] = React.useState(0)
  const [questionLength, setQuestionLength] = React.useState(0)

  React.useEffect(() => {
      if(props.selectedQuizId){
      getQuestions(props.selectedQuizId).then(response =>{

        dispatch({type: 'LOAD_QUESTIONS', questions: response.data.questions})
        setQuizTitle(response.data.title)
        setQuestionTime(response.data.question_time)
        setQuestionLength(response.data.questions.length)
      })
    }
  },[props.selectedQuizId])


 return (
  <div>  
       {
        questions.map((question, index) => {
          return (
              <div key={question.id}>
                  <Question index={index} questionLength={questionLength} question={question} quizTitle={quizTitle} questionTime={questionTime} fullName={props.fullName}></Question>
              </div>
          )
        })
      }
  </div>
  );
    
     
}

export default QuizStart