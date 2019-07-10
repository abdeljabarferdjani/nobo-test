import React, { Component } from "react";
import List from "./List";

class FilmList1 extends Component {
    state = {
        films: [],
        searchString: ''
    }
  
    constructor(props) {
    super(props);
    this.getFilms();
  }

  componentDidMount() {
    this.getListData();
  }

  getListData() {
    const ids = [1, 2, 3, 4, 5];

    let listData = [];

    ids.forEach(id =>
      fetch("http://api.tvmaze.com/shows/" + id)
        .then(resp => resp.json())
        .then(resp  => console.log(resp))
        .then(show => {
          listData.push(show);
        })
        .catch((error) => {
          console.log("Error occured while fetching data")
          console.log(error)
      })
    );

    this.setState({
      listData: listData.sort((a, b) => a.runtime - b.runtime)
    });
  }

  render() {
    return (
      <div>
        <h3>{this.props.title}</h3>
        <List data={this.state.listData} />
      </div>
    );
  }
}

export default FilmList1;