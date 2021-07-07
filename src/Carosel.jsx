import React from 'react'
import { Carousel } from 'react-responsive-carousel';

const Carosel = () => {

    // ----------------------------------------------------------------

    // var marqueespeed = 2 //Specify marquee scroll speed (larger is faster 1-10)
    // let cross_marquee = null;
    // let marqueeheight = null;
    // let lefttime = null;
    // let onload = null;
    // let load = null;

    // var copyspeed = marqueespeed
    // var actualheight = ''

    // function scrollmarquee() {
    //     cross_marquee = document.getElementById("vmarquee")
    //     let newMarquee = cross_marquee == null ? "" : cross_marquee
    //     marqueeheight = document.getElementById("marqueecontainer")
    //     let newVal = marqueeheight == null ? "" : marqueeheight.offsetHeight
    //     actualheight = newVal == null ? "" : newMarquee.offsetHeight
    //     if (newMarquee != "") {
    //         if (parseInt(newMarquee.style.top) > (actualheight * (-1) + 8)) {
    //             newMarquee.style.top = parseInt(newMarquee.style.top) - copyspeed + "px"
    //         }
    //         else { newMarquee.style.top = parseInt(marqueeheight) + 8 + "px" }
    //     }

    // }
    // ----------------------------------------------------------------


    const data = {
        fontFamily: ['Fuggles', 'cursive'],
    }
    const Posible = {
        position: "relative",
        fontSize: "30px",
        width: "275px",

    }
    const frst = {
        float: "right",
        width: "292px",
        overflow: "hidden",
        height: "100px",

    }
    const marqueeCss = {
        height: "328px",
        width: "282px",
        // backgroundColor: "#D3D3D3",
        // border: "3px ridge #D6D6D6"
    }
    // React.useEffect(() => {
    //     setTimeout(setInterval(scrollmarquee, 100), 2000)
    // })
    return (
        <>

            {/* ---------------Next------------------ */}
            <section class="mx-60 text-gray-600 body-font">
                <div class="container  py-12 mx-auto ">
                    <div class="flex flex-wrap m-4 text-center">
                        <ul class="dropdown sm:w-1/5 w-1/5 flex dropdown relative">
                            <li><i class="fas fa-video text-red-700 text-3xl "></i></li>
                            <li> <a href="#" class="font-bold text-sm leading-relaxed underline mx-2">Video Shoutout</a></li>
                            {/* <ul class="dropdown-menu absolute hidden text-gray-500 ">
                                <div className="">
                                    <button className="rounded-full bg-white  shadow-lg border-2 ml-36 "><i class="fas fa-arrow-right "></i></button>
                                </div>
                            </ul> */}
                            <ul class="dropdown-menu absolute hidden text-gray-500 mt-8 ">
                                <div class=" shadow-2xl p-2 w-60">
                                    <p class="text-sm font-medium">30 to 50 second video would be created by a Celebrity as per the script suggested by the user. It can be for any occasions like birthday, anniversary, roast, get well soon etc.
                                    </p>
                                </div>
                            </ul>
                        </ul>
                        <ul class=" dropdown sm:w-1/5 w-1/5 flex dropdown relative ">
                            <li><i class="fab fa-instagram-square text-red-700 text-3xl"></i></li>
                            <li><a href="#" class="font-bold text-sm leading-relaxed underline mx-2">DM on Instagram</a></li>
                            {/* <ul class="dropdown-menu absolute hidden text-gray-500 ">
                                <div className="">
                                    <button className="rounded-full bg-white  shadow-lg border-2 ml-36 "><i class="fas fa-arrow-right "></i></button>
                                </div>
                            </ul> */}
                            <ul class="dropdown-menu absolute hidden text-gray-500 mt-8 ">
                                <div class=" shadow-2xl p-2 w-60">
                                    <p class="text-sm font-medium">30 to 50 second video would be created by a Celebrity as per the script suggested by the user. It can be for any occasions like birthday, anniversary, roast, get well soon etc.
                                    </p>
                                </div>
                            </ul>
                        </ul>
                        <ul class=" dropdown sm:w-1/5 w-1/5 flex dropdown relative  pl-3">
                            <li><i class="fab fa-youtube  text-red-700 text-3xl"></i></li>
                            <li><a href="#" class="font-bold text-sm leading-relaxed underline mx-2">Star Hour</a></li>
                            {/* <ul class="dropdown-menu absolute hidden text-gray-500 ">
                                <div className="">
                                    <button className="rounded-full bg-white  shadow-lg border-2 ml-28 "><i class="fas fa-arrow-right "></i></button>
                                </div>
                            </ul> */}
                            <ul class="dropdown-menu absolute hidden text-gray-500 mt-8 ">
                                <div class=" shadow-2xl p-2 w-60">
                                    <p class="text-sm font-medium">30 to 50 second video would be created by a Celebrity as per the script suggested by the user. It can be for any occasions like birthday, anniversary, roast, get well soon etc.
                                    </p>
                                </div>
                            </ul>
                        </ul>
                        <ul class=" dropdown sm:w-1/5 w-1/5 flex dropdown relative  ">
                            <li><i class="fas fa-person-booth text-red-700 text-3xl"></i></li>
                            <li><a href="#" class="font-bold text-sm leading-relaxed underline mx-2">Icon for Change</a></li>
                            {/* <ul class="dropdown-menu absolute hidden text-gray-500 ">
                                <div className="">
                                    <button className="rounded-full bg-white  shadow-lg border-2 ml-36 "><i class="fas fa-arrow-right "></i></button>
                                </div>
                            </ul> */}
                            <ul class="dropdown-menu absolute hidden text-gray-500 mt-8 ">
                                <div class=" shadow-2xl p-2 w-60">
                                    <p class="text-sm font-medium">30 to 50 second video would be created by a Celebrity as per the script suggested by the user. It can be for any occasions like birthday, anniversary, roast, get well soon etc.
                                    </p>
                                </div>
                            </ul>
                        </ul>
                        <ul class=" dropdown sm:w-1/5 w-1/5 flex dropdown relative  px-2">
                            <li><i class="fas fa-tags text-red-700 text-3xl"></i></li>
                            <li><a href="#" class="font-bold text-sm leading-relaxed underline mx-2">Brand Enquiry</a></li>
                            {/* <ul class="dropdown-menu absolute hidden text-gray-500 ">
                                <div className="">
                                    <button className="rounded-full bg-white  shadow-lg border-2 ml-36 "><i class="fas fa-arrow-right "></i></button>
                                </div>
                            </ul> */}
                            <ul class="dropdown-menu absolute hidden text-gray-500 mt-8 ">
                                <div class=" shadow-2xl p-2 w-60">
                                    <p class="text-sm font-medium">30 to 50 second video would be created by a Celebrity as per the script suggested by the user. It can be for any occasions like birthday, anniversary, roast, get well soon etc.
                                    </p>
                                </div>
                            </ul>
                        </ul>
                    </div>
                </div>
            </section>
            {/* --------------------next------------------ */}

            {/* <section class="mx-60 text-gray-600 body-font overflow-hidden relative">
                <div class="container pl-12  mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div class=" xl:w-1/2 md:w-1/2 w-full" style={data}>
                            <div class="h-full  flex flex-col relative overflow-hidden">
                                <p class=" leading-relaxed text-base text-3xl font-bold text-red-600">Get the most from tring, book celebs for</p>
                            </div>
                        </div>
                        <div class="xl:w-1/2 md:w-1/2 w-full">
                            <div class="h-full flex flex-col relative overflow-hidden">

                                <div class=" md:w-full " style={frst}>
                                    <div class="flex  sm:flex-row flex-col">
                                        <div class="flex-grow">
                                            <div id="marqueecontainer" style={marqueeCss}>
                                                <ul id="vmarquee" style={Posible} >
                                                    <li className="text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="my-5 text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="my-5 text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="my-5 text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="my-5 text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="my-5 text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                    <li className="my-5 text-center bg-red-400 rounded-full"><p>tegggfbbdfb</p></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}


        </>
    );
};
export default Carosel;