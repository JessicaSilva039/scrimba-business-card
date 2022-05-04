import React from "react"
import Info from "./card/Info.js"
import About from "./card/About.js"
import Interests from "./card/Interests.js"
import Footer from "./card/Footer.js"

export default function App(){
    return(
        <div className="app">
            <Info />
            <About />
            <Interests />
            <Footer />
        </div>
    )
}