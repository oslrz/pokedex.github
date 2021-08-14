import React from "react";
import List from "./List";
import Panel from "./Panel";
class Field extends React.Component {
  constructor(props){
    super(props)
    this.state = {id:""}
  }

  handleLink = (data) => {
    this.setState({id:data},()=>{
      this.forceUpdate()
    });
  }

  render(){
    return (
    <div className="Field">
      <List func={this.handleLink}/>
      <Panel id={this.state.id}/>
    </div>
  );
  }
  
}

export default Field;
