import graphQLSchema from './server/schemas/schema';

const express = require('express');
const bodyParser = require('body-parser');
const { graphqlExpress, graphiqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');

const cors = require('cors');

// Initialize the app
const app = express();

var corsOptions = {
  origin: function(origin, callback){
      //var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
      callback(null, true);
  },
  credentials: true
};
app.use(cors(corsOptions));

// The GraphQL endpoint
//app.options('/graphql', cors())
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: graphQLSchema }));

// GraphiQL, a visual editor for queries
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/graphiql to run queries!');
});