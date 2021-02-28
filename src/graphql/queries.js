/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getFrontendteamschema = /* GraphQL */ `
  query GetFrontendteamschema($id: ID!) {
    getFrontendteamschema(id: $id) {
      id
      Battery
      Date
      Env_PM_smaller_than_1_0
      Env_PM_smaller_than_10
      Env_PM_smaller_than_2_5
      equiv_CO2_ppm
      Latitude
      Longitude
      Particle_Count_0_3um
      PC_0_5um
      PC_1_0num
      PC_10um
      PC_2_5um
      PC_5um
      Relative_Humidity
      Serial_Number
      Temperature_c
      Time
      total_VoC_ppb
      Wifi_Strength
    }
  }
`;
export const listFrontendteamschemas = /* GraphQL */ `
  query ListFrontendteamschemas(
    $filter: ModelfrontendteamschemaFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listFrontendteamschemas(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        Battery
        Date
        Env_PM_smaller_than_1_0
        Env_PM_smaller_than_10
        Env_PM_smaller_than_2_5
        equiv_CO2_ppm
        Latitude
        Longitude
        Particle_Count_0_3um
        PC_0_5um
        PC_1_0num
        PC_10um
        PC_2_5um
        PC_5um
        Relative_Humidity
        Serial_Number
        Temperature_c
        Time
        total_VoC_ppb
        Wifi_Strength
        createdAt
        updatedAt
      }
      nextToken
    }
  }
`;
