import React from 'react';

const Header = () => {
    return (
        <>
            <nav className="relative">
                <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-1">
                    <div className="relative  flex items-center justify-between h-16">
                        <div className=" relative inset-y-0 left-0 flex items-center sm:hidden">
                            <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                                <span class="sr-only">Open main menu</span>

                                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>

                                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                            <div className="flex-shrink-0 flex items-center">
                                <img className="block lg:hidden h-10 w-auto" src="https://cdn.tring.co.in/img/logo.png" alt="work" />
                                <img className="hidden lg:block h-10 w-auto" src="https://cdn.tring.co.in/img/logo.png" alt="work" />
                            </div>
                            <div class="hidden sm:block sm:ml-6">
                                <div class="flex space-x-4">
                                    {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                                    <a href="#" class=" hover:text-red-500 hover:text-white px-3 py-2 rounded-md  font-medium"
                                        aria-current="page">Celebrities</a>

                                    <a href="#"
                                        class=" hover:text-red-500 hover:text-white px-3 py-2 rounded-md font-medium">Track Booking</a>

                                    <div class="">
                                        <div class="dropdown inline-block relative">
                                            <button class=" font-semibold py-2 px-4 rounded  inline-flex items-center">
                                                <span class="mr-1">₹ INR</span>
                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                            </button>
                                            <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ">
                                                <li class=""><a class="hover:text-white rounded-t bg-gray-200 hover:bg-blue-500 py-2 px-4 block whitespace-no-wrap" href="#">₹ INR</a></li>
                                                <li class=""><a class="hover:text-white rounded-b bg-gray-200 hover:bg-blue-500 py-2 px-4 block whitespace-no-wrap" href="#">$ USD</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <a href="#"
                                        class=" hover:text-red-500 hover:text-white px-3 py-2 rounded-md font-medium">How To Tring?</a>

                                    <a href="#"
                                        class=" hover:text-red-500  px-3 py-2 rounded-md font-medium bg-gray-300">हिंदी</a>
                                </div>
                            </div>
                        </div>
                        <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                            {/* <!-- Profile dropdown --> */}
                            <div class=" ">
                                <div class="">
                                    <div class="bg-gray-200 flex items-center rounded-xl px-4 py-1">
                                        <div class="text-gray-500">
                                            <i class="fas fa-search "></i>
                                        </div>
                                        <input class="text-sm rounded-l-full w-full bg-gray-200  px-2 text-gray-500 leading-tight focus:outline-none" placeholder="Search from 7000+ celebs" id="search" />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <a href="#"
                            class=" hover:text-red-500 hover:text-white px-3 py-2 rounded-md font-medium ml-4">Login/SignUp</a>

                    </div>
                </div>
                {/* <!-- Mobile menu, show/hide based on menu state. --> */}
                <div class="sm:hidden" id="mobile-menu">
                    <div class="px-2 pt-2 pb-3 space-y-1">
                        {/* <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" --> */}
                        <a href="#" class=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                            aria-current="page">Celebrities</a>

                        <a href="#"
                            class=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Track Booking</a>

                        <div class="">
                            <div class="dropdown inline-block relative">
                                <button class=" font-semibold py-2 px-4 rounded  inline-flex items-center">
                                    <span class="mr-1">₹ INR</span>
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /> </svg>
                                </button>
                                <ul class="dropdown-menu absolute hidden text-gray-700 pt-1 ">
                                    <li class=""><a class="hover:text-white rounded-t bg-gray-200 hover:bg-blue-500 py-2 px-4 block whitespace-no-wrap" href="#">₹ INR</a></li>
                                    <li class=""><a class="hover:text-white rounded-b bg-gray-200 hover:bg-blue-500 py-2 px-4 block whitespace-no-wrap" href="#">$ USD</a></li>
                                </ul>
                            </div>
                        </div>

                        <a href="#"
                            class=" hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">How TO Tring?</a>

                        <a href="#"
                            class=" hover:text-red-400 e block px-3 py-2 rounded-md text-base font-medium bg-gray-300">हिंदी</a>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Header