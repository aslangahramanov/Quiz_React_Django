import React from 'react'
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { deleteQuiz, getQuiz } from '../../../api/quizApi';

function EditMenu(props) {
  const [quizes, setQuizes] = React.useState([])

  React.useEffect(() => {
    getQuiz().then(response => {
      setQuizes(response.data)
    })
  }, [])

  const DeleteQuizHandler = React.useCallback((quizId) => {
    deleteQuiz(quizId)
    setQuizes(prevQuizes => prevQuizes.filter(quiz => quiz.id !== quizId))
  },[])

  return (
    <div className='EditMenu w-full h-full mt-12'>
      <div className="Container w-4/5 h-full m-auto">
        <div className="Quiz w-full h-full flex justify-between items-center flex-wrap px-4">
          {quizes.map((quiz, index) => {
            return (
              <div key={quiz.id} className='w-2/5 py-6 my-6 rounded flex justify-between items-center bg-blue relative px-12'>
                <span className='QuizTitle text-[18px] text-white font-semibold font-poppins tracking-[2px]'>{quiz.title}</span>
                <div 
                  className='EditQuizButton border-white rounded py-3 px-6 text-blue bg-white text-[16px] font-semibold font-poppins cursor-pointer duration-100 hover:bg-red hover:text-white'
                  onClick={() => {props.onSelectQuiz(quiz.id)}}>
                  Edit Quiz
                </div>
                <div
                  className='DeleteButton border border-blue absolute top-[-15%] left-[96%] w-[30px] h-[30px] rounded-full flex justify-center items-center bg-white cursor-pointer duration-100 hover:border-red'
                  onClick={() => { DeleteQuizHandler(quiz.id) }}>
                  <HighlightOffIcon sx={{ color: 'red' }} />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default EditMenu