import { useState, useEffect, useCallback } from 'react';

// EXAMPLE
// const [value, set] = useLocalStorage('my-key');

// If we need to set it on mount
// useEffect(() => {
//   set({ test: '123' });
// }, [set]);

// If we need to set the value on click
// <Button onClick={() => set(Math.random())}>click me</Button>

const parseItem = item => {
  try {
    return item ? JSON.parse(item) : null;
  } catch (e) {
    return null;
  }
};

const getLocalStorageItem = key => {
  const item = typeof window !== 'undefined' ? window.localStorage.getItem(key) : null;
  return parseItem(item);
};

const useLocalStorage = key => {
  const [value, setValue] = useState(() => {
    return getLocalStorageItem(key);
  });

  useEffect(() => {
    const handleStorageChange = event => {
      if (event.key === key) {
        setValue(parseItem(event.newValue));
      }
    };

    window.addEventListener('storage', handleStorageChange);
    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, [key]);

  const setItem = useCallback(
    value => {
      const oldValue = localStorage.getItem(key);
      const newValue = JSON.stringify(value);

      window.localStorage.setItem(key, newValue);

      // A storage event is called any time we call setItem, but the event is only captured from other tabs. We capture it on the current tab by dispatching our own event.
      window.dispatchEvent(
        new StorageEvent('storage', {
          key,
          oldValue,
          newValue,
        })
      );
    },
    [key]
  );

  return [value, setItem];
};

export { useLocalStorage };
