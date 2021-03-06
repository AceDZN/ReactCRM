import React, {Component} from 'react';
import {connect} from 'react-redux';

class GreetMessage extends Component{
  render(){
    var greet = "שלום ______!";
    if(this.props.platform){
      greet = "שלום "+this.props.platform.title+"!";
    }
    return (
      <h1 className="greet-message">
        {greet}
      </h1>
    )
  }

}
function mapStateToProps(state) {
  return {
    platform: state.activePlatform
  }
}

export default connect(mapStateToProps)(GreetMessage);
