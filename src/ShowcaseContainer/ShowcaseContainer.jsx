import React from "react"
import '../main.scss'
import Showcase from '../Showcase/Showcase'
var narancia = require('../../resources/images/narancia_preview.png')
var radar = require('../../resources/images/radar_preview.png')
var bullet = require('../../resources/images/bullet_preview.png')

export default class ShowcaseContainer extends React.Component {
    render() {
        return (
            <div className="swContainer">
                <div className="showcaseHeader">
                    WORK SHOWCASE
                </div>
                <Showcase 
                    swTitle={"Narancia"}
                    swImage={narancia}
                    swDescription={"This is an image created purely with CSS. It is based from the character shown in the popular series JoJo's Bizarre Adventure Part 5, Vento Aureo."}
                    divColor={"#f1aa3e"}
                    siteLink={"http://msdeus.site/17058/Lab4/lab4.html"}
                />
                <Showcase
                    swTitle={"Radar"}
                    swImage={radar}
                    swDescription={"This was an exercise developed for my web technologies class at my university. It was done using Preact, I like the way it turned out visually, since programatically it isn't much, but it does give a radar vibe."}
                    divColor={"#3680e0"}
                    siteLink={"https://quirky-almeida-ce9a89.netlify.com/"}
                />     
                <Showcase
                    swTitle={"Bullet Brawl"}
                    swImage={bullet}
                    swDescription={"This was a game developed as a final project alongside another student at my university. The mechanic of the game is that the knockback of the gun affects your movement. I feel that it was a cool experiment."}
                    divColor={"#fcc672"}
                    siteLink={"https://rodrigozea.itch.io/bullet-brawl"}
                />          
            </div>
        )
    }
}