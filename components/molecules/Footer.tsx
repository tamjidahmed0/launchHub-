import React from 'react'
import Title from '../atoms/Title'
import Button from '../atoms/Button'
import Link from 'next/link'

const Footer = () => {
    return (
        <div className='mt-[48px] flex items-center justify-center flex-col '>

            <div className='xl:w-[1295px] lg:h-[147px] px-[48px] flex lg:py-0 py-9 lg:flex-row flex-col lg:gap-0 gap-6 items-center justify-between rounded-lg bg-buttonGradient mt-[90px]'>
                <Title text='It will help you improve your writing & bring ideas more c learly.' className='text-[32px] font-outfit leading-[42px] font-bold text-white lg:w-[530px]' />

                <Button btnText='Start 14 Days Free Trial' className=' w-[220px] h-[60px] bg-white rounded-[5px] text-[#12141D] text-[16px] font-inter font-bold' />
            </div>

            <div className='grid lg:grid-cols-[repeat(4,141px)] grid-cols-2 md:grid-cols-3 mt-[93px] xl:gap-[250px] gap-[100px]'>

                <div>
                    <h1 className=' font-inter text-[16px] font-bold text-white'>
                        Help
                    </h1>

                    <ul className='mt-[20px] space-y-4'>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/features'>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href='/works'>
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link href='/career'>
                                Career
                            </Link>
                        </li>
                    </ul>

                </div>


                <div>
                    <h1 className=' font-inter text-[16px] font-bold text-white'>
                    Resources
                    </h1>

                    <ul className='mt-[20px] space-y-4'>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/features'>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href='/works'>
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link href='/career'>
                                Career
                            </Link>
                        </li>
                    </ul>

                </div>



                <div>
                    <h1 className=' font-inter text-[16px] font-bold text-white'>
                    Links
                    </h1>

                    <ul className='mt-[20px] space-y-4'>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/features'>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href='/works'>
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link href='/career'>
                                Career
                            </Link>
                        </li>
                    </ul>

                </div>




                <div>
                    <h1 className=' font-inter text-[16px] font-bold text-white'>
                        Company
                    </h1>

                    <ul className='mt-[20px] space-y-4'>
                        <li>
                            <Link href='/about'>
                                About
                            </Link>
                        </li>
                        <li>
                            <Link href='/features'>
                                Features
                            </Link>
                        </li>
                        <li>
                            <Link href='/works'>
                                Works
                            </Link>
                        </li>
                        <li>
                            <Link href='/career'>
                                Career
                            </Link>
                        </li>
                    </ul>

                </div>


            </div>

        </div>
    )
}

export default Footer