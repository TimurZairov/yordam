/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCommentByPostId = /* GraphQL */ `
  subscription OnCommentByPostId($postID: ID!) {
    onCommentByPostId(postID: $postID) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment($filter: ModelSubscriptionCommentFilterInput) {
    onCreateComment(filter: $filter) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment($filter: ModelSubscriptionCommentFilterInput) {
    onUpdateComment(filter: $filter) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment($filter: ModelSubscriptionCommentFilterInput) {
    onDeleteComment(filter: $filter) {
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
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost($filter: ModelSubscriptionPostFilterInput) {
    onCreatePost(filter: $filter) {
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost($filter: ModelSubscriptionPostFilterInput) {
    onUpdatePost(filter: $filter) {
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost($filter: ModelSubscriptionPostFilterInput) {
    onDeletePost(filter: $filter) {
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
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
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
  }
`;
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
        items {
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
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          actorId
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
        items {
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
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          actorId
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
        items {
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
        nextToken
        startedAt
      }
      Comments {
        items {
          id
          createdAt
          comment
          userID
          postID
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        nextToken
        startedAt
      }
      Notifications {
        items {
          id
          createdAt
          readAt
          type
          userId
          actorId
          updatedAt
          _version
          _deleted
          _lastChangedAt
          notificationPostId
          notificationCommentId
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
export const onCreateNotification = /* GraphQL */ `
  subscription OnCreateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onCreateNotification(filter: $filter) {
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
export const onUpdateNotification = /* GraphQL */ `
  subscription OnUpdateNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onUpdateNotification(filter: $filter) {
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
export const onDeleteNotification = /* GraphQL */ `
  subscription OnDeleteNotification(
    $filter: ModelSubscriptionNotificationFilterInput
  ) {
    onDeleteNotification(filter: $filter) {
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
