import Layout from 'components/Layout';
import { useRouter } from 'next/router';

const ResourceDetail = ({ resource }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading data!</div>;
  }
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

export async function getStaticPaths() {
  // will create as many pages as there are resources (will generate HTML/json for each at build)  ==> using getServerSideProps, only one page will be generated
  const dataRes = await fetch(`http://localhost:3001/api/resources`);
  const data = await dataRes.json();
  const paths = data.map((resource) => {
    return {
      params: { id: resource.id },
    };
  });

  return {
    paths,
    // when false , means that other routes should resolve into 404 page
    fallback: false, // when true, execute to try to fetch data before going to 404 ( we give a chance to find it)
    // example when a resource is created whil app is running, it will try to find the resource thanks to fallback
  };
}

export async function getStaticProps({ params }) {
  // getStaticProps need to be called at the build time, so we nee to know avery resource before calling

  const dataRes = await fetch(
    `http://localhost:3001/api/resources/${params.id}`
  ); // params.id connected to [id].js name
  const data = await dataRes.json();

  return {
    // will be passed to the component as parameter
    props: {
      resource: data,
    },
    revalidate: 1, // after 1s regenerate the page (example if a data is updated between, normally the HTML pages are already generated so we won't get the update, thanks to revalidate, it's possible)
  };
}

export default ResourceDetail;
