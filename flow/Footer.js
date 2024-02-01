import React from "react"
import arrowImage from "../assets/images/arrow.png"

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="relative main-container mt-10 bg-slate-900">
      <button
        onClick={handleScrollToTop}
        className="absolute top-[-17px] md:top-[-20px] left-1/2 bg-custom-orange p-2 border-2 md:border-4 border-white rounded-full transform -translate-x-1/2 animate-bounce-y-2"
      >
        <img
          src={arrowImage}
          width={24}
          height={24}
          alt="arrow-up"
          className="w-4 md:w-6"
        />
      </button>

      <div className="max-w-7xl mx-auto py-6">
        <div className="flex items-start md:items-center justify-between mt-10">
          <div>
            <h3 className="text-custom-orange text-sm md:text-lg font-medium">
              Phone Number
            </h3>
            <p className="text-gray-200 text-xs md:text-sm mt-2">
              +111 6 46 05 26 56
            </p>
          </div>
          <div>
            <h3 className="text-custom-orange text-sm md:text-lg font-medium">
              Email Address
            </h3>
            <a href="mailto:info@floworksoftware.com">
              <p className="text-gray-200 text-xs md:text-sm mt-2">
                info@floworksoftware.com
              </p>
            </a>
          </div>
          <div>
            <h3 className="text-custom-orange text-sm md:text-lg font-medium">
              Local Address
            </h3>
            <p className="text-gray-200 text-xs md:text-sm mt-2 w-[100px] md:w-full">
              United State, Casablanca, 72
            </p>
          </div>
        </div>

        <div className="flex flex-col-reverse md:flex-row md:items-center justify-between mt-5 md:mt-10">
          <div className="mt-4 md:mt-0">
            <h3 className="font-medium text-white text-xl md:text-2xl">
              Flowork
            </h3>
            <p className="text-gray-200 mt-3 text-xs md:text-sm max-w-sm">
              Lorem ipsum is placeholder text commonly used in the graphic,
              print, and publishing .
            </p>
            <p className="text-gray-200 text-[10px] md:text-xs mt-4 md:mt-8">
              Copyright 2023 - Flowork Software Corporation - All Rights
              Reserved
            </p>
          </div>

          <div className="flex justify-between mt-2 md:mt-0 md:gap-x-10">
            <div>
              <h3 className="text-custom-orange text-sm md:text-lg font-medium">
                Company
              </h3>
              <ul className="text-gray-200 text-xs md:text-sm mt-3 md:mt-4">
                <li className="mt-2">About</li>
                <li className="mt-2">Our Customers</li>
                <li className="mt-2">Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-custom-orange text-sm md:text-lg font-medium">
                Useful links
              </h3>
              <ul className="text-gray-200 text-xs md:text-sm mt-3 md:mt-4">
                <li className="mt-2">Media</li>
                <li className="mt-2">Affiliate program</li>
                <li className="mt-2">Contact Us</li>
              </ul>
            </div>
            <div>
              <h3 className="text-custom-orange text-sm md:text-lg font-medium">
                Legal
              </h3>
              <ul className="text-gray-200 text-xs md:text-sm mt-3 md:mt-4">
                <li className="mt-2">Terms</li>
                <li className="mt-2">Privacy</li>
                <li className="mt-2">Cookies</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
