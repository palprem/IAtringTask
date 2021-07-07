import React from 'react';
import img1 from './LandingImg/ani.png'
import img2 from './LandingImg/fe.png'
import img3 from './LandingImg/inc-42.png'
import img4 from './LandingImg/logo-yourstory.svg'
import img5 from './LandingImg/vccircle.png'

const UpperLanding = () => {
    const data = {
        fontFamily: ['Kaushan Script', 'cursive'],
        // font-family: 'Kaushan Script', cursive;
    }
    return (
        <>
            {/* ----------------------------------------------------------- */}

            <section class=" mb-20 mt-32 body-font bg-red-600">
                <div class="container px-5 py-24 mx-auto flex flex-wrap">
                    <div class="flex flex-wrap -m-4">

                        <div class="p-4  md:w-full">
                            <div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                                <div class="flex-grow">
                                    <h2 class="text-white text-6xl title-font font-medium mb-3">India's Largest Celebrity Engagement Platform</h2>
                                    <p class="text-white py-3 text-2xl leading-relaxed text-base">With over 7000+ celebrities and counting….</p>
                                    <p style={data} class="text-gray-300 text-2xl leading-relaxed text-base py-3"># Movie Star # Singer # Sportsperson # Dancer # Model # Influencers # Athletes # Public figures # Writer # Author # Producers # TikTok Stars and many more</p>
                                    <button className="bg-white p-3 rounded-2xl text-red-800 font-bold text-xl ">Enroll as Celebrity</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* -------------------------------------------------------- */}
            <div className="mx-24 pb-12 text-center">
                <p style={data} className="text-4xl">As Featured in</p>
                <footer class="text-gray-600 body-font">
                    <div class="container px-5 py-8  mx-auto">
                        <div class="flex flex-wrap md:text-left text-center -mb-10 -mx-4">
                            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
                                <img src={img1} alt="" />
                            </div>
                            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
                                <img src={img5} alt="" />
                            </div>
                            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
                                <img src={img3} alt="" />
                            </div>
                            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
                                <img src={img4} alt="" />
                            </div>
                            <div class="lg:w-1/5 md:w-1/2 w-full px-4">
                                <img src={img2} alt="" />
                            </div>
                        </div>
                    </div>

                </footer>
            </div>
            {/* ------------------------------------------------------------- */}

        </>
    )
}
export default UpperLanding;