import React from 'react';
import Header from "./Header";

const ProfileLanding = (props) => {
    const data = {
        fontFamily: ['Abril Fatface', "cursive"]
    }
    const cssData = {
        fontFamily: ['Shadows Into Light', "cursive"],
        paddingTop: '20px',
        width: "11rem"
    }
    const imgData = {
        height: '30rem',
        width: "20rem"
    }


    return (
        <>
            <Header />
            <section class="mx-24 text-gray-600 body-font overflow-hidden">
                <div class="container px-5 py-24 mx-auto">
                    <div class="flex flex-wrap -m-4">
                        <div>


                            <div class="ml-10  ...">
                                <div class="grid grid-rows-1 grid-flow-col gap-4">
                                    <div class="col-span-1 ...">
                                        <div class="  lg:pr-0 pr-0">
                                            <h1 class="title-font font-medium text-6xl text-gray-900" style={data}>{props.location.aboutProps == undefined ?
                                                null : props.location.aboutProps.propVal.val.name}</h1>

                                            <div className="py-4  w-240">
                                                <a href="" class="  leading-relaxed text-2xl font-bold text-blue-400 "
                                                    style={cssData}>#{props.location.aboutProps == undefined ? null :
                                                        props.location.aboutProps.propVal.val.subtitle}
                                                    # {props.location.aboutProps == undefined ? null : props.location.aboutProps.propVal.val.category}
                                                    # Naagin
                                                    # Meri Aashiqui Tum Se Hi
                                                    # Anchor
                                                    # TV Star
                                                    # Movie Star</a>
                                            </div>
                                            <p className="font-medium text-gray-400">{props.location.aboutProps == undefined ? null :
                                                props.location.aboutProps.propVal.val.description}</p>
                                            <p className="text-gray-700 text-xl font-medium py-6">Language spoken : English, Hindi</p>
                                            <p className="text-black text-xl" style={data}>Request for * Inclusive of GST</p>
                                            {/* ---------------------------------------------------- */}
                                            <section class="text-gray-600 body-font">
                                                <div class="container  py-24 mx-auto">
                                                    <div class="flex flex-col  w-full mb-12">
                                                        <h1 class="sm:text-3xl text-2xl font-bold title-font mb-4 text-gray-900">Book a DM on Instagram With {props.location.aboutProps == undefined ?
                                                            null : props.location.aboutProps.propVal.val.name}</h1>
                                                        <p class="font-medium text-blue-500 leading-relaxed text-base">Awesome we are excited to make your moment special, please fill the form and we’ll roll.</p>
                                                    </div>

                                                    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto  sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                                        <div class="relative flex-grow w-full">
                                                            <p className="font-bold pb-3 text-black">This instagram message is for</p>

                                                            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg">My Self</button>
                                                        </div>
                                                        <div class="relative flex-grow w-full">
                                                            <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded-xl text-lg">Someone else</button>
                                                        </div>
                                                    </div>


                                                    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                                        <div class="relative flex-grow w-full">
                                                            <label for="full-name" class="leading-7 text-sm text-gray-600">To</label>
                                                            <input type="text" id="text" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                        </div>
                                                        <div class="relative flex-grow w-full">
                                                            <label for="email" class="leading-7 text-sm text-gray-600">From</label>
                                                            <input type="text" id="text" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                            {/* <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
                                                        </div>
                                                        {/* <button class="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button> */}
                                                    </div>

                                                    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                                        <div class="relative flex-grow w-full">
                                                            <label for="full-name" class="leading-7 text-sm text-gray-600">Whats's the occasion?</label>
                                                            <div className="border-2 rounded text-right">
                                                                <div class="">
                                                                    <div class="dropdown inline-block relative">
                                                                        <button class=" font-semibold py-2 px-4   inline-flex items-center">
                                                                            <span class=" text-sm text-center uppercase">SELECT occasion</span>
                                                                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                                                        </button>
                                                                        <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ">
                                                                            <li class=""><a class="hover:text-white rounded-t bg-gray-200 hover:bg-blue-500 py-2 px-4 block whitespace-no-wrap" href="#">₹ INR</a></li>
                                                                            <li class=""><a class="hover:text-white rounded-b bg-gray-200 hover:bg-blue-500 py-2 px-4 block whitespace-no-wrap" href="#">$ USD</a></li>
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            {/* <input type="text" id="text" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" /> */}
                                                        </div>
                                                        <div class="relative flex-grow w-full">
                                                            <label for="email" class="leading-7 text-sm text-gray-600">By when do you need this message?</label>
                                                            <input type="text" id="text" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                            {/* <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
                                                        </div>
                                                    </div>

                                                    <div class="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
                                                        <div class="relative flex-grow w-full">
                                                            <label for="full-name" class="leading-7 text-sm text-gray-600">Message</label>
                                                            <label for="full-name" class="leading-7 text-sm text-gray-600">Message</label>
                                                        </div>
                                                        <div class="relative flex-grow w-full">
                                                            <label for="email" class="leading-7 text-sm text-gray-600">By when do you need this message?</label>
                                                            <input type="text" id="text" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                                                            {/* <input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-transparent focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"> */}
                                                        </div>
                                                    </div>

                                                </div>
                                            </section>
                                            {/* ---------------------------------------------------- */}
                                            <div className="">
                                                {/* ------------------------------------------------------------------------ */}
                                                <div className="flex">
                                                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                                        <div class="flex-grow">
                                                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                                            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                    class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="p-4 md:w-1/3 flex flex-col text-center items-center">
                                                        <div class="flex-grow">
                                                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                                            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                    class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>

                                                    <div class="p-4 md:w-1/2 flex flex-col text-center items-center">
                                                        <div class="flex-grow">
                                                            <h2 class="text-gray-900 text-lg title-font font-medium mb-3">Shooting Stars</h2>
                                                            <p class="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan
                                                                taxidermy. Gastropub indxgo juice poutine, ramps microdosing banh mi pug VHS try-hard.</p>
                                                            <a class="mt-3 text-indigo-500 inline-flex items-center">Learn More
                                                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                                                    class="w-4 h-4 ml-2" viewBox="0 0 24 24">
                                                                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                                                                </svg>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* ------------------------------------------------------------------------ */}
                                            </div>
                                        </div>
                                    </div>

                                    <div class="">
                                        <div class="sticky top-0  mx-5 bg-white  block rounded-lg my-1">
                                            <div class="" style={imgData}>
                                                <img style={imgData} className="rounded-2xl shadow-2xl" src={props.location.aboutProps == undefined ? null : props.location.aboutProps.propVal.val.img} alt="" />
                                            </div>

                                        </div>
                                        {/* <div class=" sticky  " style={{ top: "536px", bottom: "45px" }}>
                                            <button class="border-2 py-2  bg-blue-800 text-white" ></button>
                                        </div> */}

                                    </div>

                                </div>


                            </div>

                        </div>

                    </div>
                </div>
            </section>
        </>
    )
}
export default ProfileLanding;