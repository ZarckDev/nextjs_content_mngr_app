import Layout from 'components/Layout';

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

//getInitialProps executed both on the server and the client (a bit deprecated method)
// ResourceDetail.getInitialProps = async ({ query }) => {
//   // CORS issue with this method (server works but the browser client make CORS issue)
//   const dataRes = await fetch(
//     `http://localhost:3001/api/resources/${query.id}`
//   ); // params.id connected to [id].js name
//   const data = await dataRes.json();

//   return {
//     resource: data,
//   };
// };

export async function getServerSideProps({ params }) {
  // see documentation for getServerSideProps
  //   function getServerSideProps({ params, query })
  //   console.log(query); // we can also access to the id through the URL, but we can have more things, ex: ferferfer?someparam="helloworld"

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
