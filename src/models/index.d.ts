// @ts-ignore
import {
  __modelMeta__,
  AsyncCollection,
  AsyncItem,
  LazyLoading,
  LazyLoadingDisabled,
  ManagedIdentifier,
  ModelInit,
  MutableModel,
} from '@aws-amplify/datastore';

export enum NotificationTypes {
  NEW_POST = 'NEW_POST',
  NEW_COMMENT = 'NEW_COMMENT',
}

type EagerComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly userID: string;
  readonly postID: string;
  readonly User?: User | null;
  readonly Post?: Post | null;
  readonly updatedAt?: string | null;
};

type LazyComment = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Comment, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly comment: string;
  readonly userID: string;
  readonly postID: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly updatedAt?: string | null;
};

export declare type Comment = LazyLoading extends LazyLoadingDisabled
  ? EagerComment
  : LazyComment;

export declare const Comment: (new (init: ModelInit<Comment>) => Comment) & {
  copyOf(
    source: Comment,
    mutator: (draft: MutableModel<Comment>) => MutableModel<Comment> | void,
  ): Comment;
};

type EagerPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly title: string;
  readonly price: string;
  readonly adress: string;
  readonly User?: User | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly description: string;
  readonly userID: string;
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly category?: string | null;
  readonly updatedAt?: string | null;
};

type LazyPost = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Post, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly type: string;
  readonly title: string;
  readonly price: string;
  readonly adress: string;
  readonly User: AsyncItem<User | undefined>;
  readonly Comments: AsyncCollection<Comment>;
  readonly description: string;
  readonly userID: string;
  readonly lat?: string | null;
  readonly long?: string | null;
  readonly category?: string | null;
  readonly updatedAt?: string | null;
};

export declare type Post = LazyLoading extends LazyLoadingDisabled
  ? EagerPost
  : LazyPost;

export declare const Post: (new (init: ModelInit<Post>) => Post) & {
  copyOf(
    source: Post,
    mutator: (draft: MutableModel<Post>) => MutableModel<Post> | void,
  ): Post;
};

type EagerUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly phoneNumber?: string | null;
  readonly employer: boolean;
  readonly about?: string | null;
  readonly userJob?: (string | null)[] | null;
  readonly fcmToken?: string | null;
  readonly Posts?: (Post | null)[] | null;
  readonly Comments?: (Comment | null)[] | null;
  readonly Notifications?: (Notification | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

type LazyUser = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<User, 'id'>;
    readOnlyFields: 'createdAt' | 'updatedAt';
  };
  readonly id: string;
  readonly email: string;
  readonly name?: string | null;
  readonly location?: string | null;
  readonly image?: string | null;
  readonly phoneNumber?: string | null;
  readonly employer: boolean;
  readonly about?: string | null;
  readonly userJob?: (string | null)[] | null;
  readonly fcmToken?: string | null;
  readonly Posts: AsyncCollection<Post>;
  readonly Comments: AsyncCollection<Comment>;
  readonly Notifications: AsyncCollection<Notification>;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
};

export declare type User = LazyLoading extends LazyLoadingDisabled
  ? EagerUser
  : LazyUser;

export declare const User: (new (init: ModelInit<User>) => User) & {
  copyOf(
    source: User,
    mutator: (draft: MutableModel<User>) => MutableModel<User> | void,
  ): User;
};

type EagerNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly readAt: number;
  readonly type?: NotificationTypes | keyof typeof NotificationTypes | null;
  readonly userId: string;
  readonly User?: User | null;
  readonly actorId: string;
  readonly Actor?: User | null;
  readonly Post?: Post | null;
  readonly Comment?: Comment | null;
  readonly updatedAt?: string | null;
  readonly notificationPostId?: string | null;
  readonly notificationCommentId?: string | null;
};

type LazyNotification = {
  readonly [__modelMeta__]: {
    identifier: ManagedIdentifier<Notification, 'id'>;
    readOnlyFields: 'updatedAt';
  };
  readonly id: string;
  readonly createdAt: string;
  readonly readAt: number;
  readonly type?: NotificationTypes | keyof typeof NotificationTypes | null;
  readonly userId: string;
  readonly User: AsyncItem<User | undefined>;
  readonly actorId: string;
  readonly Actor: AsyncItem<User | undefined>;
  readonly Post: AsyncItem<Post | undefined>;
  readonly Comment: AsyncItem<Comment | undefined>;
  readonly updatedAt?: string | null;
  readonly notificationPostId?: string | null;
  readonly notificationCommentId?: string | null;
};

export declare type Notification = LazyLoading extends LazyLoadingDisabled
  ? EagerNotification
  : LazyNotification;

export declare const Notification: (new (
  init: ModelInit<Notification>,
) => Notification) & {
  copyOf(
    source: Notification,
    mutator: (
      draft: MutableModel<Notification>,
    ) => MutableModel<Notification> | void,
  ): Notification;
};
