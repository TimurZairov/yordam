import {createContext, useContext, useEffect} from 'react';
import {useQuery} from '@apollo/client';
import {onCreateNotification, userNotifications} from './queries';
import {AppContext} from '../Context';

export const NotificationContext = createContext({
  notification: 0,
  newNotification: [],
  postIds: [],
});

const NotificationContextProvider = ({children}) => {
  const {userId} = useContext(AppContext);

  //query new notification && merge to subscription
  const {data, subscribeToMore} = useQuery(userNotifications, {
    variables: {userId},
  });
  const newNotification = (data?.userNotifications?.items || []).filter(
    item => !item?._deleted & !item?.readAt,
  );

  //show notifications in tabBarBadge & if more than 10 show +10

  let countNotification = newNotification.length;
  if (newNotification.length >= 10) {
    countNotification = '10+';
  }

  //get post ids to local array
  let postIds = [];

  if (newNotification.length > 0) {
    newNotification.map(n => {
      postIds.push(n.notificationPostId);
    });
  }
  // subscribe to new notification with subscription #variables just to auth user
  useEffect(() => {
    if (!subscribeToMore || !userId) {
      return;
    }
    subscribeToMore({
      document: onCreateNotification,
      variables: {filter: {userId: {eq: userId}}},
      updateQuery: (prev, next) => {
        //merge data from query and subscription
        return {
          ...prev,
          userNotifications: {
            ...prev.userNotifications.items,
            items: [
              ...(prev?.notification.items || []),
              next.subscriptionData.data.onCreateNotification,
            ],
          },
        };
      },
    });
  }, [subscribeToMore, userId]);

  return (
    <NotificationContext.Provider
      value={{notification: countNotification, newNotification, postIds}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
