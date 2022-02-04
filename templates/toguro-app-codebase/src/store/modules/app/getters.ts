import state from './state';

const gettersOfApp = {
  appLoaded: () => state.appLoaded,
  authToken: () => state.appAccessToken,
  loggedUser: () => state.loggedUser
};

export default gettersOfApp;
