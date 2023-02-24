import React from 'react'
import { LineWhite } from './Icons'
import classNames from 'classnames';

const Main = () => {

    function reveal() {
        var reveals = document.querySelectorAll(".reveal");

        for (var i = 0; i < reveals.length; i++) {
          var windowHeight = window.innerHeight;
          var elementTop = reveals[i].getBoundingClientRect().top;
          var elementVisible = 150;

          if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
          } else {
            reveals[i].classList.remove("active");
          }
        }
      }

      window.addEventListener("scroll", reveal);

    const leftText = "reveal border-b-2 border-white flex flex-col items-end pl-4 sm:pl-8"
    const rightText = "reveal border-b-2 border-white flex flex-col items-start pr-4 sm:pr-8"
    const titleTextClasses = "font-semibold text-xs sm:text-base lg:text-lg"
    const descriptionTextClasses = "font-normal text-xs sm:text-lg lg:text-[30px]"

  return (
    <section className="text-white bg-[#032437] pb-20">
        <div className="relative">

            <div className="flex justify-center w-full">
                <img src="img/Nuotrauka2.png" alt="boat" className='relative'></img>
                <div className="z-10 absolute top-0 flex flex-col items-center w-full h-[86%] pt-[3%] justify-between">
                <div className={classNames(rightText, 'from-right left-[20%] lg:left-[15%]')}>
                    <p className={titleTextClasses}>Name</p>
                    <p className={descriptionTextClasses}>Maroon</p>
                </div>
                <div className={classNames(leftText, 'from-left right-[20%] lg:right-[15%]')}>
                    <p className={titleTextClasses}>Yacht type</p>
                    <p className={descriptionTextClasses}>Motor Yacht</p>
                </div>
                <div className={classNames(rightText, 'from-right left-[30%] lg:left-[22%]')}>
                    <p className={titleTextClasses}>Model</p>
                    <p className={descriptionTextClasses}>Domino 88 Super</p>
                </div>
                <div className={classNames(leftText, 'from-left right-[33%] lg:right-[22%]')}>
                    <p className={titleTextClasses}>Yacht Subtype</p>
                    <p className={descriptionTextClasses}>Sports/Open Motor Yacht</p>
                    <p className={descriptionTextClasses}>Planing Fast Yacht</p>
                </div>
                <div className={classNames(rightText, 'from-right left-[34%] lg:left-[24%]')}>
                    <p className={titleTextClasses}>Interior Designer</p>
                    <p className={descriptionTextClasses}>Officina Italiana Design</p>
                </div>
                <div className={classNames(leftText, 'from-left right-[29%] lg:right-[22%]')}>
                    <p className={titleTextClasses}>Exterior Designer</p>
                    <p className={descriptionTextClasses}>Officina Italiana Design</p>
                </div>
                <div className={classNames(rightText, 'from-right left-[32%] lg:left-[22%]')}>
                    <p className={titleTextClasses}>Naval Architect</p>
                    <p className={descriptionTextClasses}>Ferretti Engineering</p>
                    <p className={descriptionTextClasses}>Department</p>
                </div>
            </div>
            </div>
        </div>
        <div className="flex w-full justify-center">
            <div className="flex flex-col justify-center items-center space-y-3 lg:space-y-5 px-2 md:px-5 lg:px-14">
                <p className="text-base md:text-2xl lg:text-[32px] font-semibold">Guest</p>
                <p className="text-sm md:text-lg lg:text-2xl font-medium">8</p>
            </div>
            <div className="flex justify-center items-center h-16 w-16">
                <LineWhite />
            </div>
            <div className="flex flex-col justify-center items-center space-y-3 lg:space-y-5 px-2 md:px-5 lg:px-14">
                <p className="text-base md:text-2xl lg:text-[32px] font-semibold">Crew</p>
                <p className="text-sm md:text-lg lg:text-2xl font-medium">3</p>
            </div>
            <div className="flex justify-center items-center h-16 w-16">
                <LineWhite />
            </div>
            <div className="flex flex-col justify-center items-center space-y-3 lg:space-y-5 px-2 md:px-5 lg:px-14">
                <p className="text-base md:text-2xl lg:text-[32px] font-semibold">Cabins</p>
                <p className="text-sm md:text-lg lg:text-2xl font-medium ">4</p>
            </div>
        </div>
    </section>
  )
}

export default Main