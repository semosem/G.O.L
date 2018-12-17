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
      decompressed: "whatever",
      gridFull: Array(this.rows)
        .fill()
        .map(() => Array(this.cols).fill(false))
    };
  }
  decompress = e => {
    const { value } = e.target;
    const digits = value.split("");
    this.setState({
      decompressed: digits.filter(item => {
        return /\d/.test(item);
      })
    });
  };
  componentDidMount() {
    this.seed();
    // this.playButton();
  }
  playButton = () => {
    this.interval = setInterval(this.play, this.speed);
  };

  play = () => {
    let g = this.state.gridFull;
    let g2 = g.map(item => {
      return item;
    });

    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.cols; j++) {
        let count = 0;
        if (i > 0) if (g[i - 1][j]) count++;
        if (i > 0 && j > 0) if (g[i - 1][j - 1]) count++;
        if (i > 0 && j < this.cols - 1) if (g[i - 1][j + 1]) count++;
        if (j < this.cols - 1) if (g[i][j + 1]) count++;
        if (j > 0) if (g[i][j - 1]) count++;
        if (i < this.rows - 1) if (g[i + 1][j]) count++;
        if (i < this.rows - 1 && j > 0) if (g[i + 1][j - 1]) count++;
        if (i < this.rows - 1 && j < this.cols - 1)
          if (g[i + 1][j + 1]) count++;
        if (g[i][j] && (count < 2 || count > 3)) g2[i][j] = false;
        if (!g[i][j] && count === 3) g2[i][j] = true;
      }
    }
    this.setState({
      gridFull: g2,
      generation: this.state.generation + 1
    });
  };
  // randomly fill some boxes
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
            if (Math.floor(Math.random() * 20) === 1) {
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
        />

        <h3>Generation: {this.state.generation}</h3>
        <input
          type="text"
          className="decompressMe"
          onChange={this.decompress}
        />
        <h1>Decompressed input: {this.state.decompressed}</h1>
      </div>
    );
  }
}

export default App;
