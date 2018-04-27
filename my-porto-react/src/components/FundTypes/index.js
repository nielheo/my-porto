import React from "react";

import { Query } from "react-apollo";
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

export default FundTypes