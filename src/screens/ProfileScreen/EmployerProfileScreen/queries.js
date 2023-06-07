import {gql} from '@apollo/client';

/*export const getUser = gql`
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
`;*/

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
      Posts {
        items {
          id
          title
          price
          adress
          description
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
