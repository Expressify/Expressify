import React, { Component } from 'react';

class Request extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      // console.log('props message:', this.props.message)
      const stringifiedMessage = JSON.stringify(this.props.message);
      const type = []
      const header = []
      const cookies = []
      const body = []
      body.push(JSON.stringify(this.props.message.body))
      cookies.push(JSON.stringify(this.props.message.cookies))
      header.push(JSON.stringify(this.props.message.header))
      type.push(this.props.message.type)
    return (
        <div>
        <div className="method-type">
                <pre>{this.props.message.type} Request</pre>
                </div>
              <div className="header-info">
                <pre> 
                  <h3>Header:</h3> 
                  {header}
                </pre>
              </div>
              <div className="body-info">
                <pre>
                  <h3>Body:</h3>
                  {body}
                </pre>
              </div>
              <div className="cookies-info">
                <pre>{cookies}</pre>
              </div>
            </div>
      )
    }
}


export default Request;