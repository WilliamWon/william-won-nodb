import React, {Component} from 'react';

class Favorites extends Component{
    constructor(props){
        super();
        this.state = {
            name: props.name,
            ammiboSeries: props.amiiboSeries,
            inputSwitch:
        }
    }

    handleSwitch(){
        this.setState({
            inputSwitch: !this.state.inputSwitch
        })
    }
    handleName(val){
        this.setState({
            name: val
        })
    }
    handleSeries(val){
        this.setState({
            amiiboSeries: val
        })
    }
    handleConfirm(){
        const {updateToy, tail} = this.props;
        const {name, amiiboSeries} = this.state;
        updateToy(tail,name,amiiboSeries);
        this.setState({
            inputSwitch: !this.state.inputSwitch
        })
    }
    render(){
        return(
            <div className="charCard">
              {!inputSwitch ? (
                <div>
                    <div className="charInfo">
                        <h2>{this.state.name}</h2>
                        <p className="series">{this.state.amiiboSeries}</p>
                    </div>
                    <img className="cardImage" src= {this.props.toyImage} alt="CardImage"/>
                        <div>
                            {/* <button onClick={}>Add</button> */}
                            <button onClick={this.handleSwitch}>Edit</button>
                            <button onClick={()=> deleteToy(tail)}>Delete</button>
                        </div>
                </div>
              ) : (
                <div>
                    <input value={name} onChange={e=> this.handleName(e.target.value)}/>
                    <input value={amiiboSeries} onChange={e=> this.handleSeries(e.target.value)}/>
                    <img className="cardImage" src= {toyImage} alt="CardImage"/>
                    <button onClick={this.handleSwitch}>Cancel</button>
                    <button onClick={this.handleConfirm}>Confirm</button>
                </div>
              )}
             </div>
        )
    }
}