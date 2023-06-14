import React from 'react'
import QuizMenu from '../../containers/QuizMenu/QuizMenu'
import Header from '../../components/Header/Header'
import Results from '../../containers/Results/Results'
import QuizStart from '../../containers/QuizStart/QuizStart'
import EditMenu from '../../containers/EditQuiz/EditMenu/EditMenu'
import EditQuestion from '../../containers/EditQuiz/EditQuestion/EditQuestion'

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
        if(mainPage === 'quizmenu'){
          setMainPage('startquiz')
        }
        else if(mainPage === 'editmenu'){
          setMainPage('editquestion')
        }
    },[mainPage])
    




  const MainPageJSX = React.useMemo(() => {
    switch(mainPage){
      case 'quizmenu':
        return <QuizMenu onSelectQuiz={selectQuizHandler}></QuizMenu>
      case 'startquiz':
        return <QuizStart selectedQuizId={selectedQuizId} fullName={props.fullName} changeMainPage={setMainPage}></QuizStart>
      case 'editmenu':
        return <EditMenu onSelectQuiz={selectQuizHandler} selectedQuizId={selectedQuizId}></EditMenu>
      case 'editquestion':
        return <EditQuestion></EditQuestion>
      case 'results':
        return <Results></Results>
      default:
        return 
    }
  }, [mainPage, selectedQuizId, props.fullName, selectQuizHandler])

  return (
    <div>
      <Header mainPage={mainPage} fullName={props.fullName} setFullName={props.setFullName} setEmail={props.setEmail} setMainPage={setMainPage} setPage={props.setPage}></Header>
      {MainPageJSX}
    </div>
  )
}

export default Main