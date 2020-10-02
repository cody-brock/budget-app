import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return(
      <div className="spinner-border text-dark loading" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    )
  }
}

export default Loading;