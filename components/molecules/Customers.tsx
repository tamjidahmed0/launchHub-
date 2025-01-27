import React from 'react'
import Title from '../atoms/Title'
import Image from 'next/image'
import SubTitle from '../atoms/SubTitle'
import Button from '../atoms/Button'
import * as motion from "motion/react-client"

const Customers = () => {
    return (
        <div className='mt-[104px] flex flex-col items-center justify-center'>
            <div className='xl:w-[940.22px] flex flex-col items-center'>
                <Title text='Trusted by nearly 5000+ paying customers' className='text-[24px] font-outfit leading-[34px] text-center font-semibold' />

                <motion.div 
                    className='mt-[77px] flex items-center justify-center flex-wrap gap-[70.78px] opacity-50'
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Image src={'/assets/Logo1.png'} width={150} height={30} alt='company' />
                    <Image src={'/assets/Logo2.png'} width={150} height={30} alt='company' />
                    <Image src={'/assets/Logo3.png'} width={150} height={30} alt='company' />
                    <Image src={'/assets/Logo4.png'} width={150} height={30} alt='company' />
                    <Image src={'/assets/Logo5.png'} width={150} height={30} alt='company' />
                    <Image src={'/assets/Logo6.png'} width={150} height={30} alt='company' />
                    <Image src={'/assets/Logo7.png'} width={150} height={30} alt='company' />
                </motion.div>
            </div>

            <div className='xl:w-[1121px] flex lg:gap-[218px] gap-[100px] xl:flex-row flex-col mt-[171px] relative'>
                <div className='bg-radial-pink hidden lg:flex w-[320px] h-[320px] absolute top-[125px] left-[290px] -z-10' />

                <motion.div 
                    className='lg:w-[406px] bg-white px-[27px] pt-[17px] rounded-lg relative'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    <div className='w-[217px]'>
                        <h1 className='text-black text-[18px] font-bold font-inter '>Result</h1>
                        <p className='text-[14px] text-[#818488]'>Heres what our AI came up with.</p>
                    </div>

                    <motion.div 
                        className='lg:w-[352px] text-[14px] bg-[#f3f5fe] rounded-lg mt-[20px] px-[16px] py-[14px] leading-[20px]'
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.p 
                            className='text-black opacity-100'
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 2 }}
                        >
                            Pain: You are an e-commerce business, and you want to sell your products all over the country, but you are confused about how to handle sales tax.
                            <br />
                            <br />
                            Agitate: You have no idea how much sales tax to charge your customers in each state.
                            <br />
                            <br />
                            Solution: Use TaxSol, our full stack sales tax solution, to manage your sales tax for you!
                        </motion.p>
                    </motion.div>

                    <motion.div 
                        className='lg:w-[352px] text-[14px] bg-[#f3f5fe] rounded-lg mt-[17px] px-[16px] py-[14px] leading-[20px]'
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <motion.p 
                            className='text-black opacity-100'
                            animate={{ opacity: [0, 1] }}
                            transition={{ duration: 2 }}
                        >
                            Pain: e-commerce business owners are struggling to keep up with the ever changing sales tax laws.
                            <br />
                            <br />
                            Agitate: Sales tax is a complicated, confusing
                        </motion.p>
                    </motion.div>

                    <motion.div
                        className='lg:w-[240px] lg:flex lg:flex-col hidden pl-[12px] pt-[10px] lg:h-[104px] bg-white absolute -right-[84px] top-[241px] rounded-lg'
                        whileInView={{ opacity: 1, y: 0 }}
                        initial={{ opacity: 0, y: -100 }}
                        transition={{ duration: 1 }}
                    >
                        <div className='flex gap-[4.76px]'>
                            <div className='w-[6.83px] h-[6.83px] bg-[#F23936] rounded-full' />
                            <div className='w-[6.83px] h-[6.83px] bg-[#FABB18] rounded-full' />
                            <div className='w-[6.83px] h-[6.83px] bg-[#45C646] rounded-full' />
                        </div>

                        <div className='w-[198px] mt-[23.17px]'>
                            <div className='w-[50.4px] h-[5.2px] bg-[#2B59FF] rounded-full' />
                            <div className='mt-[15.8px] flex flex-col gap-[7px]'>
                                <div className='w-full h-[5px] bg-[#E1E3E8] rounded-full' />
                                <div className='w-[174px] h-[5px] bg-[#E1E3E8] rounded-full' />
                                <div className='w-[138px] h-[5px] bg-[#E1E3E8] rounded-full' />
                            </div>
                        </div>
                    </motion.div>
                </motion.div>

                <div className='flex flex-col items-center lg:items-start gap-[42px]'>
                    <motion.div 
                        className='flex flex-col gap-[31px] w-[497px]'
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Title text='Create content efficiently and quickly with great AI writing tools' className='lg:text-[42px] text-[30px] font-outfit font-bold leading-[48px]' />
                        <SubTitle text='150k+ users. No Credit Card Required. Pro designs and writing at no cost. Start for free. Ai Writer Tool | Generate text for ecom, social media, website, sales, blogs etc.' className='lg:text-[18px] leading-[28px] font-inter opacity-70' />
                    </motion.div>

                    <motion.div 
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0 }}
                        transition={{ duration: 1 }}
                    >
                        <Button btnText='Start 14 Days Free Trial' className='bg-buttonGradient w-[214px] h-[60px] rounded-[5px] font-inter font-bold hover:bg-gradient-hover' />
                    </motion.div>
                </div>
            </div>

            <div className='xl:w-[1192px] flex lg:gap-[185px] gap-[100px] xl:flex-row flex-col items-center mt-[171px] relative '>
                <div className='bg-radial-blue w-[420px] h-[420px] absolute top-[40px] right-[420px] -z-10' />

                <motion.div 
                    className='flex flex-col items-center lg:items-start gap-[42px] w-[453px]'
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className='flex flex-col gap-[31px]'>
                        <Title text='Write what you want to convey through clear, & authentic writing' className='lg:text-[42px] text-[30px] font-outfit font-bold leading-[48px]' />
                        <SubTitle text='AI-Writer is the most accurate content generation platform and writing tool that helps you transform your text into a completely personalized.' className='lg:text-[18px] leading-[28px] font-inter opacity-70' />
                    </div>

                    <Button btnText='Start 14 Days Free Trial' className='bg-buttonGradient w-[214px] h-[60px] rounded-[5px] font-inter font-bold hover:bg-gradient-hover' />
                </motion.div>

                <motion.div
                    className='lg:w-[554px] bg-white px-[27px] pt-[17px] rounded-lg flex lg:flex-row flex-col gap-[39px]'
                    whileInView={{ opacity: 1, x: 0 }}
                    initial={{ opacity: 0, x: -100 }}
                    transition={{ duration: 1 }}
                >
                    <div className='lg:w-[112px] w-full text-[#12141D] opacity-40 flex flex-col text-[14px] font-inter gap-3'>
                        <p>Blog Outline</p>
                        <p>Blog Intro</p>
                        <p>Blog Conclusion</p>
                        <p>AIDA</p>
                        <p>PAS</p>
                        <p>Content Rewriter</p>
                    </div>

                    <div>
                        <div className='lg:w-[554px] w-full'>
                            <h1 className='text-black text-[18px] font-bold font-inter '>Result</h1>
                            <p className='text-[14px] text-[#818488]'>Heres what our AI came up with.</p>
                        </div>

                        <div className='bg-[#12141D] lg:w-[352px] lg:h-[93px] w-full mt-[21px] rounded-lg px-[17px] py-[20px]'>
                            <div className='lg:w-[312px] w-full opacity-20'>
                                <div className='w-[50.4px] h-[5.2px] bg-[#DDE2ED] rounded-full' />
                                <div className='flex flex-col mt-[15.8px] gap-[7px]'>
                                    <div className='lg:w-[312px] lg:h-[5px] w-[212px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                    <div className='lg:w-[288px] lg:h-[5px] w-[242px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                    <div className='lg:w-[254px] lg:h-[5px] w-[220px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#f8faff] lg:w-[352px] lg:h-[93px] w-full mt-[21px] rounded-lg px-[17px] py-[20px]'>
                            <div className='lg:w-[312px] w-full opacity-20'>
                                <div className='w-[50.4px] h-[5.2px] bg-[#DDE2ED] rounded-full' />
                                <div className='flex flex-col mt-[15.8px] gap-[7px]'>
                                    <div className='lg:w-[312px] lg:h-[5px] w-[212px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                    <div className='lg:w-[288px] lg:h-[5px] w-[242px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                    <div className='lg:w-[254px] lg:h-[5px] w-[220px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                </div>
                            </div>
                        </div>

                        <div className='bg-[#f8faff] lg:w-[352px] lg:h-[93px] w-full mt-[21px] rounded-lg px-[17px] py-[20px]'>
                            <div className='lg:w-[312px] w-full opacity-20'>
                                <div className='w-[50.4px] h-[5.2px] bg-[#DDE2ED] rounded-full' />
                                <div className='flex flex-col mt-[15.8px] gap-[7px]'>
                                    <div className='lg:w-[312px] lg:h-[5px] w-[212px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                    <div className='lg:w-[288px] lg:h-[5px] w-[242px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                    <div className='lg:w-[254px] lg:h-[5px] w-[220px] h-[5px] bg-[#DDE2ED] rounded-full' />
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Customers
