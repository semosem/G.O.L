import React, { PureComponent } from "react";

class Box extends PureComponent {
  componentWillMount = () => {};

  selectBox = (row, col) => {
    this.props.selectBox(this.props.row, this.props.col);
  };
  render() {
    const { boxClass, id } = this.props;

    return <div className={boxClass} id={id} onClick={this.selectBox} />;
  }
}

export default Box;
