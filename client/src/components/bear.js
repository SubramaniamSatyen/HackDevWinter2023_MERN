import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export function Bear() {
  return <StaticImage 
            src="../images/PolarBear.gif" 
            alt="A Walking Bear"
            placeholder="blurred"
            layout="fixed"
            width={40}
            height={40}
            />
}