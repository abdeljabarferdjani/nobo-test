import React, { Component } from 'react';
// import Page1 from './components/Page1';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import FilmList from './components/FilmList';
import ListManager from './components/ListManager';

class App extends Component {
  render(){
  return (
  <div>
    <Header />
    <FilmList />
    <Footer />
  </div>
  );
  }
}

export default App;
