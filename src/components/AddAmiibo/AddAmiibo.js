import React, {Component} from "react";
import "./AddAmiibo.css";

class AddAmiibo extends Component {
    constructor(){
        super();
        this.state = {
            name: "",
            amiiboSeries: ""
            // amiImage: "https://esmemes.com/i/only-nintendo-fans-will-und-stand-the-wit-u-was-13573992"
        }
        this.handleAdded = this.handleAdded.bind(this);
    }

    handleName(val){
        this.setState({name:val})
    }
    
    handleAmiiboSeries(val){
        this.setState({amiiboSeries:val})
    }
    
    // handleImage(val){
    //     this.setState({amiImage:val})
    // }

    handleAdded(){
        const {newAmiibo} = this.props;
        const {name,amiiboSeries} = this.state;
        newAmiibo(name,amiiboSeries);
        this.setState({name: "",amiiboSeries: ""})
    }

    render(){
        const {name,amiiboSeries} = this.state;
        return(
            <div className="post-Amiibo">
                <p className="create-ami">Create-An-Amiibo</p>
                <input 
                    className="post-input one"
                    placeholder="Name"
                    value={name}
                    onChange={e => this.handleName(e.target.value)}
                />
                <input
                    className="post-input two"
                    placeholder="Amiibo Series"
                    value={amiiboSeries}
                    onChange={e => this.handleAmiiboSeries(e.target.value)}
                />

                {/* <input type="file" onChange={e => this.handleImage(e.target.value)}/> */}

                <button className="post-button" onClick={this.handleAdded}>
                    Create
                </button>
            </div>    
        )
    }
}

export default AddAmiibo;