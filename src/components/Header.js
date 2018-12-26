import React from 'react'
import PropTypes from 'prop-types'

import logo from '../images/rosebud-large-logo.png'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <img src={logo} style={{width:'90%', marginTop:'13%'}}></img>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Rosebud</h1>
                <p>More than infused dinner. This is community.</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('journey')}}>Journey</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('connect')}}>Connect</a></li>
                {/* <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}/>Contact</a></li> */}
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
