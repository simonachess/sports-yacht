import React, { useState, useEffect, useRef } from 'react'
import { PlusIcon } from './Icons'
import { faq } from '../data/data'

const FAQ = () => {

  return (
    <section className="text-white bg-[#032437] pb-20 pt-[120px] px-9 lg:px-40">
        <h2 className="text-5xl font-semibold mb-6">A few things that clients ask</h2>
        <p className="font-light text-xl">Everything you need to know about the product</p>
        <div className="mt-[72px] flex flex-col lg:flex-row">
            <div className="w-full flex flex-col px-5 justify-center">
                {faq.map((x, index) =>
                    <FAQquestion index={x.index} question={x.question} answer={x.answer} key={index} />
                )}
            </div>
            <div className="w-full px-24 flex justify-center">
                <img src="img/Nuotrauka5.png" alt="Boat front" />
            </div>
        </div>
    </section>
  )
}

export default FAQ


const FAQquestion = (props) => {
    const [show, setShow] = useState(false);
    const toggle = () => {
        setShow(!show);
    }

    const node = useRef();

    const handleClick = e => {
        if (node.current.contains(e.target)) {
            return;
        }
        setShow(false);
    };

    useEffect(() => {
        document.addEventListener("click", handleClick);
        return () => {
            document.removeEventListener("click", handleClick);
        };
    }, []);

    return (
        <div className="border-b mb-[72px]">
            <div className="flex justify-between text-2xl mb-5 cursor-pointer" ref={node} onClick={toggle}>
                <div key={props.question}>{props.question}</div>
                <PlusIcon />
            </div>
            { show && <p className="text-base mt-5 mb-4">{props.answer}</p> }
        </div>
    )
}
