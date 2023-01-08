import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Link } from "gatsby"

const VoiceCalcPage = () => (
  <Layout>
    <h1>C++ Tutorials</h1>
    <p>Below are some sample slides with practice problems regarding the relevant topics. A link to the folder with all slides can be found at the bottom of the page.</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export const Head = () => <Seo title="404: Not Found" />

export default VoiceCalcPage
