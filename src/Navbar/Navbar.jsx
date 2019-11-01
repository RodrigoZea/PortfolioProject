import React from "react"
import '../main.scss'
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
                        <div className="square" />
                        <div className="square" />
                        <div className="square" />
                    </div>
                </div>
            </nav>
        )
    }
}