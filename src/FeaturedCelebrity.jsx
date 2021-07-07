import React from 'react'
import { Link } from 'react-router-dom';
import { useHistory, withRouter } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import celebrityData from './wysh_data/wysh.json'
import Header from "./Header";
import Landing from "./Landing";
import Carosel from "./Carosel";
import Footer from "./Footer";
import UpperLanding from "./UpperLanding";

const FeaturedCelebrity = () => {
    const data = {
        width: "300px",
        height: "320px",
    }

    const mystyle = {
        fontFamily: ["Courgette", "cursive"],
    };
    return (
        <>
            <Header />
            <Landing />
            <Carosel />
            <section class="mx-24 py-8 text-gray-600 body-font">
                <div class="container px-5  mx-auto flex flex-wrap">
                    <div class=" mx-auto">
                        <div className="text-center ">
                            <p style={mystyle} className="text-5xl text-black">Featured Celebrity</p>
                            <p className="text-blue-500 py-4 text-medium">Get personalised video messages from your favourite celebrity! What's more? The price you see is the price you pay!</p>
                        </div>
                        <div class="flex flex-wrap mx-2">
                            {
                                celebrityData.map((val, index) => {
                                    return (
                                        <>
                                            <div class=" px-4 py-12  p-4 xl:w-1/4 md:w-1/2 w-full  " key={index}>
                                                <div className="nav-item">
                                                    <Link className="nav-link text-black" to={{
                                                        pathname: '/ProfileLanding',
                                                        aboutProps: {
                                                            propVal: { val }
                                                        }
                                                    }}>
                                                        <div  >
                                                            <div class="w-64 h-64 bg-red-100 relative ">
                                                                <img style={data} alt="gallery" class=" rounded-2xl " src={val.img} />

                                                                <div class="absolute inset-0 bg-cover bg-center z-0" >
                                                                    <button className="px-2 mx-1 my-1  text-white rounded-full border-white border-2 p-1  opacity-50"><i class="fas fa-heart" ></i></button>
                                                                    <p class="px-5 mt-36 leading-relaxed text-gray-300 font-bold ">{val.subtitle}</p>
                                                                    <p class="px-5 leading-relaxed text-gray-300 font-bold ">{val.category}</p>
                                                                    <h2 class="px-5 text-3xl text-gray-300 font-bold ">{val.name}</h2>
                                                                </div>
                                                                <div class="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex   text-white font-semibold">
                                                                    {/* <h2 class=" mt-64 px-5 text-2xl">{val.name}</h2> */}
                                                                    {/* <p class="mt-60 leading-relaxed text-white">{val.subtitle}</p>
                                                                    <p class="mt-60 leading-relaxed text-white">{val.category}</p> */}
                                                                </div>
                                                            </div>
                                                            {/* ---------------------------------------------- */}

                                                            {/* </div> */}
                                                        </div>
                                                        {/* </div> */}
                                                    </Link>
                                                </div>
                                            </div>

                                        </>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </section>

            <footer class=" px-24 text-gray-600 body-font lg:w-full md:w-full ">
                <div class="container px-5  mx-auto">
                    <p className="text-xl text-black font-bold py-6">Popular Categories to explore </p>

                    <div class=" flex md:text-left text-center -mb-10 -mx-4">
                        <div class=" w-full ">
                            <button className="bg-red-500 px-5 py-2 rounded-xl font-bold text-sm text-white">Featured</button>
                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">Tranding</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">Movie Star</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">TV Star</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">Model</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">Charity</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">Sportperson</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">Singer</button>

                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">On TV</button>
                        </div>
                        <div class=" w-full ">
                            <button className="bg-gray-200 px-5 py-2 rounded-xl font-bold text-sm">More</button>
                        </div>
                    </div>
                </div>

            </footer>

            <UpperLanding />
            <Footer />
        </>
    )
}
export default FeaturedCelebrity;