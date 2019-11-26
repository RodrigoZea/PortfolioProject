import React from "react"
import '../main.scss'

export default class Slide extends React.Component {
    render() {
        const { slideImg, numberTxt, subtitle, direction, title, description, color } = this.props

        return (
            <div>
                <div className={"slide " + `${direction}`}>
                    <div className={"cutout " + `${direction}`}>
                        <img src={slideImg} className="cutoutimg" />
                    </div>

                    <div className={"textContainer " + `${direction}`}>
                        <div className="textTitle" style={{ color: `${color}` }}>
                            {title}
                        </div>
                        <div className="textDescription">
                            {description}
                        </div>    
                    </div>
                </div>
                <div className={"slideInfoContainer " + `${direction}`}>
                    <div className="slideNumber">{numberTxt}</div>
                    <div className="slideSub" style={{ color: `${color}` }}>{subtitle}</div>
                </div>
            </div>
        )
    }
}