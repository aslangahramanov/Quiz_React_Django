import React from 'react'
import axios from 'axios'

const baseUrl = 'http://127.0.0.1:8000/api/'

function useApi() {
    const [quizes, setQuizes] = React.useState([])

    const loadQuizes = React.useCallback(() => {
        axios.get(baseUrl + `quiz/`).then(response => {
            setQuizes(response.data)
        })
    }, [])



    return {
        loadQuizes,
        quizes
    }
}

export default useApi