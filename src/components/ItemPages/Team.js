import React from "react"
import Footer from "../Footer"
import ImageCard from "../ImageCard"
import { team } from "../content/team"
// import FilteredList from "../FilteredList"

export default function Team() {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col w-full mb-12 text-center">
            <h1 className="mb-4 text-3xl font-medium tracking-widest text-gray-900 title-font">
              OUR TEAM
            </h1>
            <p className="py-4 mx-auto text-lg leading-relaxed lg:w-2/3">
              Meet the players, designers, and
              communicators committed to badminton excellence.
            </p>
          </div>
          {/* <FilteredList allItems={team} /> */}
          <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Leadership
            </h1>
          </div>
          <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "leadership")
              .map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
          </div>
          {/* <div className="flex flex-col w-full mb-10 text-center">
            <h1 className="mb-4 text-2xl font-medium text-gray-900 sm:text-2xl title-font">
            Design
            </h1>
          </div> */}
          {/* <div className="flex flex-wrap mb-16 -m-2">
            {team
              .filter((item) => item.team === "design")
              .map((item) => (
                <ImageCard key={item.id} item={item} />
              ))}
          </div> */}
          
          
        </div>
      </section>
      <Footer />
    </div>
  )
}
