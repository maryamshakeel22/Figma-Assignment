import React from 'react'
import Image from 'next/image'

const SecSection = () => {
  return (
    <div>
        <section className="text-[#212529]">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-[#212529]">
      Project <br /> Management
      </h1>
      <p className="mb-8 leading-relaxed text-[12px]">
      Images, videos, PDFs and audio files are supported. Create math expressions and diagrams directly from the app. Take photos with the mobile app and save them to a note.
      </p>
      <button className="inline-flex items-center text-[10px] bg-[#4F9CF9] border-0 p-[10px] focus:outline-none text-[#FFFFFF] rounded text-base mt-4 md:mt-0">
      Get Started
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
  <div className="bg-[#C4DEFD] w-full max-w-[424px] h-[249px] md:h-[320px] sm:h-[250px] ml-auto">
</div>
</div>
  </div>
</section>

<section className="text-gray-600 body-font">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image
            src={'/2ndsec.png'}
            alt=''
            width={510}
            height={451}
      />
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
      Work together
      </h1>
      <p className="mb-8 leading-relaxed text-[12px]">
      With whitepace, share your notes with your colleagues and collaborate on them.
You can also publish a note to the internet and share the URL with others.

      </p>
      <div className="flex justify-center">
      <button className="inline-flex items-center text-[10px] bg-[#4F9CF9] border-0 p-[10px] focus:outline-none text-[#FFFFFF] rounded text-base mt-4 md:mt-0">
      Try it now
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
    </div>
  </div>
</section>

    </div>
  )
}

export default SecSection