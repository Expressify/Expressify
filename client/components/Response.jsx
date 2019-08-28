import React, { Component } from 'react';

class Response extends Component {
    constructor(props) {
        super(props);
    }
    render() {
      // console.log('props message:', this.props.message)
      const stringifiedMessage = JSON.stringify(this.props.message);
      
    return (
        <div>
        <div className="method-type">
                <pre>Response</pre>
                </div>
              <div className="body-info">
                <pre>
                  <h3>Body:</h3>
                  {stringifiedMessage}
                </pre>
              </div>
            </div>
      )
    }
}


export default Response;