import FundTypeType from './fundtype/fundtype.type'
import FundProductType from './fundproduct/fundproduct.type'

import RootQuery from './rootquery/rootquery.type'
//import RootMutation from './root-mutation/root-mutation.type.js'

import resolvers from './resolvers'

import { makeExecutableSchema } from 'graphql-tools'

// the schema type only has two properties: query and mutations
// the RootQuery contains the root entry points into graphQL
// If you want to define more entry points, you add to RootQuery

// mutation would be your entrypoints for updating / inserting data

// Note: the RootQuery defined in `schema { }` is NOT the `import RootQuery`
// It is the reference to the `type RootQuery` definition
// Ex: if you renamed `type RootQuery` -> `type MasterQuery`, then
// it should be `schema { query: MasterQuery }`
const SchemaDefinition = `
  schema {
    query: RootQuery,
  }`
 // ,
 //   mutation: RootMutation
 // }
//`

const schema = makeExecutableSchema({
  // Add the type definitions to the schema
  typeDefs: [
    SchemaDefinition,
    RootQuery,
    //RootMutation,
    FundTypeType,
    FundProductType
  ],
  // performs field lookups for a specific type
  resolvers
})

export default schema