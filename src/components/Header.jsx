import React, { useState } from 'react'
import { CloseIcon, MenuIcon, PhoneWhiteIcon, EmailWhiteIcon, FacebookIcon, InstagramIcon, YoutubeIcon } from './Icons'

const Header = () => {

    const [showMenuModal, setShowMenuModal] = useState(false)

    const data = [
        {
            title: 'Price',
            description: '€ 5, 650, 00',
        },
        {
            title: 'Lenth',
            description: '26,84 m',
        },
        {
            title: 'Year',
            description: '2017',
        },
        {
            title: 'Builder',
            description: 'Riva',
        },
    ]

  return (
    <header className="bg-[url('/public/img/header.png')] bg-cover bg-center px-9 pb-16 relative">
        <div className="lg:px-[76px]">
            <div className="flex justify-between py-14">
                <img src="img/logo.png" alt="Yacht Services" width="292" height="120"/>
                <div className="cursor-pointer">
                    <MenuIcon onClick={() => setShowMenuModal(true)}/>
                </div>
            {
                showMenuModal &&
                    <div className="z-10 absolute right-0 bg-[#032437] text-white w-full h-fit px-9 md:px-[136px] pt-9 md:pt-[54px] pb-[110px]">
                        <div className="w-full flex justify-end">
                            <CloseIcon className="cursor-pointer" onClick={() => setShowMenuModal(false)}/>
                        </div>
                        <div className="flex flex-col space-y-10 xl:space-y-0 xl:flex-row w-full xl:px-[311px] pb-[60px]">
                            <nav className="w-full flex flex-col text-3xl md:text-[41px] font-light space-y-4 md:space-y-8">
                                <a href='/' className="pb-[18px] leading-none" onClick={() => setShowMenuModal(false)}>Home</a>
                                <a href='#contact' className="pb-[18px] leading-none" onClick={() => setShowMenuModal(false)}>Contact</a>
                                <a href='#about' className="pb-[18px] leading-none" onClick={() => setShowMenuModal(false)}>About</a>
                                <a href='/' className="pb-[18px] leading-none" onClick={() => setShowMenuModal(false)}>Security & Privacy</a>
                            </nav>
                            <div className="w-full">
                                <div className="flex space-x-2.5 mb-1.5 fill-white">
                                    <PhoneWhiteIcon />
                                    <p className="text-lg font-normal">Phone Number</p>
                                    </div>
                                <a href="tel:+4065550120" className="text-base font-light">(406) 555-0120</a>
                            </div>
                            <div className="w-full">
                                <div className="flex space-x-2.5 mb-1.5">
                                    <EmailWhiteIcon />
                                    <p className="text-lg font-normal">Email address</p>
                                </div>
                                <a href="mailto:Yacht.services@example.com" className="text-base font-light">Yacht.services@example.com</a>
                            </div>
                        </div>
                        <div className="border-b border-white w-full mb-7"></div>
                        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 w-full xl:pl-[310px] xl:pr-[324px] justify-between items-center">
                            <div className="font-light text-xl w-[352px]">Copyright © 2022 Yacht services. All rights reserved</div>
                            <div className="flex xl:ml-[394px] xl:space-x-[38px]">
                                <FacebookIcon />
                                <InstagramIcon />
                                <YoutubeIcon />
                            </div>
                        </div>
                    </div>
            }
            </div>
            <div className="text-white mb-12">
                <h1 className="font-extralight text-8xl lg:text-[165px]">Maroon</h1>
                <p className="font-medium text-5xl"> Sport Boat</p>
            </div>
            <div className="flex flex-col space-y-7 mb-56">
                <button className="px-14 py-5 rounded-3xl border-[3px] border-white text-white w-fit transition-all ease-in-out duration-500 hover:bg-[#01243A] hover:border-transparent hover:shadow-[-4px_-4px_12px_rgba(255,_255,_255,_55%),_4px_4px_12px_rgba(255,_255,_255,_60%)]">Buy Now</button>
                <button className="px-14 py-5 rounded-3xl border-[3px] border-none text-white w-fit hover:bg-[#AFC4D9] hover:bg-[linear-gradient(90deg,_#AFC4D9_3.16%,_rgba(1,_36,_58,_0)_130.42%)] hover:shadow-[-4px_-4px_12px_rgba(255,_255,_255,_55%),_4px_4px_12px_rgba(255,_255,_255,_60%)] transition-all ease-in-out duration-500 bg-[linear-gradient(90deg,_#01243A_3.16%,_rgba(1,_36,_58,_0)_130.42%)]">Contact Listing Agent</button>
            </div>
        </div>
        <div className="flex justify-between flex-wrap">
            {
                data.map(x => (
                    <div className="flex flex-col items-center justify-center my-4 p-4 xl:p-8 xl:space-y-2.5 min-w-[148px] lg:min-w-[214px] xl:max-w-[314px] xl:min-w-[280px] min-h-[114px] xl:max-h-[136px] rounded-3xl text-white bg-[linear-gradient(180deg,_rgba(118,_136,_159,_0.55)_0%,_rgba(217,_217,_217,_0)_139.34%,_rgba(255,_255,_255,_0)_139.34%)]">
                        <p className="font-semibold lg:text-2xl xl:text-4xl">{x.title}</p>
                        <div className="font-medium lg:text-xl xl:text-2xl">{x.description}</div>
                    </div>
                ))
            }

        </div>
    </header>
  )
}

export default Header