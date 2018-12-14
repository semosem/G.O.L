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

  render() {
    const { gridFull } = this.state;
    return (
      <div className="main">
        <h1> Game of Life </h1>
        <Grid gridFull={gridFull} rows={this.rows} cols={this.cols} />
        <h3>Generation: {this.state.generation}</h3>
      </div>
    );
  }
}

export default App;
