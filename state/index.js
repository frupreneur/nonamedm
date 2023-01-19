import React, { createContext, useContext } from "react";
const AppContext = createContext();

export default function StateProvider({ children }) {
  const [state, setState] = React.useState({
    user:{},
    inbox: {loading: true},
    fetchErr: false
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
