import iaxios from './iaxios'



export function getQuestions(quizId){
    return iaxios.get(`quiz/${quizId}`)
}


export function postQuiz(questionTitle, quizTime){
    if(questionTitle && quizTime){
        return iaxios.post('quiz/', {'title': questionTitle, 'question_time': quizTime})
    }

    return
}