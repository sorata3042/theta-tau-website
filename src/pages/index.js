import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="parallax">
        <div className="header">
            <span style={{background:`#000`, opacity: `0.8`}}><b> Theta Tau </b></span>
        </div>
        <div className="subheader">
            <span style={{background:`#000`, opacity: `0.8`}}><b> Omega Delta Chapter  </b></span>
        </div>
    </div>
    <div style={{textAlign:`center`, fontSize:`20px`}} >
        <br></br>
        Theta Tau is a Co-ed Professional Engineering Fraternity seeking to excel in professionalism, brotherhood, and service. Our brothers are passionate and motivated engineers dedicated to their brothers and the fraternity as a whole.
        <br></br>
        <h2 style={{ marginTop: `1.45rem`}}> Our Pillars </h2>
        <div class="row">
            <div class="column3" >
                <h3>Brotherhood</h3>
                <div style={{ maxWidth: `100%` }}>
                  <Image filename="brotherhood.jpg" />
                </div>
            </div>
            <div class="column3">
                <h3>Professionalism</h3>
                <div style={{ maxWidth: `100%` }}>
                  <Image filename="professionalism.png" />
                </div>
            </div>
            <div class="column3">
                <h3>Service</h3>
                <div style={{ maxWidth: `100%` }}>
                  <Image alt="Habitat for Humanity" filename="service.jpg" />
                </div>
            </div>
        </div>
    </div>
  </Layout>
)

export default IndexPage
