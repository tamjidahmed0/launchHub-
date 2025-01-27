import React from 'react'
import Image from 'next/image'

const TwitterCard = ({
    ImageUrl,
    Name,
    userName,
    Content,
    Hashtag
}: {
    ImageUrl: string,
    Name: string,
    userName: string,
    Content: string,
    Hashtag: string
}) => {
    return (
        <div className='bg-white px-[20.5px] py-[25px] rounded-lg'>
            <div className='flex justify-between text-[#12141D]'>
                <div className='flex  gap-[11px]'>
                    <Image src={ImageUrl} width={43} height={43} alt='profile' className='w-[43px] h-[43px]' />
                    <div className='flex flex-col gap-[3px]'>
                        <h1 className='text-[16px] font-inter leading-[24px]'>{Name}</h1>
                        <span className='text-[13px] font-inter leading-[20px]'>@{userName}</span>
                    </div>
                </div>
                <div>
                    <Image src={'/assets/twitter.png'} width={17.53} height={14.17} alt='twitter' className='w-[17.53px] h-[14.17px]' />
                </div>
            </div>
            <div className='mt-[25px]'>
                <p className='text-[#12141D] text-[16px] font-inter leading-[24px]'>{Content}
                    <br />
                    <span className='text-[#0EA5E9]'>#{Hashtag}</span> 
                </p>
            </div>
        </div>
    )
}

export default TwitterCard