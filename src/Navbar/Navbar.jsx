import React from "react"
import '../main.scss'
import 'font-awesome/css/font-awesome.min.css'
var logo = require('../../resources/images/logo.png')

export default class Navbar extends React.Component {
    render() {
        return(
            <nav className="horizontalNavbar">
                <div className="navBackground">
                    
                </div>
                <div className="navIcons">
                    <img src={logo} className="logo" />
                    <div className="socialIcons">
                        <a href="https://www.github.com/rodrigozea" target="_blank">
                            <i className="fa fa-github fa-fw" />
                        </a>

                        <a href="https://www.twitter.com/rodrigozea" target="_blank">
                            <i className="fa fa-twitter fa-fw" />
                        </a>

                        <a href="mailto:zearodrigo37@gmail.com" target="_blank">
                            <i className="fa fa-envelope fa-fw" />
                        </a>
                    </div>
                </div>
            </nav>
        )
    }
}