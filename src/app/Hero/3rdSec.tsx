import React from 'react'

const ThirdSec = () => {
  return (
    <div>
        <section className='bg-[#043873] text-[#FFFFFF] '>
            <div className='py-24 px-5 text-center '>
            <h1 className='text-center title-font sm:text-4xl text-3xl mb-4 font-bold'>
            Your work, everywhere you are
            </h1>
            <p className='pb-8 text-[12px] text-center'>
            Access your notes from your computer, phone or tablet by synchronising with various services, including whitepace, Dropbox and OneDrive. <br />The app is available on Windows, macOS, Linux, Android and iOS. A terminal app is also available!
            </p>
            <button className="inline-flex items-center text-[10px] bg-[#4F9CF9] border-0 p-[10px] px-6 focus:outline-none text-[#FFFFFF] rounded text-base mt-4 md:mt-0">
            Try Taskey
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
        </section>
    </div>
  )
}

export default ThirdSec