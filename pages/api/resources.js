import axios from 'axios';

export default async function (req, res) {
  if (req.method === 'GET') {
    const dataRes = await fetch('http://localhost:3001/api/resources');
    const data = await dataRes.json();

    return res.send(data);
  }

  if (req.method === 'POST' || req.method === 'PATCH') {
    const { id, title, description, link, timeToFinish, priority } = req.body;
    if (!title || !description || !link || !timeToFinish || !priority) {
      return res.status(422).send('Data are missing!');
    }

    const url =
      req.method === 'POST'
        ? 'http://localhost:3001/api/resources'
        : `http://localhost:3001/api/resources/${id}`; // for PATCH (edit mode)

    try {
      const axiosRes = await axios[req.method.toLowerCase()](url, req.body); // same as axios.post or axios.patch
      return res.send(axiosRes.data); // message from server (content-manager-app-api)
    } catch (e) {
      return res.status(422).send('Data cannot be stored');
    }
  }
}
