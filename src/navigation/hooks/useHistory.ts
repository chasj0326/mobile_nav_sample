import {
  useCallback,
  useState,
  useMemo,
  useEffect,
} from 'react';
import useStorage from './useStorage';

const STORAGE_HISTORY_KEY = 'history';

const useHistory = (initialHistory: string[]) => {
  const [storedHistory, setStoreHistory] = useStorage({
    storage: sessionStorage,
    key: STORAGE_HISTORY_KEY,
    initialValue: initialHistory,
  });

  const [history, setHistory] =
    useState<string[]>(storedHistory);

  const goBack = useCallback(() => {
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
  }, [history]);

  const navigate = useCallback(
    (newHistoryItem: string) => {
      const newHistory = [...history, newHistoryItem];
      setHistory(newHistory);
    },
    [history]
  );

  useEffect(() => {
    setStoreHistory(history);
  }, [history, setStoreHistory]);

  const current = useMemo(() => history.at(-1), [history]);

  return {
    goBack,
    navigate,
    current,
  };
};

export default useHistory;
