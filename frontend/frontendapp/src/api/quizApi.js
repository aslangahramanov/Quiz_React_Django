import iaxios from './iaxios'

export function getQuestions(quizId){
    return iaxios.get(`quiz/${quizId}`)
}