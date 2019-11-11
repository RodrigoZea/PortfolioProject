import React from "react"
import '../main.scss'
import Slide from '../Slide/Slide'
var space = require('../../resources/images/space.png')
var icecream = require('../../resources/images/icecream.png')

export default class SlideContainer extends React.Component {
    render() {
        return (
            <div className="slideContainer">
                <Slide 
                    slideImg={space}
                    numberTxt={"00"}
                    color={"#4f98dc"}
                    subtitle={"Background"} 
                    subtitleJp={"身元"} 
                    direction={"left"} 
                    title={"Title 1"} 
                    description={"Lorem ipsum dolor sit amet"} />
                <Slide 
                    slideImg={icecream} 
                    numberTxt={"01"}
                    color={"#4fc7dc"}
                    subtitle={"Abilities"} 
                    subtitleJp={"能力"} 
                    direction={"right"} 
                    title={"Title 2"}
                    description={"Lorem ipsum dolor sit amet lorem ipsum dolor sit amet"} />
            </div>
        )
    }
}