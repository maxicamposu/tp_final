import { useEffect } from "react";
import { useState } from "react";

const LOCALSTORAGE_KEY = "MIAPP.list";

function useRegistries() {
  const [registries, setRegistries] = useState([]);

  useEffect(() => {
    let localStorageSavedRegistries = localStorage.getItem(LOCALSTORAGE_KEY);
    if (localStorageSavedRegistries) {
      setRegistries(JSON.parse(localStorageSavedRegistries));
    }
  }, []);

  useEffect(() => {
    if (!registries || registries.length === 0) return;
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(registries));
  }, [registries]);

  function removeAll() {
    setRegistries([]);
  }

  function add(patente, typev, fecha_registro) {
    const id = Date.now();
    const registryObject = { patente, typev, fecha_registro, id };
    setRegistries([registryObject, ...registries]);
  }

  return { registries, add, removeAll };
}

export default useRegistries;
