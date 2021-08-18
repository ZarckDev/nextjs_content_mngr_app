import React, { useState } from 'react';

function CompA() {
  return (
    <>
      <h1>CompA</h1>
      <p>Hello CompA</p>
    </>
  );
}

//JSX
class CompC extends React.Component {
  constructor() {
    super(); // get constructor from react component
    this.state = {
      value: 10,
    };
  }

  //OR
  // state = {
  //   value: 10,
  // };

  changeState(inc) {
    this.setState({
      value: inc, // new value
    });
  }

  render() {
    const { value } = this.state;

    return (
      <>
        <h1>CompC</h1>
        Current Value: <h1>{value}</h1>
        <button onClick={() => this.changeState(value + 1)}>+</button>
        <button onClick={() => this.changeState(value - 1)}>-</button>
      </>
    );
    // return React.createElement('h1', null, 'Hello CompC'); // no JSX, directly element creation
  }
}

function Home() {
  // useState() returns an array
  const [value, setValue] = useState(0);

  console.log('I am called initially and when state is changed!');

  // const changeValue = (inc) => {
  //   setValue(value + inc);
  // };

  return (
    <>
      Current Value: <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      <CompC />
    </>
  );
}
export default Home;
