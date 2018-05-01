import { GraphQLScalarType } from 'graphql';
import { Kind } from 'graphql/language';
import { makeExecutableSchema } from 'graphql-tools';

const resolverMap = {
    Date: new GraphQLScalarType({
      name: 'Date',
      description: 'Date custom scalar type',
      parseValue(value) {
        return new Date(value); // value from the client
      },
      serialize(value) {
        return value.getTime(); // value sent to the client
      },
      parseLiteral(ast) {
        if (ast.kind === Kind.INT) {
          return parseInt(ast.value, 10); // ast value is always in string format
        }
        return null;
      },
    }),
  };

const schemaString = `

scalar Date

type MyType {
   created: Date
}

`;

const resolverFunctions = {
    Date: resolverMap
};

const jsSchema = makeExecutableSchema({ typeDefs: schemaString, resolvers: resolveFunctions });