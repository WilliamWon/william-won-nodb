import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Amiibo from './components/Amiibo/Amiibo';
import AddAmiibo from './components/AddAmiibo/AddAmiibo';

class App extends Component {
  constructor(){
    super();
    this.state = {
      toys: [],
      userInput: "",
      loading: true
    }
    this.updateAmiibo = this.updateAmiibo.bind(this);
    this.deleteAmiibo = this.deleteAmiibo.bind(this);
    this.newAmiibo = this.newAmiibo.bind(this);
  }

  componentDidMount(){
    axios.get("/api/toys").then(res => {
      console.log(res.data)
      this.setState({toys:res.data, loading: false})
    })
  }

  updateAmiibo(id, name, amiiboSeries){
    axios.put(`/api/toys/${id}`, {name, amiiboSeries}).then(res => {
      this.setState({toys: res.data.amiibo})
    })
  }

  deleteAmiibo(id) {
    axios.delete(`/api/toys/${id}`).then(res => {
      this.setState({characters: res.data.amiibo})
    })
  }
  
  newAmiibo(name,amiiboSeries){
    axios.post(`/api/toys`, {name, amiiboSeries}).then(res => {
      this.setState({toys: res.data})
    })
  }

  typing(val) {
    this.setState({
      userInput: val
    })
  }

  render() {
    const {loading, toys, userInput } = this.state;
    if (loading) {
      return (
        <div>Page is Loading</div>
      )
    }
    console.log(toys)
    let amiiList = toys.filter((e,i) => {
      if (!userInput) {
        return null;
      } else if (e.name.includes(userInput)){
          return e;
      }
    }).map(toy => {
      let id = toy.head.concat(toy.tail);
      return(
        <Amiibo
          key={id}
          id={id}
          name={toy.name}
          amiiboSeries={toy.amiiboSeries}
          updateToy={this.updateAmiibo}
          deleteToy={this.deleteAmiibo}
          toyImage={toy.image}
        />
      )
    })
    // let myAmi = 
    return (
      <div className="App">
        <div className="homePg">
          <h3>myAmiibo</h3>
          <input placeholder="Find your Amiibos" onChange={e=>this.typing(e.target.value)} />
        </div>
        {/* {console.log(toys)} */}
        <div className="amiiboBody">
          {amiiList}
        </div>
        <div className="myAmiibos">
        </div>
        <div>
          <AddAmiibo
            newAmiibo={this.newAmiibo}
          />
        </div>
      </div>
    );
  }
}

export default App;
