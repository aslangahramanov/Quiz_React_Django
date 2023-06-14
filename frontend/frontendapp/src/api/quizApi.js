import iaxios from './iaxios'




export function getQuiz(){
    return iaxios.get('quizes/')
}

export function getQuestions(quizId){
    return iaxios.get(`quizes/${quizId}`)
}


export function postQuiz(questionTitle, quizTime){
    if(questionTitle && quizTime){
        return iaxios.post('quizes/', {'title': questionTitle, 'question_time': quizTime})
        
    }

    return
}


export function deleteQuiz(quizId){
    if(quizId){
       return iaxios.delete(`quizes/${quizId}`)
    }
    return
}


export function getResults(){
    return iaxios.get('results/')
}

export function postResults(fullName, quizTitle, questionCount, correctCount, wrongCount){
    const newReports = {
        full_name : fullName,
        quiz_name : quizTitle,
        question_count : questionCount,
        correct_answer : correctCount,
        wrong_answer : wrongCount
    }
    return iaxios.post('results/', newReports)
}