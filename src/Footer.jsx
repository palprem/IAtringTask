import React from 'react';

const Footer = () => {
    const mapData = {
        filter: ["grayscale(1)", "contrast(1.2)", "opacity(0.4)"]
    }
    const mystyle = {
        fontFamily: ["Courgette", "cursive"],
    }
    return (
        <>
            <section class="text-gray-600 body-font relative">
                <div class="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">
                    <div class="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe width="100%" height="100%" class="absolute inset-0" frameborder="0" title="map" marginheight="0" marginwidth="0" scrolling="no" src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed" style={mapData}></iframe>
                        <div class="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                            <div class="lg:w-1/2 px-6">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
                                <p class="mt-1">Universal majestic,
                                    Jeejabai Bhosale Marg,
                                    ACC Nagar, Chedda Nagar Mumbai,
                                    Maharashtra 400043
                                    WhatsAppWhatsApp
                                    +91 - 7208855641
                                    Mailoperations@tring.co.in
                                </p>
                            </div>
                            <div class="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
                                <a class="text-indigo-500 leading-relaxed">example@email.com</a>
                                <h2 class="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
                                <p class="leading-relaxed">123-456-7890</p>
                            </div>
                        </div>
                    </div>
                    <div class="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
                        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Send me 10% off</h2>
                        <p class="leading-relaxed mb-5 text-gray-600">Subscribe to our newsletter and receive 10% off your very first order.</p>
                        <div class="relative mb-4">
                            <label for="message" class="leading-7 text-sm text-gray-600">Feedback</label>
                            <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
                        </div>
                        <button class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Subscribe</button>
                        <p class="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
                    </div>
                </div>
            </section>

            <footer class="text-gray-600 body-font">
                <div class=" container px-5  mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                        <a class="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full" viewBox="0 0 24 24">
                                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
                            </svg>
                            <span class="ml-3 text-xl">Tring</span>
                        </a>
                        <p class="mt-2  text-gray-500">Celebs wishing happy birthday! How exciting it would be? Make every moment special with a personalized celebrity message. Tring is India’s largest engagement platform for celebrity video shoutout.</p>
                    </div>
                    <div class="font-bold  flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="text-xl title-font  text-gray-900 tracking-widest text-sm mb-3">About</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Our Story</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Media</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Blogs</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Vlogs</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="text-xl title-font  text-gray-900 tracking-widest text-sm mb-3">Resources</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Terms</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Privacy</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">IR</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4">
                            <h2 class="text-xl title-font  text-gray-900 tracking-widest text-sm mb-3">Explore</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Browse all Celebrities</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Offers</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Returns & Refunds</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Covid Relief</a>
                                </li>
                            </nav>
                        </div>
                        <div class="lg:w-1/4 md:w-1/2 w-full px-4 text-center">
                            <h2 class="text-xl title-font  text-gray-900 tracking-widest text-sm mb-3">Social</h2>
                            <nav class="list-none mb-10">
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Instagram  </a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">YouTube</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Facebook</a>
                                </li>
                                <li>
                                    <a class="text-gray-600 hover:text-gray-800">Twitter</a>
                                </li>
                            </nav>
                        </div>
                    </div>
                </div>
                <div class="bg-gray-100">
                    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                        <p class="text-gray-500 text-sm text-center sm:text-left">© 2020 Tailblocks —
                            <a href="https://twitter.com/knyttneve" rel="noopener noreferrer" class="text-gray-600 ml-1" target="_blank">@knyttneve</a>
                        </p>
                        <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                            <a class="text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
                                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                                    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
                                </svg>
                            </a>
                            <a class="ml-3 text-gray-500">
                                <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
                                    <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                                    <circle cx="4" cy="4" r="2" stroke="none"></circle>
                                </svg>
                            </a>
                        </span>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;