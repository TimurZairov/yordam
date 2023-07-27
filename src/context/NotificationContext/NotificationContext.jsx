import {createContext, useContext} from 'react';
import {useQuery} from '@apollo/client';
import {userNotifications} from './queries';
import {AppContext} from '../Context';

export const NotificationContext = createContext({
  notification: 0,
});

const NotificationContextProvider = ({children}) => {
  const {userId} = useContext(AppContext);

  const {data} = useQuery(userNotifications, {variables: {userId}});
  const newNotification = (data?.userNotifications?.items || []).filter(
    item => !item._deleted & !item.readAt,
  );

  console.log(newNotification);
  return (
    <NotificationContext.Provider
      value={{notification: newNotification.length}}>
      {children}
    </NotificationContext.Provider>
  );
};

export default NotificationContextProvider;
