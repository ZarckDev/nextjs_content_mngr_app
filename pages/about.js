import Navbar from 'components/Navbar';

const MyTest = (props) => {
  return (
    <>
      <h1>My Test Component</h1>
      {props.children}
    </>
  );
};

function About() {
  return (
    <>
      <Navbar />
      {/* Pass props to the components as children */}
      <MyTest>
        <h1>I am about page</h1>
        <h2>Hello World</h2>
      </MyTest>
    </>
  );
}

export default About;
