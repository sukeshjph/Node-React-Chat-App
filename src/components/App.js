import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import MessageList from './messageList'
import * as AllActions from './../service';
import './App.css';

class App extends Component {
  render() {
   
   if(this.props.messages.length>0 && this.props.members.length>0)
   {
    return (
        <MessageList messages={this.props.messages} members={this.props.members}/>     
        );
   }

   else
      return(<div>Loading...</div>)
   
  }  
}

const mapStateToProps = (state,ownProps) => {
   return {
    messages: state.messages,
    members: state.members
  };
};

const mapDispatchToProps = dispatch => bindActionCreators(AllActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
