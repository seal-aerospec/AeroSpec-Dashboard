/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAeroSpec = /* GraphQL */ `
  mutation CreateAeroSpec(
    $input: CreateAeroSpecInput!
    $condition: ModelAeroSpecConditionInput
  ) {
    createAeroSpec(input: $input, condition: $condition) {
      id
      deviceName
      temperature
      createdAt
      updatedAt
    }
  }
`;
export const updateAeroSpec = /* GraphQL */ `
  mutation UpdateAeroSpec(
    $input: UpdateAeroSpecInput!
    $condition: ModelAeroSpecConditionInput
  ) {
    updateAeroSpec(input: $input, condition: $condition) {
      id
      deviceName
      temperature
      createdAt
      updatedAt
    }
  }
`;
export const deleteAeroSpec = /* GraphQL */ `
  mutation DeleteAeroSpec(
    $input: DeleteAeroSpecInput!
    $condition: ModelAeroSpecConditionInput
  ) {
    deleteAeroSpec(input: $input, condition: $condition) {
      id
      deviceName
      temperature
      createdAt
      updatedAt
    }
  }
`;
