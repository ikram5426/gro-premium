import React from 'react'
import { Hero } from ".";
import MobileVideo from "./MobileVideo";
const PageSwipe = () => {
  return (
    <div style={{ height: "100vh" }}>
      <div className='scroll-container block sm:hidden'>
        <div className='scroll-area'>
          <Hero title="Gro" text="A task manager" type='hero' link='' />
        </div>
        <div className='scroll-area'>
          <MobileVideo link="Video 1" />
        </div>
        <div className='scroll-area'>
          <MobileVideo link="Video 2" />
        </div>
        <div className='scroll-area'>
          <MobileVideo link="Video 3" />
        </div>
        <div className='scroll-area'>
          <MobileVideo link="Video 4" />
        </div>
        <div className='scroll-area'>
          <MobileVideo link="Video 5" />
        </div>

      </div>
    </div>
  )
}

export default PageSwipe



