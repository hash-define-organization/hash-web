    import React from 'react'
    import EastIcon from '@mui/icons-material/East';
    import Background from '../assets/hero_section_background.png';
    function Hero() {
        return (
            <div className="hero-parent n w-screen h-screen justify-between  items-center flex flex-row">
                <img src={Background} className='absolute w-screen opacity-50 top-0 right-0 -z-20' alt="" />
                
                <div className="hero-text  h-screen w-5xl flex justify-start p-4">
                    <div className='mt-32 p-10'>

                        <div className="absolute -top-70 -z-10 -left-80 size-lvh bg-blue-500 blur-[100px] opacity-80 rounded-full"></div>
                        <h1 className="text-7xl">Lorem Ipsum dolor sit amet</h1>
                        <p className='font-light my-3'>Lorem Impsum dolor sit amet hello my name is parth sharma</p>
                        <div>
                            <input className='border-2 border-white  hover:bg-white hover:text-black cursor-pointer my-3 p-3 outline-0 rounded-[50px] transition duration-200 ease-in-out ' placeholder='Lorem Ipsum Deler' type="text" />
                            <button className='rounded-[50px] bg-blue-600 p-3 mx-3 border-2 border-white transition transform cursor-pointer duration-200 ease-in-out hover:translate-x-3' > <EastIcon /> </button>
                        </div>
                    </div>
                </div>
            <div className='bg-blue'>

            </div>
        </div>
    )
}

export default Hero