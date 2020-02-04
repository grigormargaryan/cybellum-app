import React, {Component} from 'react';
import LoadingBar from 'react-redux-loading-bar';

export default class Loading extends Component {
  render() {
    return (
      <>
         <LoadingBar className="loader"/>
        <LoadingBar className="parent-loader"/>
      </>
    );
  }
}
