import React, { Component } from 'react';

class Test extends Component {
  state = {};
  componentDidMount() {
    console.log('ComponentDidMount..');
  }
  UNSAFE_componentWillMount() {
    console.log('ComponentWillount..');
  }
  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  UNSAFE_componentWillReceiveProps(nextProps, nextState) {
    console.log('componentWillReceiveProps');
  }

  static getDerivedStateFromProps(nextProps, nextState) {
    return null;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log('getSnapshotBeforeUpdate');
  }

  render() {
    return (
      <div>
        <h1>Test Componen </h1>
      </div>
    );
  }
}

export default Test;
