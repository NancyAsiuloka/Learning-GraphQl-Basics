import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

// types
import { typeDefs  } from './schema.js';

// Server Setup
const server = new ApolloServer({
    typeDefs,
    // typeDefs --- definitions of types of data
    // resolvers
});

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 }
});

console.log('Server ready at port', 4000);