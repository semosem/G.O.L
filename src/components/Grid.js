import React, { PureComponent } from "react";
import Box from "./Box";
import "../App.css";
class Grid extends PureComponent {
  render() {
    console.log(this.props);
    const width = this.props.cols * 16;
    const { rows, cols, gridFull, selectBox } = this.props;
    let rowsArray = [];
    let boxClass = "";

    for (var i = 0; i < rows; i++) {
      for (var j = 0; j < cols; j++) {
        let boxId = i + "_" + j;
        boxClass = gridFull[i][j] ? "box on" : "box off";
        rowsArray.push(
          <Box
            boxClass={boxClass}
            key={boxId}
            boxId={boxId}
            row={i}
            col={j}
            selectBox={selectBox}
          />
        );
      }
    }

    return (
      <div className="grid" style={{ width: width }}>
        {rowsArray}
      </div>
    );
  }
}

export default Grid;
