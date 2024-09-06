import { fastify } from 'fastify'
import { DatabaseUsers } from './database.js';

const server = fastify();
const database = new DatabaseUsers;


server.post('/users', async (request, reply) => { //async signifca que vai demorar p chegar
  const body = request.body;
    await database.createUser(body);
  return 201
})


server.get('/', () => {
  return 'Chester';
});

server.listen({
  port: 3333,
})
