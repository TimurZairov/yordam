export const schema = {
  models: {
    Comment: {
      name: 'Comment',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: true,
          attributes: [],
        },
        comment: {
          name: 'comment',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        userID: {
          name: 'userID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        postID: {
          name: 'postID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        User: {
          name: 'User',
          isArray: false,
          type: {
            model: 'User',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['userID'],
          },
        },
        Post: {
          name: 'Post',
          isArray: false,
          type: {
            model: 'Post',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['postID'],
          },
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Comments',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byUser',
            fields: ['userID'],
          },
        },
        {
          type: 'key',
          properties: {
            name: 'byPost',
            queryField: 'commentsByPost',
            fields: ['postID', 'createdAt'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Post: {
      name: 'Post',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: true,
          attributes: [],
        },
        type: {
          name: 'type',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        title: {
          name: 'title',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        price: {
          name: 'price',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        adress: {
          name: 'adress',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        User: {
          name: 'User',
          isArray: false,
          type: {
            model: 'User',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['userID'],
          },
        },
        Comments: {
          name: 'Comments',
          isArray: true,
          type: {
            model: 'Comment',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['Post'],
          },
        },
        description: {
          name: 'description',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        userID: {
          name: 'userID',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        lat: {
          name: 'lat',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        long: {
          name: 'long',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        category: {
          name: 'category',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Posts',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'postsByDate',
            queryField: 'postsByDate',
            fields: ['type', 'createdAt'],
          },
        },
        {
          type: 'key',
          properties: {
            name: 'byUser',
            fields: ['userID'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    User: {
      name: 'User',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        email: {
          name: 'email',
          isArray: false,
          type: 'String',
          isRequired: true,
          attributes: [],
        },
        name: {
          name: 'name',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        location: {
          name: 'location',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        image: {
          name: 'image',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        phoneNumber: {
          name: 'phoneNumber',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        employer: {
          name: 'employer',
          isArray: false,
          type: 'Boolean',
          isRequired: true,
          attributes: [],
        },
        about: {
          name: 'about',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        userJob: {
          name: 'userJob',
          isArray: true,
          type: 'String',
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
        },
        fcmToken: {
          name: 'fcmToken',
          isArray: false,
          type: 'String',
          isRequired: false,
          attributes: [],
        },
        Posts: {
          name: 'Posts',
          isArray: true,
          type: {
            model: 'Post',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['User'],
          },
        },
        Comments: {
          name: 'Comments',
          isArray: true,
          type: {
            model: 'Comment',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['User'],
          },
        },
        Notifications: {
          name: 'Notifications',
          isArray: true,
          type: {
            model: 'Notification',
          },
          isRequired: false,
          attributes: [],
          isArrayNullable: true,
          association: {
            connectionType: 'HAS_MANY',
            associatedWith: ['User'],
          },
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
      },
      syncable: true,
      pluralName: 'Users',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
    Notification: {
      name: 'Notification',
      fields: {
        id: {
          name: 'id',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        createdAt: {
          name: 'createdAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: true,
          attributes: [],
        },
        readAt: {
          name: 'readAt',
          isArray: false,
          type: 'AWSTimestamp',
          isRequired: true,
          attributes: [],
        },
        type: {
          name: 'type',
          isArray: false,
          type: {
            enum: 'NotificationTypes',
          },
          isRequired: false,
          attributes: [],
        },
        userId: {
          name: 'userId',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        User: {
          name: 'User',
          isArray: false,
          type: {
            model: 'User',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['userId'],
          },
        },
        actorId: {
          name: 'actorId',
          isArray: false,
          type: 'ID',
          isRequired: true,
          attributes: [],
        },
        Actor: {
          name: 'Actor',
          isArray: false,
          type: {
            model: 'User',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'BELONGS_TO',
            targetNames: ['actorId'],
          },
        },
        Post: {
          name: 'Post',
          isArray: false,
          type: {
            model: 'Post',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'HAS_ONE',
            associatedWith: ['id'],
            targetNames: ['notificationPostId'],
          },
        },
        Comment: {
          name: 'Comment',
          isArray: false,
          type: {
            model: 'Comment',
          },
          isRequired: false,
          attributes: [],
          association: {
            connectionType: 'HAS_ONE',
            associatedWith: ['id'],
            targetNames: ['notificationCommentId'],
          },
        },
        updatedAt: {
          name: 'updatedAt',
          isArray: false,
          type: 'AWSDateTime',
          isRequired: false,
          attributes: [],
          isReadOnly: true,
        },
        notificationPostId: {
          name: 'notificationPostId',
          isArray: false,
          type: 'ID',
          isRequired: false,
          attributes: [],
        },
        notificationCommentId: {
          name: 'notificationCommentId',
          isArray: false,
          type: 'ID',
          isRequired: false,
          attributes: [],
        },
      },
      syncable: true,
      pluralName: 'Notifications',
      attributes: [
        {
          type: 'model',
          properties: {},
        },
        {
          type: 'key',
          properties: {
            name: 'byUser',
            queryField: 'userNotifications',
            fields: ['userId', 'createdAt'],
          },
        },
        {
          type: 'auth',
          properties: {
            rules: [
              {
                allow: 'public',
                operations: ['create', 'update', 'delete', 'read'],
              },
            ],
          },
        },
      ],
    },
  },
  enums: {
    NotificationTypes: {
      name: 'NotificationTypes',
      values: ['NEW_POST', 'NEW_COMMENT'],
    },
  },
  nonModels: {},
  codegenVersion: '3.4.3',
  version: '39461ad4c06eb261b530cbdebc92f018',
};
