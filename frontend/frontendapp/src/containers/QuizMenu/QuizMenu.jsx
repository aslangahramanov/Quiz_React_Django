import React from 'react'
import './QuizMenu.scss'
import useApi from '../../hooks/useApi'

function QuizMenu(props) {


    const {quizes, loadQuizes} = useApi()

    React.useEffect(() => {
        loadQuizes()
        }, [loadQuizes])

  return (
    <div className='QuizList'>
        <div className="Container">
            {
                quizes.map((quiz, index) => {
                    return (
                        <div key={quiz.id} className="QuizItem">
                        <img src="https://m.media-amazon.com/images/I/91bVvVnBxVL._AC_UF1000,1000_QL80_.jpg" alt="" />
                        <div className='Overlay'>
                            <div className='Title'><span>{quiz.title}</span></div>
                            <div className='GetQuiz' onClick={() => {props.onSelectQuiz(quiz.id)}}><button>Start Quiz</button></div>
                        </div>
                    </div>
                    )

                })
            }
        </div>
    </div>
  )
}

export default QuizMenu