import React from "react"
import ReactDOM from "react-dom"
import EarthHome from './EarthHome/EarthHome'
import Navbar from './Navbar/Navbar'
import SideNavbar from './SideNavbar/SideNavbar'
import ContinueButton from './ContinueButton/ContinueButton'
import SlideContainer from './SlideContainer/SlideContainer'
import ShowcaseContainer from './ShowcaseContainer/ShowcaseContainer'
import './main.scss'

class App extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
        }
    }

    render() {
        return (
           <div>
                <Navbar />
                <EarthHome />
                <ContinueButton />
                <div id="section1" />
                <SlideContainer />
                <ShowcaseContainer />
           </div>
        )
    }
    
};

ReactDOM.render(<App />, document.querySelector("#root"));