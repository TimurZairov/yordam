import React, {createContext, useEffect, useState} from 'react';
import {Auth, Hub} from 'aws-amplify';

export const AppContext = createContext({
  user: undefined,
  userId: undefined,
});

const AppProvider = ({children}) => {
  const [user, setUser] = useState(undefined);

  const isSigned = async () => {
    try {
      const signedUser = await Auth.currentAuthenticatedUser({
        bypassCache: true,
      });
      setUser(signedUser);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    isSigned();
  }, []);

  useEffect(() => {
    const signOutListener = async data => {
      try {
        const {event} = await data.payload;
        if (event === 'signOut') {
          setUser(null);
        }
        if (event === 'signIn') {
          isSigned();
        }
      } catch (e) {
        console.log(e);
      }
    };

    Hub.listen('auth', signOutListener);
    return () => {
      Hub.remove('auth', signOutListener);
    };
  }, []);

  return (
    <AppContext.Provider value={{user, userId: user?.attributes.sub}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
