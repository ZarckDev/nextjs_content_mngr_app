export default async function (req, res) {
  const dataRes = await fetch('http://http://localhost:3001/api/resources');
  const data = await dataRes.json();

  res.send(data);
}
