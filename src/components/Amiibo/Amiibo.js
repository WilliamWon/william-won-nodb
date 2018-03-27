import React, {Component} from 'react';
import "./Amiibo.css";

class Amiibo extends Component{
    constructor(props){
        super();
        this.state = {
            name: props.name,
            amiiboSeries: props.amiiboSeries
        }
    }
    
    
    render(){
        return(
                <div className="charCard">
                    <div className="charInfo">
                        <h2>{this.state.name}</h2>
                        <p className="series">{this.state.amiiboSeries}</p>
                    </div>
                    <img src= {this.props.toyImage} alt="CardImage"/>
                    <div>
                        <button onClick>Add to myAmiibos</button>
                    </div>
                </div>
        )
    }
}

export default Amiibo;