import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"
import SlideShow from "../components/slideshow"


const CPPPage = () => (
  <Layout>
    <h1>C++ Tutorials</h1>
    <p>Below are some sample slides with practice problems regarding the relevant topics. A link to the folder with all slides can be found at the bottom of the page.</p>
    <SlideShow title="Introduction" link="https://docs.google.com/presentation/d/1kNzqRpuJvFKLHwxSIx6kW0YV-g-gfTHkvyk_J6XBVyw/edit#slide=id.g13d7f665b22_0_0"/>
    <SlideShow title="Classes" link="https://docs.google.com/presentation/d/1iMSIrfNHwjTg0QhjR1kviB6sL6OowjtkyILOyG4C2-s"/>
    <SlideShow title="Time Complexity" link="https://docs.google.com/presentation/d/1D68nI51wrBko-SHZ17WzBtTPjaGTLs6l4JkvyarwpyI"/>
    <SlideShow title="Recursion" link="https://docs.google.com/presentation/d/1UH5UIjO1t3LQ0uAjXASPX4L4MmEmDSHznfFTDqvW2ec"/>
    <br/>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="C++" />

export default CPPPage
