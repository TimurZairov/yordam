import {useMutation} from '@apollo/client';
import {createNotification} from './queries';
import {NotificationTypes} from '../../models';

const useNotificationService = ({post, userId}) => {
  console.log(post.userID);
  const [doCreateNotification] = useMutation(createNotification, {
    variables: {
      input: {
        type: NotificationTypes.NEW_COMMENT,
        userId: post?.userID,
        actorId: userId,
        readAt: 0,
        notificationPostId: post?.id,
      },
    },
  });
  return {
    doCreateNotification,
  };
};

export default useNotificationService;
