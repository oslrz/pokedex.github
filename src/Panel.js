import React from "react";

function capitalize(string) {
  if (string === null) {
    return null;
  } else {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
  }
}

class Panel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      img: null,
      data: null,
      name: null,
      // atk: null,
      // def: null,
      // hp: null,
      // type: null,
      // sp_atk: null,
      // sp_def: null,
    };
  }
  componentWillReceiveProps() {
    if (this.props.id !== "") {
      let x = this;
      let request = new XMLHttpRequest();
      request.open(
        "GET",
        "https://pokeapi.co/api/v2/pokemon/" + this.props.id + "/",
        true
      );
      request.setRequestHeader("Content-Type", "multipart/form-data");
      request.addEventListener("load", function () {
        let data = JSON.parse(request.response);
        console.log(data.weight);
        console.log(data.sprites.other.dream_world.front_default); // img
        let map = new Map();
        for (let elem of data.stats) {
          map.set(
            <tr>
              <td>{capitalize(elem.stat["name"])}</td>
              <td>{elem.base_stat}</td>
            </tr>
          );
        }
        x.setState(
          {
            data: map,
            img: data.sprites.other.dream_world.front_default,
            name: data.name,
          },
          () => {
            x.forceUpdate();
          }
        );
      });
      request.send();
    }
  }
  render() {
    if (this.props.id !== "") {
      return (
        <div id="panel">
          <img style={{ width: "100%",borderBottom:"1px solid" }} src={this.state.img} alt="" />
          <p style={{textAlign:"center",fontSize:"xxx-large"}}>{capitalize(this.state.name)+" #"+String(this.props.id/100).replace(".","")}</p>
          <table style={{ width: "100%" }}>{this.state.data}</table>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Panel;
