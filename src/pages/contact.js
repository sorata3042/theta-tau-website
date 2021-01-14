import React from "react"
//import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ReCAPTCHA from "react-google-recaptcha"

const SecondPage = () => (
  <Layout>
    <SEO title="Contact Me" />
        <div className="content">
          <h1>Contact Me</h1>
          <form
            name="contact"
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            data-netlify-recaptcha="true"
            action="/thank-you"
          >
          <input type="hidden" name="form-name" value="contact"/>
            <div class="hidden" style= {{ display:'none' }}>
                <label>Don’t fill this out if you’re human <input type="hidden" name="bot-field"/></label>
            </div>
            <div>
              <label className="label" htmlFor={'name'}>
                Name
              </label>
            </div>
            <div>
              <input
                type={'text'}
                name={'name'}
                id={'name'}
                required={true}
              />
            </div>
            <div>
              <label className="label" htmlFor={'email'}>
                Email
              </label>
            </div>
            <div>
              <input
                className="input"
                type={'email'}
                name={'email'}
                id={'email'}
                required={true}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor={'subject'}>
                Subject
              </label>
            </div>
            <div>
              <input
                className="input"
                name={'subject'}
                id={'subject'}
                required={false}
              />
            </div>
            <div className="field">
              <label className="label" htmlFor={'message'}>
                Message
              </label>
            </div>
            <div>
              <textarea
                className="textarea"
                name={'message'}
                id={'message'}
                required={true}
              />
            </div>
            <ReCAPTCHA sitekey="YOUR_SITE_KEY" />
            <div className="field">
              <button class="button" type="submit">
                Send
              </button>
            </div>
          </form>
        </div>
  </Layout>
)

export default SecondPage
