import React from "react";
import ReactDOM from "react-dom";
import EarthHome from './EarthHome/EarthHome';
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
               <EarthHome />
           </div>
        )
    }
    
};

ReactDOM.render(<App />, document.querySelector("#root"));