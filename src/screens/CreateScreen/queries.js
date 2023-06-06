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
      description
      userID
      lat
      long
    }
  }
`;
