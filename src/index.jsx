import React from "react"
import ReactDOM from "react-dom"
import EarthHome from './EarthHome/EarthHome'
import Navbar from './Navbar/Navbar'
import ContinueButton from './ContinueButton/ContinueButton'
import SlideContainer from './SlideContainer/SlideContainer'
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
                <SlideContainer/>
           </div>
        )
    }
    
};

ReactDOM.render(<App />, document.querySelector("#root"));