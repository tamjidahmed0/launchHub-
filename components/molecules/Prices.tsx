import * as motion from "motion/react-client"
import Title from '../atoms/Title'
import SubTitle from '../atoms/SubTitle'
import SubScription from '../atoms/card/SubScription'

const Prices = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <motion.div
                className='xl:w-[465px] w-full mt-[88px]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <Title text='Make the wise decision for your business' className='font-outfit font-bold text-[42px] text-center leading-[48px] text-white' />
                <SubTitle text='Choose from our affordable 3 packages' className='font-inter text-[18px] leading-[28px] text-center mt-[20px] text-[#FAFAFA] opacity-70' />
            </motion.div>

            <motion.div
                className='mt-[67px] grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[24px]'
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                <SubScription plan='Starter Plan' price='$29' />
                <SubScription plan='Basic Plan' className='bg-buttonGradient' price='$79' />
                <SubScription plan='Premium plan' price='$129' />
            </motion.div>
        </div>
    )
}

export default Prices
