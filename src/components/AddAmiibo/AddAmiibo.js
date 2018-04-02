import React, {Component} from "react";
import "./AddAmiibo.css";

class AddAmiibo extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            amiiboSeries: "",
            amiImage: ""
        }
        this.handleAdded = this.handleAdded.bind(this);
        this.handleName = this.handleName.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleAmiiboSeries = this.handleAmiiboSeries.bind(this);
    }

    handleName(val){
        this.setState({name:val})
    }
    
    handleAmiiboSeries(val){
        this.setState({amiiboSeries:val})
    }
    
    handleImage(val){
        this.setState({amiImage:val})
    }

    handleAdded(){
        const {newAmiibo} = this.props;
        const {name,amiiboSeries,amiImage} = this.state;
        newAmiibo(name,amiiboSeries,amiImage);
        this.setState({name: "",amiiboSeries: "",amiImage: ""})
    }

    render(){
        const {name,amiiboSeries, amiImage } = this.state;
        return(
            <div className="post-Amiibo">
                <p className="create-ami">Create-An-Amiibo</p>
                    <div className="submission">
                        <input 
                            className="one"
                            placeholder="Name"
                            value={name}
                            onChange={e => this.handleName(e.target.value)}
                            />
                        <input
                            className="two"
                            placeholder="Amiibo Series"
                            value={amiiboSeries}
                            onChange={e => this.handleAmiiboSeries(e.target.value)}
                            />
                        <input 
                            className="three"
                            value={amiImage}
                            placeholder="Image Url" type="text"
                            onChange={e=> this.handleImage(e.target.value)}
                            />
                    </div>
                
                <button className="post-button" onClick={this.handleAdded}>
                    Create
                </button>
            </div>    
        )
    }
}

export default AddAmiibo;