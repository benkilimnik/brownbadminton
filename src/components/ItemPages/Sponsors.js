import React from "react"
import Footer from "../Footer"
import {
  // lining,
  bears2,
} from "../content/images"

const Sponsors = () => (
  <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-col w-full mb-12 text-center">
        <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
          Proudly Sponsored by Brown University
        </h1>
        {/* <p className="py-4 mx-auto text-lg leading-relaxed lg:w-2/3">
              Meet the players committed to making the Brown Badminton Club the best it can be. 
            </p> */}
      </div>
      <div className="flex flex-col items-center">
        <img
          className="object-cover object-center rounded max-h-64"
          alt="logo"
          src={bears2}
        />
        {/* <img
            className="object-cover object-center rounded"
            alt="logo"
            src={lining2}
          /> */}
      </div>
    </div>
    <Footer />
  </section>
)

export default Sponsors
