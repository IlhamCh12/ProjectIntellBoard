import axios from 'axios';
import React, { Component } from 'react';

class UtilisateurListe extends Component {

  constructor(props){
    super(props);
    this.state = {
      utilisateurs : []
    }
  }

  componentDidMount(){
    axios.get("/Utilisateurs").then((response) => { this.setState({ utilisateurs : response.data}); console.log(response)});
  }
  

  render() {
    return(
      <div>
      {this.state.data}
    </div>
    )
  }
}

export default UtilisateurListe;