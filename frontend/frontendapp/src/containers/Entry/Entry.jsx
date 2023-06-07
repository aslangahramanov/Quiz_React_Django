import React from 'react'
import './Entry.scss'

function Entry(props) {

    

    const nameRef = React.useRef()
    const emailRef = React.useRef()

    const FormHandler = React.useCallback(() => {
        props.setFullName(nameRef.current.value)
        props.setEmail(emailRef.current.value)
    },[])

    
    const GuestHandler = React.useCallback(() => {
        props.setFullName('Guest')
        props.setPage('main')
    }, [])



  return (
    <div className='Entry'>
        <div className='EntryMain'>
            <div className='CenterBox'>
                <div className='EntryLogo'>
                    <img src="https://spinquiz.com/wp-content/uploads/2021/12/Sping-Quiz-Logo-Transparent.png" alt="" />
                </div>
                <div className='EntryForm'>
                    <form action="">
                        <div>
                        <input onChange={FormHandler} ref={nameRef} id='fullname' type="text" placeholder='Enter Your Full Name' />
                        </div>
                        <div>
                        <input onChange={FormHandler} ref={emailRef} id='email' type="email" placeholder='Enter Your Email' />
                        </div>
                        <div onClick={() => {
                                    if (nameRef.current.value && emailRef.current.value){
                                        props.setPage('main')
                                    }
                                    else{
                                        props.setPage('entry')
                                    }
                        }}
                        className='SubmitButton'>Login</div>
                    </form>
                    <span onClick={GuestHandler}>Enter as a guest</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Entry