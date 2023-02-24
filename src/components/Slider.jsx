import { useState } from 'react'
import { ArrowIcon } from './Icons'

const ImageSlider = ({slides}) => {
      const next = () => {
        const index = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
        setCurrentSlide(index);
      }

    const [currentSlide, setCurrentSlide] = useState(0)
    const [autoPlay, setAutoPlay] = useState(true)

    let timeOut = null

    timeOut = autoPlay &&
        setTimeout(() => {
            next();
        }, 2500);

    return <div className='flex relative w-full h-[460px]' onMouseEnter={() => {
        setAutoPlay(false);
        clearTimeout(timeOut);
      }}
      onMouseLeave={() => {
        setAutoPlay(true);
      }}>
        <div className="flex flex-col h-full justify-center pr-[74px]">
            <span className="text-5xl font-bold">{currentSlide + 1}</span>
            <span className="text-5xl">/</span>
            <span className="text-2xl">{slides.length}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
            <div className="whitespace-nowrap transition-all" style={ { transform: `translateX(${-currentSlide * 100}%)`} }>
                {slides.map((slide, index) => (
                    <div key={index} className="inline-flex w-full" dangerouslySetInnerHTML={{__html: slide}}>
                    </div>
                ))}
            </div>

            <div className="flex justify-end w-full z-50">
                <ArrowIcon className="cursor-pointer" onClick={next} />
            </div>
        </div>
</div>
}

export default ImageSlider;