import React from "react"
import '../main.scss'
import Slide from '../Slide/Slide'
var space = require('../../resources/images/space.png')
var icecream = require('../../resources/images/icecreamw.png')

export default class SlideContainer extends React.Component {
    render() {
        return (
            <div className="slideContainer">
                <Slide 
                    slideImg={space}
                    numberTxt={"00"}
                    color={"#4f98dc"}
                    subtitle={"Background"} 
                    direction={"left"} 
                    title={"About Me"} 
                    description={"Born in Guatemala in 1999. Currently studying in one of the top universities of my country, Univerisdad del Valle de Guatemala. My hobbies include gaming, watching series/anime, designing and learning new programming related knowledge. I enjoy settings in space and futuristic ones as well. I hope to work in developing web apps or as a UX designer in the future."} />
                <Slide 
                    slideImg={icecream} 
                    numberTxt={"01"}
                    color={"#82b472"}
                    subtitle={"Skills"} 
                    direction={"right"} 
                    title={"Abilities"}
                description={"I mainly do web development, but I am also able to do digital design and game development. I'm familiar with the following technologies: React/Preact/Vue/Threejs, Photoshop/Illustrator/Blender, Unity but I'm always constantly trying to learn more everyday. I like to think I can adapt fairly well, so I'll try to learn an unfamiliar technology in order to fulfill your vision."} />
            </div>
        )
    }
}