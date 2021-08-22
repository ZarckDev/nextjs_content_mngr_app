import Layout from 'components/Layout';
import ResourceForm from 'components/ResourceForm';
import axios from 'axios';

const ResourceEdit = ({ resource }) => {
  const updateResource = (formData) => {
    axios
      .patch(`/api/resources`, formData)
      .then(() => alert('Data has been updated'))
      .catch(
        (err) => alert(err?.response?.data) // ? in case of undefined data
      );
  };
  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <ResourceForm
              initialData={resource}
              onFormSubmit={updateResource}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  ); // params.id connected to [id].js name
  const data = await dataRes.json();

  return {
    // will be passed to the component as parameter
    props: {
      resource: data,
    },
  };
}

export default ResourceEdit;
