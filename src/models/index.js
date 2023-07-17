// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Comment, Post, User } = initSchema(schema);

export {
  Comment,
  Post,
  User
};