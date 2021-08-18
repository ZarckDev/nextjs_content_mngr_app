import React, { useState, useEffect } from 'react'; // with prefix "use" are Hooks

function CompA(props) {
  // any name works, just the first parameter, we could also destructuring

  useEffect(() => {
    console.log('CompA useEffect');
  }, [props.myProp1]); // only when myProp1 changes

  return (
    <>
      <h1>CompA</h1>
      <p>Hello CompA</p>
      <div>My prop1: {props.myProp1}</div>
      <div>My prop2: {props.myProp2}</div>
      <div>My prop3: {props.myProp3.toString()}</div>
      {/* // it's a component */}
      <div>My prop4: {<props.myProp4 />}</div>
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

  changeState(inc) {
    this.setState({
      value: inc, // new value
    });
  }

  render() {
    const { value } = this.state;
    const { myProp1, myProp2: NewComponent } = this.props;

    return (
      <>
        <h1>CompC</h1>
        Current Value: <h1>{value}</h1>
        <button onClick={() => this.changeState(value + 1)}>+</button>
        <button onClick={() => this.changeState(value - 1)}>-</button>
        <h2>{myProp1}</h2>
        <NewComponent />
      </>
    );
    // return React.createElement('h1', null, 'Hello CompC'); // no JSX, directly element creation
  }
}

function MyComponent() {
  return <h1>My Component</h1>;
}

function Home() {
  // useState() returns an array
  const [value, setValue] = useState(0);

  useEffect(() => {
    // only called everytime state change
    console.log('Use Effect Called');
  }, [value]); // only for "value" state change (empty array for no value)

  return (
    <>
      Current Value: <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>+</button>
      <button onClick={() => setValue(value - 1)}>-</button>
      {/* <CompA
        myProp1={value}
        myProp2='My custom value'
        myProp3={true}
        myProp4={() => <div>My new JSX</div>}
      /> */}
      <CompC myProp1={value} myProp2={MyComponent} />
    </>
  );
}
export default Home;
