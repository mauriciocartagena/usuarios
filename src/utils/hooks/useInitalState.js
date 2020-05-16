import { useState, useEffect } from "react";

const useInitialState = (API) => {
  const [user, setUser] = useState({ usuarios: [] });
  //sacar datos de la api Custom Hoock
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setUser(data));
  }, [API]);

  return user;
};

export default useInitialState;
