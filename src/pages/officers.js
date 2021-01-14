import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <div class="row">
      <div className="column2">
        <div style={{ maxWidth: `50%` }}>
          <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
        </div>
        <div className="column2">
          <h2>Regent</h2>
          Megan Brown
          <a href="mailto:mbrown27@cbu.edu">mbrown27@cbu.edu</a>
          "I have a cat named Paul!!!"
        </div>
      </div>
      <div className="column2">
        <div style={{ maxWidth: `50%` }}>
          <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
        </div>
        <div className="column2">
          <h2>Regent</h2>
          Megan Brown
          <a href="mailto:mbrown27@cbu.edu">mbrown27@cbu.edu</a>
          "I have a cat named Paul!!!"
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
