import { useEffect, useState } from "react";
import { getItem, setItem } from "./localStorage";

export function usePersistedState<T>(key: string, initialVaue: T) {
  const [value, setValue] = useState(() => {
    const item = getItem(key);
    return (item as T) || initialVaue;
  });
  useEffect(() => {
    setItem(key, value);
  }, [value]);

  return [value, setValue] as const;
}
