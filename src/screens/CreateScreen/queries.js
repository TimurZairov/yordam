import {gql} from '@apollo/client';

export const createPost = gql/* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
      id
      title
      price
      adress
      User {
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
      description
      userID
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
