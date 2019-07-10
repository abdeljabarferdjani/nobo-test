import React, { Component } from "react";
import List from "./List";

class ListManager extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listData: []
    };

    this.getListData = this.getListData.bind(this);
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

export default ListManager;