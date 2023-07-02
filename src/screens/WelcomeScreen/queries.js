import {gql} from '@apollo/client';

export const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      employer

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
