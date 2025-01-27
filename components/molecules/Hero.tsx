import React from 'react'
import * as motion from "motion/react-client"
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import Button from '../atoms/Button'
import { PlayCircle } from 'lucide-react'

const Hero = () => {
    return (
        <div className='mt-[125px] flex flex-col items-center justify-center relative'>
        <div className='lg:w-[511.92px] w-full h-[449px] relative'>

            {/* Radial Background */}
            <div className='absolute bg-radial-purple w-[194.65px] h-[200px] backdrop-blur-[354px] right-[137px] -top-[45px] z-[-10]' />

            {/* Title Animation on Scroll */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className='lg:text-[60px] text-[50px] font-outfit text-center leading-[66px] font-medium'
            >
                <Title text='Write better content for your' />
                <span className="gradient-border bg-textGradient bg-clip-text">
                    Facebook Ads
                </span>
            </motion.div>

            {/* Subtitle Animation on Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.2, delay: 0.5 }}
            >
                <SubTitle 
                    text='Artificial intelligence writing tool helps you create blogs, social media websites, and much more.' 
                    className='text-center mt-[39px] text-textColor text-[18px] leading-[28px] font-inter opacity-[80%]' 
                />
            </motion.div>

            {/* Button Animations on Scroll */}
            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5, delay: 1 }}
                className='flex justify-center items-center flex-col mt-[46px]'
            >
                <Button
                    btnText='Start 14 Days Free Trial'
                    className='bg-buttonGradient transition-all duration-300 w-[214px] h-[60px] rounded-[5px] font-inter font-bold hover:bg-gradient-hover'
                />
                <motion.button
                    className='mt-[19.5px] w-[214.11px] h-[37px] font-inter font-bold text-white bg-[#12141D] p-[2px] rounded-[5px] hover:bg-buttonBorderGradient'
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className='flex gap-[10px] items-center justify-center w-full h-full bg-[#12141D] rounded-[5px] hover:bg-gradient-to-r hover:from-buttonBorderGradient-start hover:to-buttonBorderGradient-end'>
                        <PlayCircle size={25} className='text-buttonBorderGradient hover:text-white' />
                        <span className='hover:text-transparent hover:bg-clip-text hover:bg-buttonBorderGradient'>
                            watch demo
                        </span>
                    </div>
                </motion.button>
            </motion.div>
        </div>

        <div className='w-full h-[1px] bg-[#252835] mt-[125px]' />

        <div className='bg-radial-pink w-[400.93px] h-[402px] absolute bottom-0 right-0' />
    </div>
    )
}

export default Hero
