import createAuth0Client from '@auth0/auth0-spa-js';
import React, { createContext, useState, useEffect, useContext } from 'react';

export const Auth0Context = createContext();
export const UseAuth0 = () => useContext(Auth0Context);

export function Auth0Provider({ children }) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [auth0Client, setAuth0Client] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    initAuth0();

    async function initAuth0() {
      const auth0 = await createAuth0Client({
        domain: 'dev-6gpit8rv.us.auth0.com',
        client_id: 'xFS8zilWgRXc6K7GNerqYVtyrlpr3kRW',
        redirect_uri: `${window.location.origin}/authentication/dashboard`,
      });

      setAuth0Client(auth0);

      // handle redirect when user returns
      if (
          window.location.search.includes('code=') &&
          window.location.search.includes('state=') 
         ) {
           try {
            await auth0.handleRedirectCallback();
           } catch (err) {
             alert(err);
           }

           window.location.replace(window.location.pathname);
           
         }
      

      // is a user authenticated

      const isAuthenticated = await auth0.isAuthenticated();
      setIsAuthenticated(isAuthenticated);

      // get user 

      if (isAuthenticated) {
          const user = await auth0.getUser();
          setUser(user);
      }

      setIsLoading(false);
    }
  }, []);


  if (isLoading) return <div>Loading...</div>
  return (
    <Auth0Context.Provider value={{ 
        isAuthenticated, 
        user,
        isLoading,
        login: (...p) => auth0Client.loginWithRedirect(...p),
        logout: (...p) => auth0Client.logout(...p),
        getToken: (...p) => auth0Client.getTokenSilently(...p),
    }}
    >
      {children}
    </Auth0Context.Provider>
  );
}
