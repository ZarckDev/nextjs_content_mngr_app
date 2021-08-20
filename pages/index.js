//jsconfig.json allow us to use absolute path, see the config file
// import Navbar from '../components/Navbar';
import Layout from 'components/Layout';
import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';

function Home({ resources }) {
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
