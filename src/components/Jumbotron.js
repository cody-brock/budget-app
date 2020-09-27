import React, { Component } from 'react';

class Jumbotron extends Component {
  render() {
    return(
      <div className="jumbotron jumbo">
        <div className="row">
          <div className="col-sm-12 logo">
            <span className="welcome-to">{this.props.largeTitle} </span>{this.props.smallTitle}
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12 welcome-subtitle">
            <div className="subtitle">
              {this.props.subtitle}
            </div>
          </div>
        </div>
        
        {this.props.children}

      </div>
    )
  }
}

export default Jumbotron;