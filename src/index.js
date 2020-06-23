import React from 'react';
import ReactDom from 'react-dom';
import './styles.css';
import SearchMovies from './searchMovie'; 
class Main extends React.Component{
  render(){
    return (
      <div className="container">
        <h1 className="title">React Movie Search App</h1>
        <SearchMovies/>
      </div>
      
    );
  }
}
ReactDom.render(<Main/>, document.getElementById('root'));