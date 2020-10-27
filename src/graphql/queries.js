/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAeroSpec = /* GraphQL */ `
  query GetAeroSpec($id: ID!) {
    getAeroSpec(id: $id) {
      id
      deviceName
    }
  }
`;

export const listAeroSpecs = /* GraphQL */ `
  query ListAeroSpecs(
    $filter: ModelAeroSpecFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAeroSpecs(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        deviceName
        temperature
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
