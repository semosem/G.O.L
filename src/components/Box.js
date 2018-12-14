import React, { PureComponent } from "react";

class Box extends PureComponent {
  componentWillMount = () => {};

  selectBox = (row, col) => {
    this.props.selectBox(this.props.row, this.props.col);
  };
  render() {
    const { boxClass, id, selectBox } = this.props;

    return <div className={boxClass} id={id} onClick={selectBox} />;
  }
}

export default Box;
