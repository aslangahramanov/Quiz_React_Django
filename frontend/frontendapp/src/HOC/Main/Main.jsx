import React from 'react'
import QuizMenu from '../../containers/QuizMenu/QuizMenu'
import Header from '../../components/Header/Header'
import EditQuiz from '../../containers/EditQuiz/EditQuiz'
import Results from '../../containers/Results/Results'
import QuizStart from '../../containers/QuizStart/QuizStart'

function Main(props) {


  // Main
  
  const [mainPage, setMainPage] = React.useState(JSON.parse(localStorage.getItem('currentMainPage')) || 'quizmenu')

  React.useEffect(() => {
      localStorage.setItem('currentMainPage', JSON.stringify(mainPage))
    }, [mainPage])

    

  // Quiz & Questions

  
    const [selectedQuizId, setSelectedQuizId] = React.useState(null)


    const selectQuizHandler = React.useCallback((id) => {
        setSelectedQuizId(id)
        setMainPage('startquiz')
    },[])
    




  const MainPageJSX = React.useMemo(() => {
    switch(mainPage){
      case 'quizmenu':
        return <QuizMenu onSelectQuiz={selectQuizHandler}></QuizMenu>
      case 'startquiz':
        return <QuizStart selectedQuizId={selectedQuizId} fullName={props.fullName}></QuizStart>
      case 'edit':
        return <EditQuiz></EditQuiz>
      case 'results':
        return <Results></Results>
      default:
        return 
    }
  }, [mainPage])

  return (
    <div>
      <Header mainPage={mainPage} fullName={props.fullName} setFullName={props.setFullName} setEmail={props.setEmail} setMainPage={setMainPage} setPage={props.setPage}></Header>
      {MainPageJSX}
    </div>
  )
}

export default Main