import React from 'react'
import { getQuestions, postResults } from '../../api/quizApi';
import Question from '../../components/Question/Question';
import LoadingPage from '../../components/LoadingPage/LoadingPage';


const initialState = []


const loadQuestionsAction = (state, action) => {
  localStorage.setItem('questions', JSON.stringify(action.questions))
  return action.questions
}


const selectOptionAction = (state, action) => {
    const NewState = [...state]
    const NewQuestion = {...NewState.find(question => question.id === action.questionId)}
    const QuestionIndex = NewState.findIndex(question => question.id === action.questionId)
    const NewOptions = NewQuestion.options.map(option => ({...option, selected: false}))
    const OptionIndex = NewOptions.findIndex(option => option.id === action.optionId)
    const NewOption = {...NewOptions[OptionIndex], selected: true}
    NewOptions[OptionIndex] = NewOption
    NewQuestion.options = NewOptions
    NewState[QuestionIndex] = NewQuestion
    localStorage.setItem('questions', JSON.stringify(NewState))
    return NewState
}



const reducer = (state, action) => {
  switch(action.type){
    case 'LOAD_QUESTIONS':
      return loadQuestionsAction(state, action)
    case 'SELECT_OPTION':
      return selectOptionAction(state, action)
    default:
      return state
  }
}


function QuizStart(props) {


  const [questions, dispatch] = React.useReducer(reducer, initialState)
  const [quizTitle, setQuizTitle] = React.useState('')
  const [quizTime, setQuizTime] = React.useState(0)
  const [questionLength, setQuestionLength] = React.useState(0)
  const [index, setIndex] = React.useState(0)

  React.useEffect(() => {
    if(localStorage.getItem('quizId')){
      const quizTitle = localStorage.getItem('quizTitle')
      const questions = JSON.parse(localStorage.getItem('questions'))
      const quizTime = localStorage.getItem('quizTime')
      const questionLength = localStorage.getItem('questionLength')
      setQuizTitle(quizTitle)
      setQuizTime(quizTime)
      setQuestionLength(+questionLength)
      dispatch({type: 'LOAD_QUESTIONS', questions: questions})
    }
    else if(props.selectedQuizId){
      getQuestions(props.selectedQuizId).then(response =>{
      localStorage.setItem('quizId', props.selectedQuizId)
      localStorage.setItem('quizTitle', response.data.title)
      localStorage.setItem('quizTime', response.data.question_time)
      localStorage.setItem('questionLength', response.data.questions.length)
      dispatch({type: 'LOAD_QUESTIONS', questions: response.data.questions})
      setQuizTitle(response.data.title)
      setQuizTime(response.data.question_time)
      setQuestionLength(response.data.questions.length)
      })
    }
  },[props.selectedQuizId])


  React.useEffect(() => {
    if (quizTime > 0) {
      const interval = setInterval(() => {
        setQuizTime(prevTime => prevTime - 1)
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [quizTime]);


  
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


  const submitQuiz = React.useCallback(() => {
    let correctCount = 0
    let wrongCount = 0
    for (let question of questions){
      for (let option of question.options){
        if (option.selected === true && option.correct === true){
          correctCount++
        }
        else if (option.selected === true && !option.correct){
          wrongCount++
        }
      }
    }
    postResults(props.fullName, quizTitle, questionLength, correctCount, wrongCount)
    localStorage.removeItem('quizId')
    localStorage.removeItem('quizTitle')
    localStorage.removeItem('quizTime')
    localStorage.removeItem('questionLength')
    props.changeMainPage('results')
  },[questions, props, questionLength, quizTitle])



  const pageQuestion = React.useMemo(() => {
    if (questions && questions.length > 0) {
      return (
        <Question
          index={index}
          questionLength={questionLength}
          question={questions[index]}
          quizTitle={quizTitle}
          quizTime={quizTime}
          fullName={props.fullName}
          onPrevHandler={PrevHandler}
          onNextHandler={NextHandler}
          onSelectOption={SelectOption}
          onSubmitQuiz={submitQuiz}
        />
      );
    } else {
      return (
        <div>
          <LoadingPage></LoadingPage>
        </div>
      );
    }
  }, [questions, index, questionLength, quizTitle, quizTime, props.fullName, NextHandler, PrevHandler, SelectOption, submitQuiz]);



  return (
    <div>

      {pageQuestion}

    </div>
  
  );
     
}

export default QuizStart