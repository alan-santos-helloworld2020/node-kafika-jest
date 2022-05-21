const request = require('supertest');
const app = require('./server.js');

test('descricao do que espero', async () => {
  const res =  await request(app).get("/");
  console.log(res.body)
  await expect(res.statusCode)
  .toBe(200);
  
});

