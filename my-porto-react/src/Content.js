import React from "react";
import { render } from "react-dom";

import { ApolloProvider, Query } from "react-apollo";
import ApolloClient from "apollo-boost";
import gql from "graphql-tag";

const FundTypes = () => (
  <Query
    query={gql`
        {
            fundTypes {
                id
                name
                fundProducts {
                    id
                    code
                }
            }
        }
    `}
  >
    {({ loading, error, data }) => {
      if (loading) return <p>Loading...</p>;
      if (error) return <p>Error :(</p>;

      return data.fundTypes.map(({ id, name }) => (
        <div key={id}>
          <p>{`${id}: ${name}`}</p>
        </div>
      ));
    }}
  </Query>
);


const client = new ApolloClient({
  uri: "http://localhost:3000/graphql"
});

const Content = () => (
  <ApolloProvider client={client}>
    <div>
      <h2>My first Apollo app 🚀</h2>
    </div>
    <FundTypes />
  </ApolloProvider>
);

export default Content;