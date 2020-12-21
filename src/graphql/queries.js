/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getMockDeviceDataTest = /* GraphQL */ `
  query GetMockDeviceDataTest($sensor_id: String!, $timestamp: String!) {
    getMockDeviceDataTest(sensor_id: $sensor_id, timestamp: $timestamp) {
      sensor_id
      timestamp
      Dp_greater_point3
      latitude
      device_time
      longitude
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
        Dp_greater_point3
        latitude
        device_time
        longitude
      }
      nextToken
    }
  }
`;
