//jsconfig.json allow us to use absolute path, see the config file
// import Navbar from '../components/Navbar';
import Layout from 'components/Layout';
import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';
import { useEffect } from 'react';

// CORS cannot make request from one domain to another (forbidden, not secure)
// not possible in the Home() function for example

function Home({ resources }) {
  // CORS cannot make request from one domain to another (forbidden, not secure)
  // BELOW : not possible in the Home() function for example
  // useEffect(() => {
  //   fetch('http://http://localhost:3001/api/resources');
  // }, []);

  //FIRST solution to CORS
  // try with localhost:3000 thanks to resources.js (server), same domain request
  // useEffect(() => {
  //   fetch('http://http://localhost:3000/api/resources');
  // }, []);

  // SECOND solution, use cors NPM package on Node server API to mention the domain localhost:3000, and now we are able to to de request
  useEffect(() => {
    fetch('http://http://localhost:3001/api/resources');
  }, []);

  return (
    <Layout>
      {/* only show the first 2 resources */}
      <ResourceHighlight resources={resources.slice(0, 2)} />
      <Newsletter />
      <ResourceList resources={resources} />
      <Footer />
    </Layout>
  );
}

// is called everytime you will visit the page
// function is executed on the server
// data are always fresh
export async function getServerSideProps() {
  const resData = await fetch('http://localhost:3001/api/resources'); // from node server
  const data = await resData.json();

  return {
    props: {
      resources: data,
    },
  };
}

export default Home;
