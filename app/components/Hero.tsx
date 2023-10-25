"use client";
import * as React from "react";

import { useEffect, useRef } from "react";
import { HeroProps } from "@/types";
// import { UpArrowIcon } from ".";
import Image from "next/image";
// import UpArrowMobile from "@/utils/UpArrowMobile";

const Hero = ({ title, text, type }: HeroProps) => {

    const [device, setDevice] = React.useState('')
    const titleRef = useRef<HTMLHeadingElement>(null);
    const videoRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLParagraphElement>(null);
    useEffect(() => {
      const titleElement = titleRef.current;
      const textElement = textRef.current;
      const videoElement = videoRef.current;

      if (titleElement && textElement && videoElement) {
        titleElement.classList.add("animate-text");
        textElement.classList.add("animate-text");
        videoElement.classList.add("animate-text");
      }
    }, []);

    useEffect(() => {
      if (
        (navigator.userAgent.indexOf("Opera") ||
          navigator.userAgent.indexOf("OPR")) !== -1
      ) {
        setDevice('opera');
      } else if (navigator.userAgent.indexOf("Edg") !== -1) {
        setDevice('edge');
      } else if (navigator.userAgent.indexOf("Chrome") !== -1) {
        setDevice('chrome');
      } else if (navigator.userAgent.indexOf("Safari") !== -1) {
        setDevice('safari');
      } else if (navigator.userAgent.indexOf("Firefox") !== -1) {
        setDevice('firefox');
      }

    }, [device])
    return (
      <div className='w-[100%] h-[100%] mt-[1.09375vw] '>
        <div className="sm:hidden h-auto pb-2">
          <div className="block sm:hidden">
            <div className="h-[42vh] flex items-end justify-start ml-[8vw]">
              <div className="flex flex-col">
                <h1 className="text-[12.8vw] font-sofia text-[#333] font-semibold ">Gro</h1>
                <h3 className=" font-sofia text-[#333] text-[7.46vw] font-semibold ">Premium</h3>
              </div>

            </div>
          </div>
          <div className={` ${device !== 'safari' ? 'h-[35vh]' : "h-[33vh]"} flex justify-end items-center flex-col sm:hidden`}>
            <div className='animate-bounce mb-[-3vw] '>
              {/* <UpArrowMobile /> */}
            </div>
            <h3 className='font-sofia text-[#333] text-[4.8vw] font-semibold'>
              Discover Premium
            </h3>
            <div className='flex gap-[4vw] flex-row items-center'>
              <div className='h-[7.7vw] w-[7.2vw]'><Image
                fill={true} className="image" priority
                src='/Star.png'
                alt='img'
              />
              </div>
              <div className='h-[7.7vw] w-[7.2vw]'><Image
                fill={true} className="image" priority
                src='/Appicon.png'
                alt='img'
              />
              </div>
              <div className='h-[7.7vw] w-[9vw] items-center flex mt-1'>
                <Image
                fill={true} className="image" priority
                src='/smile.png'
                alt='img'
              /></div>

            </div>

          </div></div>
      </div>
    )
  }


export default Hero