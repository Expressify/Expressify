import React, { Component } from "react";
import { connect } from "react-redux"; //Will need to use mapStateToProps & mapDispatchToProps
import * as actions from "../actions/actions"; //Get all actions from actions folder;
import Message from "../components/Message.jsx"; //import child component (Message);

//Grab messageArray from state for props to use;
const mapStateToProps = store => ({
  messageArr: store.messageArray
});

//Initialize method for props to use;
const mapDispatchToProps = dispatch => ({
  addMessage: data => dispatch(actions.addMessage(data))
});

//Created Class component called Connection => THIS IS OUR MAIN CONTAINER TO RENDER;
class Connection extends Component {
  //Need constructor to send props down into child components;
  constructor(props) {
    super(props);
  }

  //Lifecycle method to connect WebSocket with front-end;
  componentDidMount() {
    //Connect to port 2000 WebSocket;
    const socket = new WebSocket("ws://localhost:2000");

    //Added eventListener to listen for any data coming inside websocket server;
    socket.addEventListener ('message', (event) => {
      console.log('event in addEventListener', event.data)
      let parsedHeader = JSON.parse(event.data);
      console.log(parsedHeader.body)
      console.log(parsedHeader.type)
      //Send data received to reducer function;
      this.props.addMessage(JSON.parse(event.data));
    });
  } 

  render() {
    //Initalize empty array to render each child component. (We're going to have more than one depending on how many requests we received)
    const infoHolder = [];
    //Destructure messageArr from this.props;
    const { messageArr } = this.props

    //Loop through each element inside messageArr (which is an object and send it down to child components);
    messageArr.forEach((el, index) => {
      //el = data object we pushed in. => send it down into the child component as a property/attribute;
      infoHolder.push(<Message key={`${el}` + index } info={el}/>);
    })
    /*
    We want every new request to be on the top when we render, 
    therefore we want to reverse the array because otherwise every new request will be on the bottom
    */
    infoHolder.reverse();
    //then return it to render;
    return infoHolder;
  }
}



//Needed to use mapStateToProps & mapDispatchToProps then export Main Container;
export default connect(mapStateToProps,mapDispatchToProps)(Connection);
