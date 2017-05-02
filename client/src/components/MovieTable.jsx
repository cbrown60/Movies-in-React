import React from 'react'
import MovieList from './MovieList.jsx'

class MovieTable extends React.Component{

constructor(props){
  super(props)
  this.state = {
    data: [{id:1, Title:"Guardians Against the Galaxy", Director:'James Gun'},{id:2, Title:"The Lovers", Director: "Azazel Jacobs"},{id:3, Title:"The Dinner", Director:"Oren Moverman"}]
  }
}

render(){
  return(
  <div className="movie-table">UK Opening This Week</div>
   )
  }
 }

export default MovieTable 

