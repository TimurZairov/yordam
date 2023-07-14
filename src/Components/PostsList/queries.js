import {gql} from '@apollo/client';

export const postsByDate = gql/* GraphQL */ `
  query PostsByDate(
    $type: String!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelPostFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postsByDate(
      type: $type
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        title
        price
        adress
        lat
        long
        description
        userID
        category
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        Comments {
          nextToken
          startedAt
        }
      }

      nextToken
      startedAt
    }
  }
`;

export const listUsers = gql/* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        email
        name
        location
        image
        phoneNumber
        employer
        about
        userJob
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      nextToken
      startedAt
    }
  }
`;
