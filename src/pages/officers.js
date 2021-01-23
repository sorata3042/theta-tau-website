import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <h1> Our Executive Council </h1>
    <div class="row">
      <div class="column2">
        <div className="column5">
          <Image filename="No_Composite.jpg" />
        </div>
        <div className="column5">
          <h3>Regent</h3>
          Faythe Watkins
          <p> <a href="mailto:mbrown27@cbu.edu">vwatkin1@cbu.edu</a></p>
        </div>
      </div>
      <div class="column2">
        <div className="column5">
          <Image filename="Composite_78.jpg" />
        </div>
        <div className="column5">
          <h3>Vice Regent</h3>
          Mark Novy
          <p> <a href="mailto:mbrown27@cbu.edu">mnovy@cbu.edu</a></p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column2">
        <div className="column5">
          <Image filename="Composite_79.jpg" />
        </div>
        <div className="column5">
          <h3>Scribe</h3>
          Victoria Roe
          <p> <a href="mailto:mbrown27@cbu.edu">vroe@cbu.edu</a></p>
        </div>
      </div>
      <div class="column2">
        <div className="column5">
          <Image filename="No_Composite.jpg" />
        </div>
        <div className="column5">
          <h3>Treasurer</h3>
          Brandon Chen
          <p> <a href="mailto:mbrown27@cbu.edu">bchen@cbu.edu</a></p>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="column2">
        <div className="column5">
          <Image filename="No_Composite.jpg" />
        </div>
        <div className="column5">
          <h3>Corresponding Secretary</h3>
          Koung Nonhprasith
          <p> <a href="mailto:mbrown27@cbu.edu">knonhpra@cbu.edu</a></p>
        </div>
      </div>
      <div class="column2">
        <div className="column5">
          <Image filename="Composite_69.jpg" />
        </div>
        <div className="column5">
          <h3>Marshall</h3>
         Megan Brown
          <p> <a href="mailto:mbrown27@cbu.edu">mbrown27@cbu.edu</a></p>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
