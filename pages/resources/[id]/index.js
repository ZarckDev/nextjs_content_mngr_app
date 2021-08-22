// name index.js is not taking into consideration
import Layout from 'components/Layout';
import Link from 'next/Link';

const ResourceDetail = ({ resource }) => {
  return (
    <Layout>
      <section className='hero '>
        <div className='hero-body'>
          <div className='container'>
            <section className='section'>
              <div className='columns'>
                <div className='column is-8 is-offset-2'>
                  <div className='content is-medium'>
                    <h2 className='subtitle is-4'>{resource.createdAt}</h2>
                    <h1 className='title'>{resource.title}</h1>
                    <p>{resource.description}</p>
                    <Link href={`/resources/${resource.id}/edit`}>
                      <a className='button is-warning'>Update</a>
                    </Link>
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

export default ResourceDetail;
