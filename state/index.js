import React, { createContext, useContext } from "react";
const AppContext = createContext();

export default function StateProvider({ children }) {
  const [state, setState] = React.useState({
    user: { messages: [] },
    inbox: { loading: true },
    fetchErr: false,
    logOut: false,
  });
  const [errorFetching, setErrorFetching] = React.useState(false);

  return (
    <AppContext.Provider
      value={{ state, setState, errorFetching, setErrorFetching }}
    >
      {children}
    </AppContext.Provider>
  );
}

export function useGlobalState() {
  const state = useContext(AppContext);
  return state;
}
