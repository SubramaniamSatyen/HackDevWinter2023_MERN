import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Polls",
    url: "polls",
    description:
      "A page to vote in various polls and visualize the results of polls.",
  },
  {
    text: "C++ Tutorials",
    url: "C++",
    description:
      "A reference to C++ slides and practice problems I've produced.",
  },
  {
    text: "Arduino + Tensorflow: Voice Calculator",
    url: "VoiceCalculator",
    description:
      "A blog post documenting the development process and results from creating a voice activated calculator using Arduino, PyFirmata, and Tensorflow.",
  },
  {
    text: "Markdown Example With Gatsby",
    url: "markdown",
    description:
      "An example page generated using the markdown format and Gatsby framework.",
  },
]

const samplePageLinks = [
  { text: "Resume", url: "https://drive.google.com/file/d/1Wcse6EuYeajih3LmB44Iu7Fy8rbFRYm8/view?usp=share_link" },
  { text: "Github", url: "https://github.com/SubramaniamSatyen" },
  { text: "LinkedIn", url: "https://www.linkedin.com/in/satyen-sub" }
]

const moreLinks = [
  { 
    text: "Join us on Discord",
    url: "https://discord.com/invite/3GSPECbCnE" },
  {
    text: "Hack ACM",
    url: "https://hack.uclaacm.com/",
  },
  {
    text: "HOTH",
    url: "https://hoth.uclaacm.com/",
  },
  {
    text: "ACM UCLA",
    url: "https://www.uclaacm.com/",
  }
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <div className={styles.textCenter}>
      <h1>
        Welcome to <b>Satyen's Simple Site!</b>
      </h1>
      <p className={styles.intro}>
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <a href={`${link.url}${utmParameters}`}>{link.text}</a>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
      </p>
    </div>
    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <Link
            className={styles.listItemLink}
            to={link.url}
          >
            {link.text}
          </Link>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
