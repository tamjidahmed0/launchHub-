import React from 'react'
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import TwitterCard from '../atoms/card/TwitterCard'
import * as motion from "motion/react-client"

const Testimonial = () => {
    return (
        <div className='bg-linear-dark mt-[126px] flex flex-col items-center justify-center'>

            <motion.div 
                className='mt-[88px]' 
                whileInView={{ opacity: 1 }} 
                initial={{ opacity: 0 }} 
                transition={{ duration: 1 }}
                viewport={{ once: true }}
            >
                <Title text='What our customers say' className=' font-outfit font-bold text-[42px] leading-[42px] text-center' />
                <SubTitle text='Read why thousands of marketers, writers, and entrepreneurs love us so much.' className='font-inter text-[18px] leading-[28px] text-center xl:w-[461px] text-[#FAFAFA] opacity-70 mt-[19px]' />
            </motion.div>

            <div className='grid xl:grid-cols-[repeat(4,306px)] lg:grid-cols-[repeat(3,306px)] grid-cols-[repeat(1,306px)] md:grid-cols-[repeat(2,306px)] gap-[24px] mt-[81px]'>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.' Hashtag='postcrafts' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

                <motion.div 
                    whileInView={{ opacity: 1 }} 
                    initial={{ opacity: 0 }} 
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                >
                    <TwitterCard ImageUrl='/assets/profile.png' Name='Darrell Steward' userName='darrels' Content='You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save' Hashtag='another' />
                </motion.div>

            </div>

            <motion.div 
                className='bg-[#252835] w-full h-[1px] mt-[120px]' 
                whileInView={{ width: '100%' }}
                initial={{ width: 0 }}
                transition={{ duration: 2 }}
                viewport={{ once: true }}
            />
        </div>
    )
}

export default Testimonial
