import React from 'react'

import LogoutIcon from '@mui/icons-material/Logout';

function Header(props) {

    let NavQuiz = 'NavItem mx-[40px] border-y border-blue py-[10px] px-[25px] rounded-[5px] font-bold font-[16px] text-blue cursor-pointer duration-100 hover:border-y hover:border-red hover:text-red';
    let NavEdit = 'NavItem mx-[40px] border-y border-blue py-[10px] px-[25px] rounded-[5px] font-bold font-[16px] text-blue cursor-pointer duration-100 hover:border-y hover:border-red hover:text-red';
    let NavResults = 'NavItem mx-[40px] border-y border-blue py-[10px] px-[25px] rounded-[5px] font-bold font-[16px] text-blue cursor-pointer duration-100 hover:border-y hover:border-red hover:text-red';
    const activeItem = 'NavItem mx-[40px] border-y border-red py-[10px] px-[25px] rounded-[5px] font-bold font-[16px] text-red cursor-pointer duration-100 hover:border-y hover:border-red hover:text-red';

    if (props.mainPage === 'quizmenu'){
        NavQuiz = activeItem
    }
    else if(props.mainPage === 'edit'){
        NavEdit = activeItem
    }
    else if(props.mainPage === 'results'){
        NavResults = activeItem
    }



    const LogoutHandler = React.useCallback(() => {
        props.setFullName('')
        props.setEmail('')
        props.setPage('entry')
    },[props])


  return (
    <div className='Header w-full bg-white py-[8px] border-b border-blue'>
        <div className="Container w-4/5 m-auto flex justify-between items-center">
            <div className="Logo w-[140px]">
                <img src="https://spinquiz.com/wp-content/uploads/2021/12/Sping-Quiz-Logo-Transparent.png" alt="" />
            </div>
            <div className="Navigation">
                <ul className='NavBar flex list-none'>
                    <li onClick={() => {props.setMainPage('quizmenu')}} className={NavQuiz}>Quiz</li>
                    <li onClick={() => {props.setMainPage('edit')}} className={NavEdit}>Edit</li>
                    <li onClick={() => {props.setMainPage('results')}} className={NavResults}>Results</li>
                </ul>
            </div>
            <div className='Profile flex items-center'>
            <div className='Username mr-[20px]'><strong className='text-blue text-[17px]'>{props.fullName}</strong></div>
            <LogoutIcon onClick={LogoutHandler} className='LogoutIcon text-red cursor-pointer'></LogoutIcon>
            </div>

        </div>
    </div>
  )
}

export default Header