import {gql} from '@apollo/client';

export const getUser = gql/* GraphQL */ `
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

      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
