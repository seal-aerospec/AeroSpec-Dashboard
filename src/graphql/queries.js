/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getServerlessrepoLambdaIotRuleMyTable1S5Lw3Qy2Broc = /* GraphQL */ `
  query GetServerlessrepoLambdaIotRuleMyTable1S5Lw3Qy2Broc($id: ID!) {
    getServerlessrepoLambdaIotRuleMyTable1S5LW3QY2BROC(id: $id) {
      id
      payload
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listServerlessrepoLambdaIotRuleMyTable1S5Lw3Qy2BroCs = /* GraphQL */ `
  query ListServerlessrepoLambdaIotRuleMyTable1S5Lw3Qy2BroCs(
    $filter: ModelServerlessrepoLambdaIotRuleMyTable1S5LW3QY2BROCFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listServerlessrepoLambdaIotRuleMyTable1S5LW3QY2BROCs(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        payload
        timestamp
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
