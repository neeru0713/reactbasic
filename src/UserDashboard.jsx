import React from 'react'
import { createRoot } from "react-dom/client";
import './index.css'

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

class UserDashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = { firstname : "dannu", lastname : "tintin", email : "dannu2018@gmail.com", url:"" };
  }
  render() {
    return (
      <div>
        <h2>User Dashboard</h2>
        <button onClick={this.makeApiCall}>1</button>
        <button onClick={this.makeApiCall}>2</button>
        <button onClick={this.makeApiCall}>3</button>
        <button onClick={this.makeApiCall}>100</button>

        <ul>
          <li>Email : {this.state.email}Email</li>
          <li>Name : {`${this.state.firstname} ${this.state.lastname}`}</li>
        </ul>
        <img src={this.state.url}/>
        
        
      </div>
    );
  }
  makeApiCall = (event) => {
    fetch(`https://reqres.in/api/users/${event.target.innerText}`)
    .then((response) => {
      if(response.status !== 200){
        throw Error(response.status) 
      }
      return response.json()
    })
    .then((data) => {
      this.setState((state) => {
        return {
        firstname : data.data.first_name, 
        lastname : data.data.last_name,
        email : data.data.email,
        url: data.data.avatar,
      }
      });
    
      
    })
    .catch(err => {
      alert(`Unable to fetch data ${err}`)
    })
  
  }

}
root.render(<UserDashboard />);

export default UserDashboard
