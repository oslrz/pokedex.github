import React from "react";


function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // img: null,
      // atk: null,
      // def: null,
      // hp: null,
      // type: null,
      // sp_atk: null,
      // sp_def: null,
    };
  }
  componentDidUpdate() {
    if (this.props.data !== null) {
        console.log(this.props.data)
    }
  }

  render() {
    return null;
  }
}

export default Card;
