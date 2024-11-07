import React from 'react'

function Card1({ username }) {
    console.log(username)
    return (
        <div>
            <div className=' bg-[#000000] position-static pb-10'  >
                <div className=' flex justify-center  ' >
                    <div className='flex border-[1px] rounded-3xl p-3 mt-5 mb-10'>
                        <img className='w-[700px] h-[300px] justify-center rounded-3xl  border-red-700 ' src="./src/img/map.jpg" alt="" /></div>
                </div>


                <div className='flex justify-center space-x-28 fontfamily items-center pb-10 '>
                    <div className='text-[#fff] text-[40px]'>
                        <p>Explore the <span className='text-[#beff99]'>Best</span></p>
                        <p>Locations</p>
                    </div>
                    <div >
                        <input className='border-[1px] rounded-md p-5 bg-[#f3fce9] text-black text-center items-center' type="search" placeholder="Enter the location" href="#" />
                    </div>
                </div>








                <div className='flex inline'>
                    <div className='text-white bg-[#000000] h-[180px] w-[300px] bg-h-[195px] rounded-md '>
                        <p className='text-[#ffffff] text-[20px] text-start pl-4'>Special Offer for you</p>
                        <p className='text-[#f1f0ea] text-[10px] text-start pl-4 py-2'>Lots of discounts to make your holiday even more economical </p>
                        <div>

                        </div>
                    </div>
                    <div className='flex px-2 '>


                        <div className='text-left px-2'>
                            <div>
                                <div className=' bg-[url("./src/img/img1.png")] h-[180px] w-[300px] bg-cover rounded-md'>
                                    <div className='bg-[rgba(34,111,84,0.7)]  h-full w-[125px] rounded-s-md  text-[#fff] transition ' >
                                        <p className='text-[12px] pl-4 pt-7 fontstyle'>Discount</p>
                                        <p className='pl-3  font-semibold  text-5xl fontstyle '>50%</p>
                                        <div className='flex items-center mt-10 bg-[#465246] mx-2 '>
                                            <p className='text-white text-[6px] pl-1 fontstyle mix-blend-screen'>Code</p>
                                            <p className='text-white text-[6px] pl-1 fontstyle mix-blend-screen'>Promo:</p>
                                            <p className='text-white text-[13px] pl-4 fontstyle'>CBK909</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>



                        <div className='text-left px-2'>
                            <div>
                                <div className=' bg-[url("./src/img/img1.png")] h-[180px] w-[300px] bg-cover rounded-md'>
                                    <div className='bg-[rgba(34,111,84,0.7)]  h-full w-[125px] rounded-s-md  text-[#fff] transition ' >
                                        <p className='text-[12px] pl-4 pt-7 fontstyle'>Discount</p>
                                        <p className='pl-3  font-semibold  text-5xl fontstyle '>50%</p>
                                        <div className='flex items-center mt-10 bg-[#465246] mx-2 '>
                                            <p className='text-white text-[6px] pl-1 fontstyle mix-blend-screen'>Code</p>
                                            <p className='text-white text-[6px] pl-1 fontstyle mix-blend-screen'>Promo:</p>
                                            <p className='text-white text-[13px] pl-4 fontstyle'>CBK909</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className='text-left px-2'>
                            <div>
                                <div className=' bg-[url("./src/img/img1.png")] h-[180px] w-[300px] bg-cover rounded-md'>
                                    <div className='bg-[rgba(34,111,84,0.7)]  h-full w-[125px] rounded-s-md  text-[#fff] transition ' >
                                        <p className='text-[12px] pl-4 pt-7 fontstyle'>Discount</p>
                                        <p className='pl-3  font-semibold  text-5xl fontstyle '>50%</p>
                                        <div className='flex items-center mt-10 bg-[#465246] mx-2 '>
                                            <p className='text-white text-[6px] pl-1 fontstyle mix-blend-screen'>Code</p>
                                            <p className='text-white text-[6px] pl-1 fontstyle mix-blend-screen'>Promo:</p>
                                            <p className='text-white text-[13px] pl-4 fontstyle'>CBK909</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

        </div>

    )
}

export default Card1
