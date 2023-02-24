import React from 'react'
import Slider from './Slider'

const Info = () => {

const infoText = [
    `<div class="infotext-container">
        <p><span class="uppercase-word">Maroon</span> is a 26.85 m Motor Yacht, built in Italy by Riva and delivered in 2017. She is one of 15 Domino 88 Super models.</p>
        <p>She was designed by Officina Italiana Design, who also designed the interior. Officina Italiana Design has designed 222 yachts and designed the interior of 175 yachts.</p>
        <p>The naval architecture was developed by Ferretti Engineering Department, who has architected 432 other superyachts in the BOAT Pro database - she is built with a Teak deck, a GRP hull, and GRP superstructure.</p>
        <p>MAROON is registered under the Malta flag, the 3rd most popular flag state for superyachts with a total of 950 yachts registered</p>
    </div>`,
    `<div class="infotext-container">
        <p>Lorem ipsum</p>
        <p>Officina Italiana Design has designed 222 yachts and designed the interior of 175 yachts.</p>
        <p>The naval architecture was developed by Ferretti Engineering Department.</p>
    </div>`
]

  return (
    <section className="bg-white text-[#032437] py-24 px-9 lg:pr-[170px] lg:pl-16">
        <Slider slides={infoText} />
    </section>
  )
}

export default Info