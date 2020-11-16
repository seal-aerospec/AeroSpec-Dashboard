/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMockDeviceDataTest = /* GraphQL */ `
  query GetMockDeviceDataTest($id: ID!) {
    getMockDeviceDataTest(id: $id) {
      sensor_id
      timestamp
      CarbonDioxide
      Nitrogen
      Oxygen
      temperature
      createdAt
      updatedAt
    }
  }
`;
export const listMockDeviceDataTests = /* GraphQL */ `
  query ListMockDeviceDataTests(
    $filter: ModelMockDeviceDataTestFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockDeviceDataTests(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        sensor_id
        timestamp
        CarbonDioxide
        Nitrogen
        Oxygen
        temperature
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
export const getMockDataScheme1109 = /* GraphQL */ `
  query GetMockDataScheme1109($sensor_id: String!) {
    getMockDataScheme1109(sensor_id: $sensor_id) {
      sensor_id
      timestamp
      CarbonDioxide
      Nitrogen
      Oxygen
      temperature
    }
  }
`;
export const listMockDataScheme1109S = /* GraphQL */ `
  query ListMockDataScheme1109S(
    $filter: TableMockDataScheme1109FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMockDataScheme1109S(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        sensor_id
        timestamp
        CarbonDioxide
        Nitrogen
        Oxygen
        temperature
      }
      nextToken
    }
  }
`;
export const getTest123 = /* GraphQL */ `
  query GetTest123($sensor_id: String!, $timestamp: String!) {
    getTest123(sensor_id: $sensor_id, timestamp: $timestamp) {
      sensor_id
      timestamp
      CarbonDioxide
      Nitrogen
      Oxygen
      temperature
    }
  }
`;
export const listTest123S = /* GraphQL */ `
  query ListTest123S(
    $filter: TableTest123FilterInput
    $limit: Int
    $nextToken: String
  ) {
    listTest123S(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        sensor_id
        timestamp
        CarbonDioxide
        Nitrogen
        Oxygen
        temperature
      }
      nextToken
    }
  }
`;
