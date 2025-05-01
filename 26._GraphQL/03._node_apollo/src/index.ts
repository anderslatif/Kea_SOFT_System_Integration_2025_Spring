import { ApolloServer } from '@apollo/server';
import { gql } from 'apollo-server';

import { createServer } from 'http';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { WebSocketServer } from 'ws';
import { useServer } from 'graphql-ws/lib/use/ws';
import cors from 'cors';
import express from 'express';

const app = express();
const httpServer = createServer(app);

import fs  from 'fs';
import path from 'path';

const schemaPath = path.resolve('src/graphql/schema.graphql');
const schemaFile = fs.readFileSync(schemaPath, 'utf8');
const typeDefs = gql(schemaFile);


import Query from './resolvers/Query.js';
import Mutation from './resolvers/Mutation.js';
import Subscription from './resolvers/Subscription.js';
import Book from "./resolvers/Book.js";
import Author from "./resolvers/Author.js";


const resolvers = {
    Query,
    Mutation,
    Subscription,

    Book,
    Author
};


const schema = makeExecutableSchema({ typeDefs, resolvers });

const wsServer = new WebSocketServer({
  server: httpServer,
  path: '/graphql',
});

// Hand in the schema we just created and have the
// WebSocketServer start listening.
const serverCleanup = useServer({ schema }, wsServer);  
  
const server = new ApolloServer({ 
  schema,
  introspection: true,  // Enable introspection for field descriptions
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    {
      async serverWillStart() {
        return {
          async drainServer() {
            await serverCleanup.dispose();
          },
        };
      }
    }
  ],
});

await server.start();

app.use('/graphql', cors<cors.CorsRequest>(), express.json(), expressMiddleware(server));


const PORT = 4000;

// Now that our HTTP server is fully set up, we can listen to it.

httpServer.listen(PORT, () => {

  console.log(`Server is now running on http://localhost:${PORT}/graphql`);

});