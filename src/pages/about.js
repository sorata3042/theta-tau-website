import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h1> About Us </h1>
    <div className="row">
      <h2>"Whatsoever thy hand findeth to do, do it with thy might;"</h2>
      <div className="image">
        <div style={{ maxWidth: `100%` }}>
          <Image alt="Theta Tau Crest" filename="ThetaTau.png" />
        </div>
      </div>
      <div className="column">
        <p>Theta Tau is the oldest, largest, and foremost Fraternity for Engineers.
        Since its founding at the University of Minnesota in 1904,
        over 35,000 have been initiated over the years.
        With emphasis on quality and a strong fraternal bond,
        the Fraternity has chapters only at ABET accredited schools and limits
        the number of student members in any one of its chapters across the nation.
        </p>
        <h3> Our Purpose </h3>
        <p>
        The purpose of Theta Tau is to develop and maintain a high standard of professional interest among its members, and to unite them in a strong bond of fraternal fellowship.
        </p>
        <h3>Our Chapter</h3>
        <p>
        The Omega Delta chapter of Theta Tau was officially installed on May 21, 2016.
        We strive to combine the Lasallian goals of Faith, Service,
        and Community with Theta Tau's goals of brotherhood, professional development, and community service.
        </p>
      </div>
    </div>
    <div className="row">
      <div className="column2">
        <div style={{ maxWidth: `100%` }}>
          <Image alt="Faculty Adviser" filename="FacultyAdviser.jpg" />
        </div>
      </div>
      <div className="column2">
        <h3>Our Faculty Advisor</h3>
        <p>
        Professor Gene McGinnis is an Associate Professor of Civil Engineering.
        Mr. McGinnis holds a B.S. and M.S. from Memphis State University.
        </p>
        <p>
        <b>Phone:</b> (901) 321-3279
        <br></br>
        <b>E-mail:</b> <a href="mailto:gmcginni@cbu.edu">gmcginni@cbu.edu</a>
        <br></br>
        <b>Office:</b> Nolan 130
        </p>
      </div>
    </div>

  </Layout>
)

export default IndexPage
