import React, { Component } from 'react';

class Test extends Component {
  state = {
    title: '',
    body: ''
  };
  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then(response => response.json())
      .then(data =>
        this.setState({
          title: data.title,
          body: data.body
        })
      );
  }
  // UNSAFE_componentWillMount() {
  //   console.log('ComponentWillount..');
  // }
  componentDidUpdate() {
    console.log('didUpdate', this.state);
  }

  // UNSAFE_componentWillReceiveProps(nextProps, nextState) {
  //   console.log('componentWillReceiveProps');
  // }

  // static getDerivedStateFromProps(nextProps, nextState) {
  //   return null;
  // }

  // getSnapshotBeforeUpdate(prevProps, prevState) {
  //   console.log('getSnapshotBeforeUpdate');
  // }

  render() {
    const { title, body } = this.state;
    return (
      <div>
        <h1>Test Componen </h1>
        <h2>
          <span className="text-danger">{title}</span>
        </h2>
        <h2>{body}</h2>
      </div>
    );
  }
}

export default Test;
