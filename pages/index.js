//jsconfig.json allow us to use absolute path, see the config file
// import Navbar from '../components/Navbar';
import Layout from 'components/Layout';
import ResourceHighlight from 'components/ResourceHighlight';
import Newsletter from 'components/Newsletter';
import ResourceList from 'components/ResourceList';
import Footer from 'components/Footer';

import { resources } from 'api/data';

function Home() {
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
export default Home;
