import React from 'react'

const Landing = () => {
    const mystyle = {
        // marginRight: "10px",
        fontFamily: ["Courgette", "cursive"],
        // width: "38rem"
        // font- family: 'Courgette', cursive;
    };
    const imgDAta = {
        height: "23rem",
        width: "30rem",
    }
    const data = {
        fontFamily: ['Kaushan Script', 'cursive'],
    }
    return (
        <>
            <div className="">
                {/* <div className="absolute">
                    <img src="https://ik.imagekit.io/j83rchiauw/tring/bg-web.png" alt="" />
                </div> */}
                <div class="grid grid-flow-col auto-cols-2 mx-24  py-12">
                    <div >
                        <div className="py-4">
                            <a style={mystyle} className="italic text-6xl " href="">Personalised Celebrity Messages</a>
                        </div>
                        <div >
                            <a className="text-3xl " href="">Attractive deals on over 7000+ celebrities</a>
                        </div>
                        <div className=" py-4 " >
                            <a style={data} className="text-3xl text-blue-400" href=""># CelebrityVideoMessages # LiveVideoCalls
                            </a>
                        </div>
                        <div className="">
                            <button class="bg-red-600 hover:bg-blue-700 text-white font-bold py-2 px-5 rounded-full ">
                                Book Now
                            </button>
                        </div>
                    </div>

                    <div>
                        <img style={imgDAta} src=" https://ik.imagekit.io/j83rchiauw/banner/tring_web_dhamaka_banner.png" alt="" />
                    </div>
                    <div className="mr-12">
                    </div>
                </div>

            </div>
        </>
    )

}
export default Landing;