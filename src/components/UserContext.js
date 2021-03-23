import React from 'react';

const UserContext = React.createContext('Codevolution'); // we can pass default value here

const UserContextProvider = UserContext.Provider;
const UserContextConsumer = UserContext.Consumer;

export {UserContextProvider, UserContextConsumer};

export default UserContext;

