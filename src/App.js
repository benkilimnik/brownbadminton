import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import {navItems} from "./components/content/navitems"

// Components, Item Pages
import Home from "./components/ItemPages/Home"
import Team from "./components/ItemPages/Team"
// import News from "./components/ItemPages/News"
// import About from "./components/ItemPages/About"
// import Progress from "./components/ItemPages/Progress"
import Gallery from "./components/ItemPages/Gallery"
import Sponsors from "./components/ItemPages/Sponsors"

const App = () => (
  <BrowserRouter>
    <Navbar navItems={navItems}/>
    {/* {allItems.map((item) => (
      <Route id={item.id} path={item.navLink} component={item.component} />
    ))} */}
    <Route exact path="/" component={Home} />
    <Route exact path="/home" component={Home} />
    <Route exact path="/gallery" component={Gallery} />
    <Route exact path="/team" component={Team} />
    {/* <Route exact path="/news" component={News} /> */}
    <Route exact path="/sponsors" component={Sponsors} />
  </BrowserRouter>
)

export default App
