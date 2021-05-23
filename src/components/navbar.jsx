import React, { Component } from "react";

export default class Navigation extends Component {
  
retrieveData = (e) => {

  fetch('http://localhost:8000/api/filldatabase', {
      method: 'POST',
      headers: {'Content-Type': 'application/json', 'Accept': 'application/json'},
  })
  .then(response => response.json())
  .then(data => {
   this.setState({data:data})
   console.log(this.state.data)
  });

}

deleteDatabase = (e) => {

  fetch('http://localhost:8000/api/delete', {
      method: 'DELETE',
  })
  .then(response => response.json())
  .then(data => {
   this.setState({data:data})
   console.log(this.state.data)
  });

}
    render() {
      return (
        <div>
           <nav className ="navbar navbar-light bg-secondary" >
                <h5 className = "text-light">Currency Conventer</h5>
                <ul className="navbar-nav list-inline">
                  <div className = "p-3">
                    <li className = "list-inline-item">
                      <button className="btn btn-warning" onClick = {this.retrieveData}>Retrieve Rates</button>
                    </li>
                    <li className = "list-inline-item">
                    <button className="btn btn-danger" onClick = {this.deleteDatabase}>Clear database</button>
                    </li>
                    
                  </div>
              </ul>
            </nav>
        </div>
      );
    }
  }