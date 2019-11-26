import React from "react"
import '../main.scss'

export default class Showcase extends React.Component {
    render() {
        const { swTitle, swImage, swDescription, divColor, siteLink } = this.props

        return (
            <div className="showcase">
                <div className="showcaseBg" />
                <div className="swImgContainer">
                    <img src={swImage} className="swImg" />
                </div>
                <div className="swTextContainer">
                    <div className="swTextTitle" style={{ color: `${divColor}` }}>
                        <div>{swTitle}
                            <div className="swDivider" style={{ backgroundColor: `${divColor}` }} />
                        </div>
                    </div>                  
                    <div className="swTextDescription">
                        {swDescription}
                    </div>
                    <div className="swButton">
                        <a href={siteLink} className="button" target="_blank" style={{ color: `${divColor}` }}>CHECK SITE</a>
                    </div>  
                   
                </div>
  
            </div>
        )
    }
}