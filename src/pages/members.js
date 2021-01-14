import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
  <h1> Our Members </h1>
  <div style={{boxSizing: `border-box`}}>
  <h2> Theta Pledge Class </h2> Initiated Spring 2019
  <div class="row">
    <div class="column4">
      <div class="container">
          <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
              <div class="overlay">
                  <div class="text">
                    <b>Brandon Chen</b>
                    <p>Computer Science & Mathematics</p>
                    <p>Class of 2022</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="column4">
        <div class="container">
          <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
          <div class="overlay">
              <div class="text">
                <b>Jean Melo</b>
                <p>Mechanical Engineering</p>
                <p>Class of 2022</p>
              </div>
          </div>
      </div>
      </div>
      <div class="column4">
        <div class="container">
            <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
              <div class="overlay">
                  <div class="text">
                  <b>Fred Owejain</b>
                  <p>CS, Math, & EE</p>
                  <p>Class of 2022</p>
                  </div>
              </div>
          </div>
      </div>
      <div class="column4">
        <div class="container">
          <div style={{ maxWidth: `100%` }}>
            <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
          </div>
              <div class="overlay">
                  <div class="text">
                  <b>Stacy Okai</b>
                  <p>smth</p>
                  <p>Class of 2021 </p>
                  </div>
              </div>
          </div>
      </div>
  </div>

  <h1> Eta Pledge Class </h1> Initiated Fall 2018
  <div class="row">

  </div>

  <h1> Zeta Pledge Class </h1> Initiated Spring 2018
  <div class="row">

  </div>

  <h1> Epsilon Pledge Class </h1> Initiated Fall 2017
  <div class="row">

  </div>

  <h1>Delta Pledge Class </h1> Initiated Spring 2017
  <div class="row">

  </div>

  <h1> Gamma Pledge Class </h1> Initiated Fall 2016
  <div class="row">

  </div>


  <h1> Beta Pledge Class </h1> Initiated Spring 2016
  <div class="row">

  </div>

  <h1> Alpha Pledge Class </h1> Initiated Fall 2015
  <div class="row">

  </div>


  <h1> Founding Class </h1>
  <div class="row">

  </div>
  </div>
  </Layout>
)

export default IndexPage
