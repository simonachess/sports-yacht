import React, { useState } from 'react'
import { AddressIcon, CheckedIcon, EmailIcon, LoadingIcon, PhoneIcon } from './Icons'

const GetInTouch = () => {

    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [data, setData] = useState({
            name: '',
            email: '',
            message: '',
        })

    const submitForm = (e) => {
        e.preventDefault();
        setSubmitted(true)

        setTimeout(() => {
            setLoading(true);
          }, "2000")

        setData({
            name: '',
            email: '',
            message: '',
        })
    }

  return (
    <section id="contact" className="text-[#032437] pt-14 pb-12 px-9 lg:px-[310px] flex flex-col items-center">
        <h2 className="font-semibold text-[70px] text-center">Get In Touch</h2>
        <p className="text-xl font-light text-center">Do you have questions? Reach out, and we will be happy to hear from you</p>
        <form className="mt-[90px] space-y-[60px] w-full">
            <div className="flex space-x-6">
                <div className="flex flex-col w-full space-y-1.5">
                    <label htmlFor="name">Name</label>
                    <input type="text" value={data.name} id="name" className="border border-[#01243A] rounded-2xl py-2 px-4" onChange={(e) => setData({name: e.target.value})}></input>
                </div>
                <div className="flex flex-col w-full space-y-1.5">
                    <label htmlFor="email">Email</label>
                    <input type="email" value={data.email}  id="email" className="border border-[#01243A] rounded-2xl py-2 px-4" onChange={(e) => setData({email: e.target.value})}></input>
                </div>
            </div>
            <div className="flex flex-col w-full space-y-1.5">
                <label htmlFor="message">Message</label>
                <textarea id="message" value={data.message} rows="4" className="border border-[#01243A] rounded-2xl py-2 px-4 resize-none" onChange={(e) => setData({message: e.target.value})}></textarea>
            </div>
            <div className="flex justify-center space-x-6">
                { submitted ?
                    <button className="flex min-w-[257px] items-center justify-center h-[65px] px-14 py-2 rounded-3xl border-[3px] border-none text-white text-2xl font-light w-fit bg-[linear-gradient(90deg,_#01243A_3.16%,_rgba(1,_36,_58,_0)_130.42%)]">
                    { loading ?
                        <CheckedIcon />
                        : <LoadingIcon className="rotating"/>
                    }
                </button>
                :<input type="submit" onClick={(e) => submitForm(e)} className="cursor-pointer flex min-w-[257px] items-center justify-center h-[65px] px-14 py-2 rounded-3xl border-[3px] border-none text-white text-2xl font-light w-fit bg-[linear-gradient(90deg,_#01243A_3.16%,_rgba(1,_36,_58,_0)_130.42%)] transition-all ease-in-out duration-500 hover:text-[#01243A]">
                </input>
                }
                <button className="underline text-xl font-light"
                    onClick={(e) => {setData({
                        name: '',
                        email: '',
                        message: '',
                    }); e.preventDefault()}}
                >
                    Cancel
                </button>
            </div>
        </form>
        <div className="flex flex-col md:flex-row w-full justify-between space-y-4 lg:space-x-[108px] mt-[78px]">
            <address className="not-italic">
                <div className="flex space-x-2.5 mb-1.5">
                    <AddressIcon />
                    <p className="text-lg font-normal">Address</p>
                </div>
                <p className="text-base font-light">4444 Mulberry Lane, Boca Raton</p>
                <p>Florida, 33432</p>
            </address>
            <div>
                <div className="flex space-x-2.5 mb-1.5">
                    <PhoneIcon />
                    <p className="text-lg font-normal">Phone Number</p>
                </div>
                <a href="tel:+4065550120" className="text-base font-light">(406) 555-0120</a>
            </div>
            <div>
                <div className="flex space-x-2.5 mb-1.5">
                    <EmailIcon />
                    <p className="text-lg font-normal">Email address</p>
                </div>
                <a href="mailto:Yacht.services@example.com" className="text-base font-light">Yacht.services@example.com</a>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch