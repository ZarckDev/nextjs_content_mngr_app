import Layout from 'components/Layout';
import { useState } from 'react';

const DEFAULT_DATA = {
  title: '',
  description: '',
  link: '',
  priority: '2',
  timeToFinish: 60,
};

const ResourceCreate = () => {
  const [form, setForm] = useState(DEFAULT_DATA);

  const submitForm = () => {
    alert(JSON.stringify(form));
  };

  const resetForm = () => setForm(DEFAULT_DATA);

  // handle writing field show (everytime there is a change on the input)
  const handleChange = (e) => {
    //geneirc for all inputs
    const { name, value } = e.target;
    setForm({ ...form, [name]: value }); // get all the data and provide the new input data, e target informs the "name" property
  };

  return (
    <Layout>
      <div className='container'>
        <div className='columns'>
          <div className='column is-8 is-offset-2'>
            <div className='resource-form'>
              <h1 className='title'>Add New Resource</h1>
              <form>
                <div className='field'>
                  <label className='label'>Title</label>
                  <div className='control'>
                    <input
                      value={form.title}
                      onChange={handleChange}
                      name='title'
                      className='input'
                      type='text'
                      placeholder='Learn NextJS and Sanity IO'
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Description</label>
                  <div className='control'>
                    <textarea
                      value={form.description}
                      onChange={handleChange}
                      name='description'
                      className='textarea'
                      placeholder='Learn these technologies because they are very popular and enable better SEO'
                    ></textarea>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Link</label>
                  <div className='control'>
                    <input
                      value={form.link}
                      onChange={handleChange}
                      name='link'
                      className='input'
                      type='text'
                      placeholder='https://academy.eincode.com'
                    />
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Priority</label>
                  <div className='control'>
                    <div className='select'>
                      <select
                        onChange={handleChange}
                        name='priority'
                        value={form.priority}
                      >
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                      </select>
                    </div>
                  </div>
                </div>
                <div className='field'>
                  <label className='label'>Time to finish</label>
                  <div className='control'>
                    <input
                      value={form.timeToFinish}
                      onChange={handleChange}
                      name='timeToFinish'
                      className='input'
                      type='number'
                      placeholder='60'
                    />
                  </div>
                  <p className='help'>time is in minutes</p>
                </div>
                <div className='field is-grouped'>
                  <div className='control'>
                    <button
                      type='button'
                      onClick={submitForm}
                      className='button is-link'
                    >
                      Submit
                    </button>
                  </div>
                  <div className='control'>
                    <button
                      type='button'
                      onClick={resetForm}
                      className='button is-link is-light'
                    >
                      Cancel
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ResourceCreate;
