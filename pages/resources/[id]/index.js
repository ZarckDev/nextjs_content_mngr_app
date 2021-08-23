// name index.js is not taking into consideration
import Layout from 'components/Layout';
import ResourceLabel from 'components/ResourceLabel';
import Link from 'next/link';
import axios from 'axios';
import moment from 'moment'; // format date

const ResourceDetail = ({ resource }) => {
  const activateResource = () => {
    axios
      .patch('/api/resources', { ...resource, status: 'active' })
      .then(() => location.reload())
      .catch(() => alert('Cannot activate the resource'));
  };

  return (
    <Layout>
      <section className='hero '>
        <div className='hero-body'>
          <div className='container'>
            <section className='section'>
              <div className='columns'>
                <div className='column is-8 is-offset-2'>
                  <div className='content is-medium'>
                    <h2 className='subtitle is-4'>
                      {moment(resource.createdAt).format('LLL')}
                      <ResourceLabel status={resource.status} />
                    </h2>
                    <h1 className='title'>{resource.title}</h1>
                    <p>{resource.description}</p>
                    <p>Time to finish: {resource.timeToFinish}</p>
                    {resource.status === 'inactive' && (
                      <>
                        <Link href={`/resources/${resource.id}/edit`}>
                          <a className='button is-warning'>Update</a>
                        </Link>
                        <button
                          onClick={activateResource}
                          className='button is-success ml-1'
                        >
                          Activate
                        </button>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export async function getServerSideProps({ params }) {
  const dataRes = await fetch(`${process.env.API_URL}/resources/${params.id}`); // params.id connected to [id].js name
  const data = await dataRes.json();

  return {
    // will be passed to the component as parameter
    props: {
      resource: data,
    },
  };
}

export default ResourceDetail;
