'use client'
import React, { useEffect, useState } from 'react'
import Navigation from "@/components/atoms/Navigation";
import Image from 'next/image';
import Button from '../atoms/Button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import Link from 'next/link';




const Header = () => {

  const [scrolled, setScrolled] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // Track the scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);




  const handleOpen = () => {
    setIsOpen(true);
  };






  return (
    <div className={`flex items-center lg:justify-around justify-between px-6 lg:px-0  mt-[21px] sticky top-0 z-10 ${scrolled ? 'bg-black h-20' : 'bg-transparent'}`}>
      <div className='flex items-center gap-[51px]'>
        <Image src={'/assets/logo.png'} width={78} height={32} alt='logo' />
        <Navigation />
      </div>

      <div className='hidden lg:flex gap-[10px] capitalize text-[16px]'>
        <Button btnText='sign in' className='w-[92px] h-[50px] border border-opacity-[30%] rounded-[5px]' />
        <Button btnText='Get Started Free' className='w-[167px] h-[50px] rounded-[5px] bg-buttonGradient' />
      </div>

      <div className='lg:hidden'>
        <Menu size={30} onClick={handleOpen} />


        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger />
          <SheetContent>
            <SheetHeader>
              <SheetTitle></SheetTitle>
              <SheetDescription>

                <div className='flex text-white flex-col gap-9 text-[16px] capitalize font-medium '>
                  <Link href={''}>demo</Link>
                  <Link href={''}>About</Link>
                  <Link href={''}>blog</Link>
                  <Link href={''}>pages</Link>
                  <Link href={''}>contact</Link>
                </div>

              </SheetDescription>
            </SheetHeader>
          </SheetContent>
        </Sheet>



      </div>
    </div>
  )
}

export default Header