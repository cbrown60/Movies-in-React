import React from 'react'
import MovieList from './MovieList.jsx'
import ShowMoreButton from './ShowMoreButton.jsx'

class MovieTable extends React.Component{

constructor(props){
  super(props)
  this.state = {
    data: [{id:1, title:"Guardians Against the Galaxy", director:'James Gun'},{id:2, title:"The Lovers", director: "Azazel Jacobs"},{id:3, title:"The Dinner", director:"Oren Moverman"}]
  }
}

render(){
  return(
  <div className="movie-table">UK Opening This Week
  <MovieList data={this.state.data}/>
  <ShowMoreButton id='button'/>
    </div>
   )
  }
 }

export default MovieTable 

