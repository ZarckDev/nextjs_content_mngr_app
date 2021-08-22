import Layout from 'components/Layout';
import ResourceForm from 'components/ResourceForm';
import axios from 'axios';
import { useRouter } from 'next/router';

const ResourceCreate = () => {
  const router = useRouter();

  const createResource = (formData) => {
    // request from the browser, so provide relative path is ok
    // fetch('/api/resources', {
    //   body: JSON.stringify(form),
    //   headers: { 'Content-Type': 'application/json' },
    //   method: 'POST',
    // });
    axios
      .post('/api/resources', formData)
      .then((res) => router.push('/')) // redirect to home page
      .catch(
        (err) => alert(err?.response?.data) // ? in case of undefined data
      );
  };

  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <ResourceForm onFormSubmit={createResource} />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
