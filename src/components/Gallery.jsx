import React from 'react'
import Carousel from './Carousel'
import data from '../data/galleryData.json'

const Gallery = () => {
  return (
    <section className="text-white bg-[#032437] pb-20">
        <h2 className="font-semibold text-[70px] pl-40 mb-20">
            Gallery
        </h2>
         <div className="flex items-center justify-center overflow-hidden x-10">
          <div className="space-y-8">
           <Carousel slides={data.resources} side="to-left" />
           <Carousel slides={data.resources} side="to-right" />
           <Carousel slides={data.resources} side="to-left" />
           <Carousel slides={data.resources} side="to-right" />
          </div>
         </div>
    </section>
  )
}

export default Gallery