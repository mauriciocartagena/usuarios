import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [user, setUser] = useState({ usuarios: [] });

  // empty array as second argument equivalent to componentDidMount
  useEffect(() => {
    async function fetchData() {
      const response = await fetch(API);
      const json = await response.json();
      setUser(json);
    }
    fetchData();
  }, [API]);

  return user;
};

export default useInitialState;
