/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getDeviceDataTest = /* GraphQL */ `
  query GetDeviceDataTest($id: ID!) {
    getDeviceDataTest(id: $id) {
      id
      payload
      timestamp
      createdAt
      updatedAt
    }
  }
`;
export const listDeviceDataTests = /* GraphQL */ `
  query ListDeviceDataTests(
    $filter: ModelDeviceDataTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDeviceDataTests(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
