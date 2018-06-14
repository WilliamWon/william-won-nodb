import React, { Component } from "react";
import "./Amiibo.css";

class Amiibo extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      amiiboSeries: props.amiiboSeries,
      inputSwitch: false
    };
    this.handleSwitch = this.handleSwitch.bind(this);
    this.handleName = this.handleName.bind(this);
    this.handleSeries = this.handleSeries.bind(this);
    this.handleConfirm = this.handleConfirm.bind(this);
  }

  handleSwitch() {
    this.setState({
      inputSwitch: !this.state.inputSwitch
    });
  }
  handleName(val) {
    this.setState({
      name: val
    });
  }
  handleSeries(val) {
    this.setState({
      amiiboSeries: val
    });
  }
  handleConfirm() {
    const { updateToy, id } = this.props;
    const { name, amiiboSeries } = this.state;
    updateToy(id, name, amiiboSeries);
    this.setState({
      inputSwitch: !this.state.inputSwitch
    });
  }

  render() {
    const { deleteToy, id, toyImage } = this.props;
    const { inputSwitch, name, amiiboSeries } = this.state;
    return (
      <div className="charCard">
        {!inputSwitch ? (
          <div className="innerCard">
            <div className="charInfo">
              <h2>{this.state.name}</h2>
              <p className="series">{this.state.amiiboSeries}</p>
            </div>
            <img
              className="cardImage"
              src={this.props.toyImage}
              alt="CardImage"
            />
            <div className="editContainer">
              {/* <button onClick={}>Add</button> */}
              <button className="leftButton" onClick={this.handleSwitch}>
                Edit
              </button>
              <button onClick={() => deleteToy(id)}>Delete</button>
            </div>
          </div>
        ) : (
          <div className="innerCard">
            <input
              className="infoChange"
              value={name}
              onChange={e => this.handleName(e.target.value)}
            />
            <input
              className="infoChange"
              value={amiiboSeries}
              onChange={e => this.handleSeries(e.target.value)}
            />
            <img className="cardImage" src={toyImage} alt="CardImage" />
            <div className="editContainer">
              <button className="leftButton" onClick={this.handleSwitch}>
                Cancel
              </button>
              <button onClick={this.handleConfirm}>Confirm</button>
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Amiibo;
