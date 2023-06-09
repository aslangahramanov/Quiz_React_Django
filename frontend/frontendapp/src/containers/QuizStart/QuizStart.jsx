import React from 'react'
import { getQuestions } from '../../api/quizApi';
import Question from '../../components/Question/Question';
import LoadingPage from '../../components/LoadingPage/LoadingPage';
import { red } from '@mui/material/colors';


const initialState = []

const reducer = (state, action) => {
  switch(action.type){
    case 'LOAD_QUESTIONS':
      return action.questions
    case 'SELECT_OPTION':
      const NewState = [...state]
      const NewQuestion = {...NewState.find(question => question.id === action.questionId)}
      const QuestionIndex = NewState.findIndex(question => question.id === action.questionId)
      const NewOptions = NewQuestion.options.map(option => ({...option, selected: false}))
      const OptionIndex = NewOptions.findIndex(option => option.id === action.optionId)
      const NewOption = {...NewOptions[OptionIndex], selected: true}
      NewOptions[OptionIndex] = NewOption
      NewQuestion.options = NewOptions
      NewState[QuestionIndex] = NewQuestion
      return NewState

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
  


  const SelectOption = React.useCallback((question_id, option_id) => {
    dispatch({type: 'SELECT_OPTION', questionId: question_id, optionId: option_id})
  }, [])




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
          onSelectOption={SelectOption}
        />
      );
    } else {
      return (
        <div>
          <LoadingPage></LoadingPage>
        </div>
      );
    }
  }, [questions, index, questionLength, quizTitle, questionTime, props.fullName, NextHandler, PrevHandler, SelectOption]);



  return (
    <div>

      {pageQuestion}

    </div>
  
  );
     
}

export default QuizStart