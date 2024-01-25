import React, { useState } from 'react'

const Contact = () => {

    const [input, setInput] = useState({
        myname: '',
        myemail: '',
        mymessage: ''
    })

    const inputEvent = (event) => {
        const {name, value} = event.target;
        console.log(`Name: ${name}, Value: ${value}`);
        setInput((prevValue) => {
            return {
                ...prevValue,
                [name]: value,
            }
        })
    }

    const onFormSubmit = (event) => {
        event.preventDefault();
        alert("Form Submitted");
        setInput(
            {
                myname: '',
                myemail: '',
                mymessage: ''
            }
        )

    }

    return (
        <>
            <section id='contact'>
                <div className='container mycontact'>
                    <div className='row'>
                        <div className='col-md-8 mx-auto '>
                            <form onSubmit={onFormSubmit} className='d-flex flex-column p-5'>
                                <h1 className='text-center about m-5'>Let's Connect</h1>
                                <input type="text" name="myname" value={input.myname} placeholder="Enter your Fullname" id="" className='mb-3 py-2 px-2 myinput' onChange={inputEvent}  required/>
                                <input type="email" name="myemail" value={input.myemail} placeholder='Enter your Email' id="" className='mb-3 py-2 px-2 myinput' onChange={inputEvent}  required/>
                                <textarea name="mymessage" value={input.mymessage} id="" placeholder='Message Me!' className='mb-3 py-2 px-2 myinput' onChange={inputEvent} required></textarea>
                                <div className='navbtn mt-3'>
                                    <button >Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contact