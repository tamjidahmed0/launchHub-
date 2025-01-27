import React from 'react'
import * as motion from "motion/react-client"
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import Image from 'next/image'
import Button from '../atoms/Button'

const Tools = () => {
  return (
    <div className='flex flex-col justify-center items-center mt-[153px]'>

      <motion.div
        className='xl:w-[688px] w-full flex flex-col items-center gap-[26px]'
        initial={{ opacity: 0, y: 20 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        transition={{ duration: 1 }} 
      >
        <Title text='54 exciting writing tools' className='lg:text-[42px] text-[30px] font-outfit text-center font-bold leading-[48px]' />
        <SubTitle text='AI engines take information from various sources and read them like a human would do.' className='text-[18px] text-center font-inter lg:w-[524px]' />
      </motion.div>

 
      <div className='grid xl:grid-cols-[repeat(4,304px)] grid-cols-1 md:grid-cols-2 gap-[26px] mt-[61px]'>

       
        {[...Array(8)].map((_, idx) => (
          <motion.div
            key={idx}
            className='w-[304px] rounded-lg bg-[#282A37] flex gap-[17px] py-[21px] px-[22px]'
            whileHover={{ scale: 1.05, y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.1, scale: 1.05, y: -10 }} 
          >
            <div>
              <Image src={'/assets/card.png'} width={34} height={34} alt='card' className='w-[34px] h-[34px]' />
            </div>

            <div>
              <Title text='Blog Headlines' className='font-bold font-inter text-[16px] leading-[24px]' />
              <SubTitle text='Write a better blog title with our A.I tool.' className='text-[14px] leading-[20px] font-inter text-white opacity-70 mt-[14px] w-[206px]' />
            </div>
          </motion.div>
        ))}

      </div>


      <motion.div
        className='mt-[68px]'
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <Button btnText='See all 54 available tools' className='font-inter font-bold text-[16px]' />
      </motion.div>

  
      <div className='w-full h-[1px] bg-[#252835] mt-[87px]' />
    </div>
  )
}

export default Tools
