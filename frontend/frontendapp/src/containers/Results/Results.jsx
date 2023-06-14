import React from 'react'
import { getResults } from '../../api/quizApi'

function Results() {

  const [results, setResults] = React.useState([])


  React.useEffect(() => {
    getResults().then(response => {
      setResults(response.data)
    })
  }, [])


  return (
    <div className='ResultsPage w-full'>
      <div className="Container w-4/5 m-auto pt-16">
        <div className="InfoTab flex justify-center items-center">
          <div className='TabIndex border border-blue py-2 min-w-[4%] bg-blue text-white text-[14px] font-poppins font-semibold text-center'> No </div>
          <div className='TabUserInfo border border-blue py-2 min-w-[35%] bg-blue text-white text-[14px] font-poppins font-semibold text-center'>User</div>
          <div className='TabQuizName border border-blue py-2 min-w-[25%] bg-blue text-white text-[14px] font-poppins font-semibold text-center'>Quiz</div>
          <div className='TabQuestionsCount border border-blue py-2 min-w-[12%] bg-blue text-white text-[14px] font-poppins font-semibold text-center'>Count</div>
          <div className='TabCorrectCount border border-blue py-2 min-w-[12%] bg-blue text-white text-[14px] font-poppins font-semibold text-center'>Correct</div>
          <div className='TabWrongCount border border-blue py-2 min-w-[12%] bg-blue text-white text-[14px] font-poppins font-semibold text-center'>Wrong</div>
        </div>
        {
          results.map((result, index) => {
            return(
              <div key={result.id} className="InfoList flex justify-center items-center pt-2">
                <div className='Index py-2 min-w-[4%] bg-white border text-blue text-[14px] font-poppins font-semibold text-center'>{index + 1}</div>
                <div className='UserInfo py-2 min-w-[35%] bg-white border text-blue text-[14px] font-poppins font-semibold text-center'>{result.full_name}</div>
                <div className='QuizName py-2 min-w-[25%] bg-white border text-blue text-[14px] font-poppins font-semibold text-center'>{result.quiz_name}</div>
                <div className='QuestionCount py-2 min-w-[12%] bg-white border text-blue text-[14px] font-poppins font-semibold text-center'>{result.question_count}</div>
                <div className='CorrectCount py-2 min-w-[12%] bg-white border text-blue text-[14px] font-poppins font-semibold text-center'>{result.correct_answer}</div>
                <div className='WrongCount py-2 min-w-[12%] bg-white border text-blue text-[14px] font-poppins font-semibold text-center'>{result.wrong_answer}</div>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default Results