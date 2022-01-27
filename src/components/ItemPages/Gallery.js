import React from "react"
import Footer from "../Footer"
import {
a,
c,
d,
r,
f,
g,
h,
i,
j,
p,
l,
m,
} from "../content/images"
// import FilteredList from "../FilteredList"

export default function Gallery() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              OUR TEAM
            </h1>
            <p className="py-4 mx-auto text-lg leading-relaxed lg:w-2/3">
              Meet the players committed to making the Brown Badminton Club the best it can be. 
            </p>
          </div>
          {/* <FilteredList allItems={team} /> */}
          {/* <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
              Faculty and Industry Advisors
            </h1>
          </div> */}


          <div className="flex flex-wrap mb-16 -m-2">

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 py-12 rounded-2xl lg:grid-cols-3">
            <img
              className="object-cover object-center rounded"
              alt="logo"
              src={a}
            />
         
            {/* <img
              className="object-cover object-center rounded"
              alt="logo"
              src={b}
            /> */}
                <img
              className="object-cover object-center rounded"
              alt="logo"
              src={c}
            />
                <img
              className="object-cover object-center rounded"
              alt="logo"
              src={d}
            />
                 <img
              className="object-cover object-center rounded"
              alt="logo"
              src={r}
            />
                 <img
              className="object-cover object-center rounded"
              alt="logo"
              src={f}
            />
                      <img
              className="object-cover object-center rounded"
              alt="logo"
              src={g}
            />
                      <img
              className="object-cover object-center rounded"
              alt="logo"
              src={h}
            />
                      <img
              className="object-cover object-center rounded"
              alt="logo"
              src={i}
            />
                      <img
              className="object-cover object-center rounded"
              alt="logo"
              src={j}
            />
                      <img
              className="object-cover object-center rounded"
              alt="logo"
              src={p}
            />
                      <img
              className="object-cover object-center rounded"
              alt="logo"
              src={l}
            />
                          <img
              className="object-cover object-center rounded"
              alt="logo"
              src={m}
            />
          </div>

            {/* {team
              .filter((item) => item.team === "Advisor")
              .map((item) => (
                <ImageCard key={item.id} item={item} />
              ))} */}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
