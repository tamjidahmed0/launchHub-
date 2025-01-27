import React from 'react'
import Title from '../atoms/Title'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"






const Details = () => {
  return (
    <div className='mt-[88px] flex flex-col items-center justify-center'>

      <div className='xl:w-[636px]'>
        <Title text='Mixland helps you build beautiful website' className='font-outfit font-bold text-[42px] leading-[48px] text-center ' />
      </div>




      <Tabs defaultValue="headlines" className="xl:w-[1085px] mt-[83px] flex xl:flex-row flex-col gap-[49px]">

        <TabsList className="xl:w-[302px] flex flex-col justify-start gap-[10px]">
          <TabsTrigger value="headlines" className='w-full h-[53px] border border-[#282A37] rounded-lg font-inter font-bold ' >
            Blog Headlines
          </TabsTrigger>

          <TabsTrigger value="blog" className='w-full h-[53px] border border-[#282A37] rounded-lg font-inter font-bold '>
            Blog Intros
          </TabsTrigger>

          <TabsTrigger value="intros" className='w-full h-[53px] border border-[#282A37] rounded-lg font-inter font-bold '>
            Content Rewriter
          </TabsTrigger>

          <TabsTrigger value="ads" className='w-full h-[53px] border border-[#282A37] rounded-lg font-inter font-bold '>
            Facebook Ads
          </TabsTrigger>

          <TabsTrigger value="description" className='w-full h-[53px] border border-[#282A37] rounded-lg font-inter font-bold '>
            Product Description
          </TabsTrigger>

          <TabsTrigger value="formula" className='w-full h-[53px] border border-[#282A37] rounded-lg font-inter font-bold '>
            PAS Copywriting Formula
          </TabsTrigger>



        </TabsList>

        <TabsContent value="headlines" className="lg:w-[734px] bg-[#282A37] rounded-lg px-[19px] py-[16px]">
          <div className="flex gap-[8px] ml-[10px]">
            <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full" />
          </div>

          <div className="mx-[31px] my-[25px]">
            <Title text="4 Blog Headlines Generated" className="font-inter font-bold text-[16px] leading-[24px] opacity-50 text-white" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Create original content that ranks for SEO" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="The More Important the Work, the More Important the Rest" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="How to design a product that can grow itself 10x in year" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
          </div>
        </TabsContent>



        <TabsContent value="blog" className="lg:w-[734px] bg-[#282A37] rounded-lg px-[19px] py-[16px]">
          <div className="flex gap-[8px] ml-[10px]">
            <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full" />
          </div>

          <div className="mx-[31px] my-[25px]">
            <Title text="4 Blog Headlines Generated (Demo)" className="font-inter font-bold text-[16px] leading-[24px] opacity-50 text-white" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="Create original content that ranks for SEO (Demo)" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="Any mechanical keyboard enthusiasts in design? (Demo)" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="The More Important the Work, the More Important the Rest (Demo)" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="How to design a product that can grow itself 10x in year (Demo)" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="Any mechanical keyboard enthusiasts in design? (Demo)" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
          </div>

        </TabsContent>


        <TabsContent value="intros" className="lg:w-[734px] bg-[#282A37] rounded-lg px-[19px] py-[16px]">
          <div className="flex gap-[8px] ml-[10px]">
            <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full" />
          </div>

          <div className="mx-[31px] my-[25px]">
            <Title text="Here are 4 Generated Blog Headlines for Inspiration" className="font-inter font-bold text-[16px] leading-[24px] opacity-50 text-white" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="How to Create Original Content That Boosts Your SEO Ranking" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="Exploring the Fascinating World of Mechanical Keyboards" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="Why Rest is Just as Important as Work in Design" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="Designing Products That Scale: A Guide for the Next Big Thing" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />

            <Title text="What Makes Mechanical Keyboards Popular Among Designers?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
          </div>

        </TabsContent>

        <TabsContent value="ads" className="lg:w-[734px] bg-[#282A37] rounded-lg px-[19px] py-[16px]">
          <div className="flex gap-[8px] ml-[10px]">
            <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full" />
          </div>

          <div className="mx-[31px] my-[25px]">
            <Title text="4 Blog Headlines Generated" className="font-inter font-bold text-[16px] leading-[24px] opacity-50 text-white" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Create original content that ranks for SEO" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="The More Important the Work, the More Important the Rest" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="How to design a product that can grow itself 10x in year" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
          </div>
        </TabsContent>

        <TabsContent value="description" className="lg:w-[734px] bg-[#282A37] rounded-lg px-[19px] py-[16px]">
          <div className="flex gap-[8px] ml-[10px]">
            <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full" />
          </div>

          <div className="mx-[31px] my-[25px]">
            <Title text="4 Blog Headlines Generated" className="font-inter font-bold text-[16px] leading-[24px] opacity-50 text-white" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Create original content that ranks for SEO" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="The More Important the Work, the More Important the Rest" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="How to design a product that can grow itself 10x in year" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
          </div>
        </TabsContent>

        <TabsContent value="formula" className="lg:w-[734px] bg-[#282A37] rounded-lg px-[19px] py-[16px]">
          <div className="flex gap-[8px] ml-[10px]">
            <div className="w-[10px] h-[10px] bg-[#F23936] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#FABB18] rounded-full" />
            <div className="w-[10px] h-[10px] bg-[#45C646] rounded-full" />
          </div>

          <div className="mx-[31px] my-[25px]">
            <Title text="4 Blog Headlines Generated" className="font-inter font-bold text-[16px] leading-[24px] opacity-50 text-white" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Create original content that ranks for SEO" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="The More Important the Work, the More Important the Rest" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="How to design a product that can grow itself 10x in year" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
            <div className="w-full h-[1px] bg-[#313342] mt-[20px]" />
            <Title text="Any mechanical keyboard enthusiasts in design?" className="font-inter font-bold text-[16px] leading-[24px] text-white mt-[19px]" />
          </div>
        </TabsContent>


      </Tabs>


    </div>
  )
}

export default Details








