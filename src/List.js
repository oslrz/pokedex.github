import React from "react";
import Item from "./Item";

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: "", next: ""};
    this.LoadMore = this.LoadMore.bind(this)
  }
  componentDidMount() {
    let x = this;
    let request = new XMLHttpRequest();
    request.open("GET", "https://pokeapi.co/api/v2/pokemon/?limit=24", true);
    request.setRequestHeader("Content-Type", "multipart/form-data");
    request.addEventListener("load", function () {
      let obj = JSON.parse(request.response);
      console.log(obj)
      let arr = new Map();
      for (let element of obj.results) {
        arr.set(
          <Item func={x.props.func} name={element.name} url={element.url} />
        );
      }
      x.setState({ data: arr,next:obj.next });
    });
    request.send();
  }

  LoadMore(){
    let x = this
    let request = new XMLHttpRequest();
    request.open("GET",x.state.next, true);
    request.setRequestHeader("Content-Type", "multipart/form-data");
    request.addEventListener("load", function () {
      let obj = JSON.parse(request.response);
      console.log(obj)
      let arr = new Map(x.state.data);
      for (let element of obj.results) {
        arr.set(
          <Item func={x.props.func} name={element.name} url={element.url} />
        );
      }
      x.setState({ data:arr,next:obj.next });
    });
    request.send();
  }

  render() {
    return (
      <div id="List">
        {this.state.data}
        <button onClick={this.LoadMore} id="load_bttn" type="button" class="btn btn-primary">
          Load more
        </button>
      </div>
    );
  }
}

export default List;
