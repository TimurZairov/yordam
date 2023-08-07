import {gql} from '@apollo/client';

export const createNotification = gql`
  mutation CreateNotification(
    $input: CreateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    createNotification(input: $input, condition: $condition) {
      id
      createdAt
      readAt
      type
      userId
      User {
        id
        email
        name
        location
        image
        phoneNumber
        employer
        about
        userJob
        fcmToken
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      actorId
      Actor {
        id
        email
        name
        location
        image
        phoneNumber
        employer
        about
        userJob
        fcmToken
        Posts {
          nextToken
          startedAt
        }
        Comments {
          nextToken
          startedAt
        }
        Notifications {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Post {
        id
        createdAt
        type
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
          userJob
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Comments {
          nextToken
          startedAt
        }
        description
        userID
        lat
        long
        category
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      Comment {
        id
        createdAt
        comment
        userID
        postID
        User {
          id
          email
          name
          location
          image
          phoneNumber
          employer
          about
          userJob
          fcmToken
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        Post {
          id
          createdAt
          type
          title
          price
          adress
          description
          userID
          lat
          long
          category
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      updatedAt
      _version
      _deleted
      _lastChangedAt
      notificationPostId
      notificationCommentId
    }
  }
`;
