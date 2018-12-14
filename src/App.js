import React, { PureComponent } from "react";
import Grid from "./components/Grid";
import "./App.css";

class App extends PureComponent {
  constructor() {
    super();
    this.speed = 100;
    this.rows = 30;
    this.cols = 50;
    this.state = {
      generation: 0,
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    };
  }
  componentDidMount() {
    console.log("seed");
    this.seed();
  }
  selectBox = (row, col) => {
    const gridCopy = this.state.gridFull.map(item => {
      return item;
    });
    gridCopy[row][col] = !gridCopy[row][col];
    this.setState({
      gridFull: gridCopy
    });
  };
  seed = () => {
    const gridCopy = this.state.gridFull.map(item => {
      return item;
    });
    Array(this.rows)
      .fill()
      .forEach((item, i) => {
        return Array(this.cols)
          .fill()
          .forEach((item, j) => {
            if (Math.floor(Math.random() * 4) === 1) {
              console.log("rand");
              gridCopy[i][j] = true;
            }
          });
      });
    this.setState({
      gridFull: gridCopy
    });
  };
  render() {
    const { gridFull } = this.state;
    return (
      <div className="main">
        <h1> Game of Life </h1>
        <Grid
          selectBox={this.selectBox}
          gridFull={gridFull}
          rows={this.rows}
          cols={this.cols}
        />{" "}
        <h3>Generation: {this.state.generation}</h3>
      </div>
    );
  }
}

export default App;
