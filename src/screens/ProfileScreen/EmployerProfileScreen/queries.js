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
    }
  }
`;
