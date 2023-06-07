import React from 'react'
import './Header.scss'

import LogoutIcon from '@mui/icons-material/Logout';

function Header(props) {

    let NavQuiz = 'NavItem'
    let NavEdit = 'NavItem'
    let NavResults = 'NavItem'


    if (props.mainPage === 'quiz'){
        NavQuiz = 'activeItem'
    }
    else if(props.mainPage === 'edit'){
        NavEdit = 'activeItem'
    }
    else if(props.mainPage === 'results'){
        NavResults = 'activeItem'
    }

    console.log(props.fullName);


    const LogoutHandler = React.useCallback(() => {
        props.setFullName('')
        props.setEmail('')
        props.setPage('entry')
    },[])


  return (
    <div className='Header'>
        <div className="Container">
            <div className="Logo">
                <img src="https://spinquiz.com/wp-content/uploads/2021/12/Sping-Quiz-Logo-Transparent.png" alt="" />
            </div>
            <div className="Navigation">
                <ul className='NavBar'>
                    <li onClick={() => {props.setMainPage('quizmenu')}} className={NavQuiz}>Quiz</li>
                    <li onClick={() => {props.setMainPage('edit')}} className={NavEdit}>Edit</li>
                    <li onClick={() => {props.setMainPage('results')}} className={NavResults}>Results</li>
                </ul>
            </div>
            {props.fullName
            ?
            <div className='Profile'>
            <div className='Username'><strong>{props.fullName}</strong></div>
            <LogoutIcon onClick={LogoutHandler} className='LogoutIcon'></LogoutIcon>
            </div>
            :
            <div onClick={() => {props.setPage('entry')}} className="Login">
                <span>Entry</span>
            </div>}

        </div>
    </div>
  )
}

export default Header