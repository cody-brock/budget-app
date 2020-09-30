import React, { Component } from 'react';

class Loading extends Component {
  render() {
    return(
      <div class="spinner-border text-dark" role="status">
        <span class="sr-only">Loading...</span>
      </div>
    )
  }
}

export default Loading;