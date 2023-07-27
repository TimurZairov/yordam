// @ts-check
import {initSchema} from '@aws-amplify/datastore';
import {schema} from './schema';

const NotificationTypes = {
  NEW_POST: 'NEW_POST',
  NEW_COMMENT: 'NEW_COMMENT',
};

const {Comment, Post, User, Notification} = initSchema(schema);

export {Comment, Post, User, Notification, NotificationTypes};
