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
          <p>Rosebud Supper Club is a micro-dosed luxury dining experience, and a space to celebrate the intersection of fine dining & cannabis.</p>
          <p>Always family-style, our shared dinners are places where you can break bread with friends, family, and some of the most interesting people in your city.</p>
          <p>Designed to encourage conversation amongst guests, Rosebud Supper Club is a uniquely elevated social and culinary experience.</p>
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

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
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
        </article>

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