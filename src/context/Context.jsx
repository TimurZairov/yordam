import React, {createContext, useEffect, useState} from 'react';
import {Auth, Hub} from 'aws-amplify';

export const AppContext = createContext({user: undefined, setUser: Function});

const AppProvider = ({children}) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    try {
      const isSigned = async () => {
        if (user !== undefined) {
          const signedUser = await Auth.currentAuthenticatedUser({
            bypassCache: true,
          });
          if (signedUser) {
            setUser(signedUser);
          } else {
            return;
          }
        }
      };
      isSigned();
    } catch (e) {
      console.log(e);
    }
  }, []);

  useEffect(() => {
    const signOutListener = async data => {
      try {
        const {event} = await data.payload;
        if (event === 'signOut') {
          setUser(null);
        }
        if (event === 'signIn') {
          console.log('ok');
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
    <AppContext.Provider value={{user, setUser}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
