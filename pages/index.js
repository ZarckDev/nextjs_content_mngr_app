import React from 'react';

// const ArrowFunction = () => {
//   return (
//     <div>
//       <h1>I am arrow function</h1>
//     </div>
//   );
// };
const ArrowFunction = (params) => (
  <div>
    <h1>I am arrow function</h1>
  </div>
);

function CompA() {
  return (
    <>
      <ArrowFunction />
      <h1>CompA</h1>
      <p>Hello CompA</p>
    </>
  );
}

//JSX
class CompC extends React.Component {
  render() {
    // return <h1>CompC</h1>;
    return React.createElement('h1', null, 'Hello CompC'); // no JSX, directly element creation
  }
}

// export default function () {
//   return (
//     <>
//       <h1>Hello World</h1>
//       <CompA />
//       <CompC />
//     </>
//   );
// }

const HomePage = () => {
  return (
    <>
      <h1>Hello World</h1>
      <CompA />
      <CompC />
    </>
  );
};
export default HomePage;
