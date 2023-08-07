/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createComment = /* GraphQL */ `
  mutation CreateComment(
    $input: CreateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    createComment(input: $input, condition: $condition) {
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
export const updateComment = /* GraphQL */ `
  mutation UpdateComment(
    $input: UpdateCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    updateComment(input: $input, condition: $condition) {
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
export const deleteComment = /* GraphQL */ `
  mutation DeleteComment(
    $input: DeleteCommentInput!
    $condition: ModelCommentConditionInput
  ) {
    deleteComment(input: $input, condition: $condition) {
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
export const createPost = /* GraphQL */ `
  mutation CreatePost(
    $input: CreatePostInput!
    $condition: ModelPostConditionInput
  ) {
    createPost(input: $input, condition: $condition) {
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
export const updatePost = /* GraphQL */ `
  mutation UpdatePost(
    $input: UpdatePostInput!
    $condition: ModelPostConditionInput
  ) {
    updatePost(input: $input, condition: $condition) {
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
export const deletePost = /* GraphQL */ `
  mutation DeletePost(
    $input: DeletePostInput!
    $condition: ModelPostConditionInput
  ) {
    deletePost(input: $input, condition: $condition) {
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
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
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
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
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
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
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
export const createNotification = /* GraphQL */ `
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
export const updateNotification = /* GraphQL */ `
  mutation UpdateNotification(
    $input: UpdateNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    updateNotification(input: $input, condition: $condition) {
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
export const deleteNotification = /* GraphQL */ `
  mutation DeleteNotification(
    $input: DeleteNotificationInput!
    $condition: ModelNotificationConditionInput
  ) {
    deleteNotification(input: $input, condition: $condition) {
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
