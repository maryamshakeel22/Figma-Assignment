import React from 'react'
import SecSection from './2ndSect'
import ThirdSec from './3rdSec'
import ForthSec from './4thSec'

const Hero = () => {
  return (
    <div>
        <section className="text-[#FFFFFF] bg-[#043873] body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#FFFFFF]">
      Get More Done with whitepace
      </h1>
      <p className="mb-8 leading-relaxed text-[12px]">
      Project management software that enables your teams to collaborate, plan, analyze and manage everyday tasks
      </p>
      <button className="inline-flex items-center text-[10px] bg-[#4F9CF9] border-0 p-[10px] focus:outline-none text-[#FFFFFF] rounded text-base mt-4 md:mt-0">
      Try Whitepace free
      <svg
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        className="w-4 h-4 ml-1"
        viewBox="0 0 24 24"
      >
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    </button>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
  <div className="bg-[#C4DEFD] w-full max-w-[524px] h-[249px] md:h-[320px] sm:h-[250px]">
  </div>
</div>
  </div>
</section>
<SecSection />
<ThirdSec />
<ForthSec />
    </div>
  )
}

export default Hero