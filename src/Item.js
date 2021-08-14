import React from "react";

const Type = {
  grass: "green",
  poison: "violet",
  fire: "red",
  electric: "yellow",
  dark: "black",
  dragon: "rgb(0, 255, 255)",
  fairy: "rgb(255, 0, 191)",
  fighting: "rgb(255, 128, 0)",
  flying: "rgb(113, 153, 182)",
  ghost: "rgb(191, 0, 255)",
  ground: "rgb(182, 150, 93)",
  ice: "rgb(0, 191, 255)",
  normal: "rgb(198, 120, 176)",
  psychic: "rgb(255, 0, 255)",
  rock: "rgb(206, 63, 55)",
  steel: "rgb(110, 136, 179)",
  water: "rgb(0, 128, 255)",
  bug: "rgb(0, 153, 51)",
};

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}

class Item extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], img: "",id:'' };
  }
  componentDidMount() {
    let x = this;
    let request = new XMLHttpRequest();
    request.open("GET", this.props.url, true);
    request.setRequestHeader("Content-Type", "multipart/form-data");
    request.addEventListener("load", function () {
      let data = JSON.parse(request.response);
      let id = data.id;
      let types = data.types;
      let map = new Map();
      for (let i = 0; i < types.length; i++) {
        map.set(
          <div
            className="types"
            style={{ backgroundColor: Type[types[i]["type"].name] }}
          >
            {types[i]["type"].name}
          </div>
        );
      }
      data = data.sprites.other;
      x.setState({ img: data["official-artwork"].front_default, data: map, id: id });
    });
    request.send();
  }
  render() {
    return (
      <div
        className="pokemon_tab"
        onClick={() => {
            this.props.func(this.state.id);
        }}
      >
        <img style={{ height: "18rem" }} src={this.state.img} alt="" />
        <p className="pokemon_title">{capitalize(this.props.name)}</p>
        {this.state.data}
      </div>
    );
  }
}

export default Item;
