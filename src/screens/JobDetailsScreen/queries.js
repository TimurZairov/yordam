import {gql} from '@apollo/client';

export const getPost = gql`
  query GetPost($id: ID!) {
    getPost(id: $id) {
      id
      title
      price
      adress
      User {
        id
        email
        name
        image
        phoneNumber
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Comments {
        items {
          id
          comment
          userID
          postID
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      description
      lat
      long
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
