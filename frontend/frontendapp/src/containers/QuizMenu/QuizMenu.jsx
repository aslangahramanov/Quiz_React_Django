import React from 'react'
import useApi from '../../hooks/useApi'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

function QuizMenu(props) {


    const {quizes, loadQuizes} = useApi()

    React.useEffect(() => {
        loadQuizes()
        }, [loadQuizes])

  return (
    <div className='QuizList w-full mt-[100px]'>
        <div className="Container w-4/5 m-auto flex justify-between items-center flex-wrap">
            {
            quizes.map((quiz, index) => {
                return (
                    <div key={quiz.id} className="QuizItem w-[28%] h-[100px] rounded-[10px] mb-[6rem] relative cursor-pointer bg-black/60">
                    <img className='w-full h-full rounded-[10px] object-cover brightness-50' src="https://sites.udel.edu/movingfictions/files/2019/05/Lead2-866x487-866x303.jpg" alt="" />
                    <div className='Title bg-white absolute left-1/2 top-[-33%] translate-x-[-50%] border-2 border-blue pt-[5px] pb[2px] px-[30px] rounded-t-2xl'><span className='text-blue font-bold text-[16px]'>{quiz.title}</span></div>
                    <div className="StartButton cursor-pointer absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] py-[10px] px-[15px] border-y-2 border-white/40 rounded-[15px] duration-100 hover:border-red" onClick={() => {props.onSelectQuiz(quiz.id)}}><span className='font-bold text-[18px] text-white duration-100 hover:text-red'>Start Quiz</span></div>
                </div>
                )
                })
            }

            <div className="AddItem w-[28%] h-[100px] rounded-[10px] mb-[6rem] relative cursor-pointer bg-black/40">
                <svg className="AddButton absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] rounded-[50%] w-3/5 h-3/5 cursor-pointer duration-100"><AddCircleOutlineIcon fontSize='large' className='text-blue hover:text-red'></AddCircleOutlineIcon></svg>
            </div>
        </div>
        
    </div>
  )
}

export default QuizMenu