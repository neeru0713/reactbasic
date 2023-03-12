import React from 'react'
import './index.css'

class DogPics extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      url : "https://cdn1.vectorstock.com/i/1000x1000/84/40/cute-little-bully-kutta-cartoon-vector-43838440.jpg ",
      nextCount: 0,
      breedPics: []
    };
  }

  render() {
   return (
      <div className="breed-dropdown-container" >
        <div className = "header">
          <label>Select a breed:</label>
          <select onChange={this.dogApiCall} id="breed-select" name="breed-select">
            <option value="random">Random</option>
            <option value="beagal">Beagal</option>
            <option value="boxer">Boxer</option>
            <option value="husky">Husky</option>
            <option value="dalmatian">Dalmatian</option>
          </select>
        </div> 
        <img src={this.state.url} alt="dog" clasName="img"/>
        <button onClick={this.imageHandler}>Next</button>
      </div>
    );
  }
  dogApiCall = (event) =>{
    // console.log(event.target.value)
    let breed = event.target.value;
    let url;
    if (breed === 'random') {
      url = 'https://dog.ceo/api/breeds/image/random';
    } else {
      url = `https://dog.ceo/api/breed/${breed}/images`;
    }
    fetch(url)
    .then((response) => {
      return response.json()
    })
    .then((data) => {
      
      this.setState((state) => {
        if(breed === 'random') {
          return {
            url: data.message,
            breedPics: []
          }
        } else {

          return {
            url: data.message[0],
            breedPics: [...data.message]
          }
        }
        
      
    });
  
    
  })
  }
  imageHandler = () => {
    
      let breed = document.querySelector("#breed-select").value
      console.log(breed)
      let url;
      if (breed === "random") {
        url = "https://dog.ceo/api/breeds/image/random";

        fetch(url)
        .then((response) => {
          return response.json()
        })
        .then((data) => {
          
          this.setState((state) => {
            if(breed === 'random') {
              return {
                url: data.message,
                breedPics: []
              }
            } 
          })

        })
      } else {
        this.setState((state)=>{
          console.log(state)
          return {
            url: state.breedPics[state.nextCount + 1],
            nextCount: state.nextCount + 1
          }
        })
      }

      
  }

}

export default DogPics
