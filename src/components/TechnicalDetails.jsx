import React from 'react'

const TechnicalDetails = () => {

const dottedLine = "py-2.5 overflow-hidden after:inline-block after:h-[1px] after:w-full after:-mr-[100%] after:ml-1 after:border-t-2 after:border-dotted"

  return (
    <section className="bg-[#032437] px-9 lg:px-40 pt-16 text-white w-full flex flex-wrap lg:flex-nowrap">
        <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
            <div className='relative lg:-top-32'>
                <div className="mb-16">
                    <img src="img/boat1.png" alt="structural details"></img>
                </div>
                <h3 className="text-4xl font-medium mb-20 text-center">Structural</h3>
                <table className="w-full mb-20">
                    <tr>
                        <td className={dottedLine}>Yard: </td>
                        <td className="pl-1 text-[26px] py-2.5">Riva</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Type:</td>
                        <td className="pl-1 text-[26px] py-2.5">Motor yacht</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Guests:</td>
                        <td className="pl-1 text-[26px] py-2.5">8</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Crew: </td>
                        <td className="pl-1 text-[26px] py-2.5">3</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Cabins: </td>
                        <td className="pl-1 text-[26px] py-2.5">4</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Length:</td>
                        <td className="pl-1 text-[26px] py-2.5">26.84 m / 88′1″</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Beam:</td>
                        <td className="pl-1 text-[26px] py-2.5">6.29 m / 20′8″</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Draft:</td>
                        <td className="pl-1 text-[26px] py-2.5">1.82 m / 6′0″</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Year of build:</td>
                        <td className="pl-1 text-[26px] py-2.5">2017</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Classification:</td>
                        <td className="pl-1 text-[26px] py-2.5">RINA</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Displacement:</td>
                        <td className="pl-1 text-[26px] py-2.5">Planning</td>
                    </tr>
                </table>
                <div>
                    <img src="img/ship3.png" alt="mechanical details"></img>
                </div>
            </div>
        </div>
        </div>
        <div className="flex flex-col w-full -order-1 lg:order-none">
            <h2 className="text-[70px] font-semibold mb-16">Technical details</h2>
            <div className="lg:px-12">
                <h3 className="text-4xl font-medium mb-20 text-center">Mechanical</h3>
                <table className="w-full mb-20 font-medium">
                    <tr>
                        <td className={dottedLine}>Type of engine:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">Diesel</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Brand:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">MTU</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Model:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">16V 2000 M93</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Engine power:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">2435 hp</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Total power:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">4870 hp</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Maximum speed:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">38 knots</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Cruising speed:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">34 knots</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Range:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">330 nm</td>
                    </tr>
                </table>
                <div className="mb-9">
                    <img src="img/Ship2.png" alt="mechanical details"></img>
                </div>
            </div>
            <div className="flex flex-col items-center mb-20 lg:pl-24 pr-8">
                <h3 className="text-4xl font-medium mb-20 text-center">Materials</h3>
                <table className="w-full">
                    <tr>
                        <td className={dottedLine}>Hull:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">GRP</td>
                    </tr>
                    <tr>
                        <td className={dottedLine}>Superstructure:</td>
                        <td className="pl-1 text-[26px] py-2.5 w-48">GRP</td>
                    </tr>
                </table>
            </div>
        </div>
    </section>
  )
}

export default TechnicalDetails