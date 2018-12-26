import React from 'react'
import PropTypes from 'prop-types'

import pic01 from '../images/pic01.jpg'
import pic02 from '../images/pic02.jpg'

class Main extends React.Component {
  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="about" className={`${this.props.article === 'about' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">About</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>RBSC is a micro-dosed dining experience celebrating the intersection of food, cannabis, and community.</p>
          <p>We believe eating should be fun. Food should be elevated, dining should be communal, and that what goes into our bowls matters.</p>
          <p>Join us at the table-raise a glass, break bread, spark a joint, be a part of the ever expanding Rosebud community. </p>
          {close}
        </article>

       <article id="journey" className={`${this.props.article === 'journey' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Journey</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>It’s all in the timing, Rosebud makes sure guests get their perfect dose.
            <ul>
              <li>Appetizers & Welcome Drinks (3-5mg per serving)</li>
              <li>Marketplace Exploration</li>
              <li>1st Course (3-5mg)</li>
              <li>2nd Course (3-5mg)</li>
              <li>3rd Course (Not dosed)</li>
              <li>Dessert (Topping at 3-5 mg per serving)</li>
            </ul>
          </p>
          {close}
        </article>

        <article id="connect" className={`${this.props.article === 'connect' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Connect</h2>
          {/* <span className="image main"><img src={pic02} alt="" /></span> */}
          <p>Sign up for our mailing list and stay up to date about future RBSC programming </p>
          <p style={{textAlign:"center"}}><a className="button special" href="mailto:info@rbsc.com"> JOIN US </a></p>
          <p>For Collaborators, co- conspirators, potential partners and sponsors, reach out at <a href="mailto:info@rbsc.com">INFO@RBSC.COM</a> </p>
          <p>Looking forward to connecting - Rosebud Supper Club</p>
          <ul className="icons">
            <li><a href="https://www.instagram.com/rosebud_supperclub/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article>

        {/* <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Contact</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Name</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li><input type="submit" value="Send Message" className="special" /></li>
              <li><input type="reset" value="Reset" /></li>
            </ul>
          </form>
          <ul className="icons">
            <li><a href="https://www.instagram.com/rosebud_supperclub/" className="icon fa-instagram"><span className="label">Instagram</span></a></li>
          </ul>
          {close}
        </article> */}

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main