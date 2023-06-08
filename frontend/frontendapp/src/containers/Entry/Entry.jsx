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
        <div className='EntryMain w-full h-screen bg-black flex justify-center items-center'>
            <div className='CenterBox bg-white min-h-[430px] rounded-[40px]'>
                <div className='EntryLogo w-[100px] my-10 mx-auto'>
                    <img src="https://spinquiz.com/wp-content/uploads/2021/12/Sping-Quiz-Logo-Transparent.png" alt="" />
                </div>
                <div className='EntryForm min-w-[400px] text-center'>
                    <form action="">
                        <div>
                        <input className='w-[260px] border border-black/80 outline-none rounded-[10px] p-[10px] mb-5' onChange={FormHandler} ref={nameRef} id='fullname' type="text" placeholder='Enter Your Full Name' />
                        </div>
                        <div>
                        <input className='w-[260px] border border-black/80 outline-none rounded-[10px] p-[10px] mb-5' onChange={FormHandler} ref={emailRef} id='email' type="email" placeholder='Enter Your Email' />
                        </div>
                        <div onClick={() => {
                                    if (nameRef.current.value && emailRef.current.value){
                                        props.setPage('main')
                                    }
                                    else{
                                        props.setPage('entry')
                                    }
                        }}
                        className='SubmitButton w-[40%] py-2 px-[30px] rounded-[10px] bg-blue text-white text-[16px] font-semibold my-[25px] mx-auto cursor-pointer'>Login</div>
                    </form>
                    <span className='text-blue text-[14px] font-semibold cursor-pointer' onClick={GuestHandler}>Enter as a guest</span>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Entry