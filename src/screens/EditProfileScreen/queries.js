import {gql} from '@apollo/client';

export const getUser = gql`
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      email
      name
      location
      image
      phoneNumber
      employer
      about
      Posts {
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _deleted
      _version
    }
  }
`;

export const updateUser = gql`
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      email
      name
      location
      image
      phoneNumber
      employer
      about
      createdAt
      updatedAt
      _deleted
    }
  }
`;
