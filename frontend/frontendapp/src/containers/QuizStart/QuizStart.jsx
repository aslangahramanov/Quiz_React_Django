import React from 'react'
import './QuizStart.scss'
import { getQuestions } from '../../api/quizApi';
import Question from '../../components/Question/Question';
import LoadingPage from '../../components/LoadingPage/LoadingPage';


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
  const [index, setIndex] = React.useState(0)

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


  React.useEffect(() => {
    if (questionTime > 0) {
      const interval = setInterval(() => {
        setQuestionTime(prevTime => prevTime - 1)
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [questionTime]);

console.log(questionTime);

  
  const PrevHandler = React.useCallback(() => {
    if(index > 0){
      setIndex(index - 1)
      
    }
  },[index])

  const NextHandler = React.useCallback(() => {
      if(questionLength - 1 > index){
        setIndex(index + 1)
      }
  },[index, questionLength])
  




  const pageQuestion = React.useMemo(() => {
    if (questions.length > 0) {
      return (
        <Question
          index={index}
          questionLength={questionLength}
          question={questions[index]}
          quizTitle={quizTitle}
          questionTime={questionTime}
          fullName={props.fullName}
          onPrevHandler={PrevHandler}
          onNextHandler={NextHandler}
        />
      );
    } else {
      return (
        <div>
          <LoadingPage></LoadingPage>
        </div>
      );
    }
  }, [questions, index, questionLength, quizTitle, questionTime, props.fullName, NextHandler, PrevHandler]);



  return (
    <div>

      {pageQuestion}

    </div>
  
  );
     
}

export default QuizStart