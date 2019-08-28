import React from "react";
import Request from './Request.jsx';
import Response from './Response.jsx';


/*
  Now each data we have access to inside this component is very unpleasing to the eye;
  Especially the body & header;

  ie: 
    Body = {
	    "MARK":"POPEYES",
	    "ANTHONY": "SANDWICH"
    }
  
    Header = {
      "content-type": "application/json",
      "user-agent": "PostmanRuntime/7.15.2",
      "accept": "",
      "cache-control": "no-cache",
      "postman-token": "b8eb9bfc-5606-4c75-9bac-f080984662cc",
      "host": "localhost:3000",
      "accept-encoding": "gzip, deflate",
      "content-length": "45",
      "connection": "keep-alive,
    }

    Visualizers are used to help the user visualize something they can't easily conceive;
    Therefore we want to parse this data and seperate each key and value pair so we can send them as innerHTML;
*/

const Message = props => {
    console.log('props.info in message cpt', props.info);
    // const resDisplay = [];
    if (props.info.body && props.info.cookies && props.info.header && props.info.type ) {
      return (
        <Request message={props.info}/>
      )
    }
    return (
    <Response message ={props.info}/>
  )
};

export default Message;
