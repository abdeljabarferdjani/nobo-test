import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField'
import Film from '../components/Film'

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      films: [],
      query: ''
    };

    this.onSearchInputChange = this.onSearchInputChange.bind(this);
  }

  componentDidMount() {
    const searchString ='';
    this.getFilms(searchString)
  }

  getFilms(searchString) {
    console.log(this.state.query);
    fetch("https://api.tvmaze.com/search/shows?q=test-" + searchString)
    .then(res => res.json())
    .then(
      (result) => {
        this.setState({
          isLoaded: true,
          films: result
        });
      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }

  onSearchInputChange (event) {
    console.log(event.target.value)
    const searchString = event.target.value;
    /*if (event.target.value) {
        searchString: event.target.value;
    } else {
        searchString: ''
    }
    this.setState({
      query: this.state.searchString,
    });
    this.getFilms();*/

    this.getFilms(searchString);
}

  render() {
    const { error, isLoaded, films } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <TextField style={{padding: 24}}
                            id="searchInput"
                            placeholder="Search for Films"
                            margin="normal"
                            onChange={this.onSearchInputChange} />
          <Grid container spacing={24} style={{ padding: 24 }}>
          {films.map(film => (
              <Grid item xs={12} sm={6} lg={4} xl={1}>
                <Film film={film} />
              </Grid>
            ))}
          </Grid>
        </div>
      );
    }
  }
}
export default Test;