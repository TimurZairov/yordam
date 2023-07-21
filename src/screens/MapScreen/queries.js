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
      }

      nextToken
      startedAt
    }
  }
`;
