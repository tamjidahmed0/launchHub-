import React from 'react'
import Button from '../Button'

const SubScription = ({
    className,
    plan,
    price
}:{
    className?:string,
    plan: string,
    price: string
}) => {
  return (
    <div className="w-[330px] bg-[#282A37] rounded-lg py-[30px] pl-[30px] pr-[50px] shadow-lg">
                <h3 className="text-[16px]">{plan}</h3>
                <p className="text-[42px] font-outfit font-bold text-white  leading-[48px] mt-[28px]">{price}<span className="text-[18px] font-light ">/month</span></p>
                <p className="text-[14px] text-white opacity-70 font-inter leading-[20px] font-light">This package is suitable for teams 1-15 people.</p>


                <div className='mt-[42px]'>

                    <h4 className="text-[16px] font-bold font-inter">What’s included:</h4>
                    <ul className="text-[16px] font-inter leading-[34px] opacity-70 text-white space-y-2  mt-[16px]">
                        <li>10 GB Dedicated Hosting Free</li>
                        <li>Best for Developers, Freelancers</li>
                        <li>1 Year Support</li>
                    </ul>

                    <Button btnText='Get Started' className={`w-[249px] h-[55px] mt-[98px] font-inter font-bold rounded-lg border border-[#12141D] hover:bg-gradient-hover ${className}`} />
                </div>



            </div>
  )
}

export default SubScription