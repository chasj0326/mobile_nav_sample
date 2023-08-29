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
  const [poppedHistory, setPoppedHistory] = useState<
    string[]
  >([]);

  const current = useMemo(() => history.at(-1), [history]);

  const goBack = useCallback(() => {
    if (!current) return;
    setPoppedHistory([...poppedHistory, current]);
    setHistory(prev => prev.slice(0, -1));
  }, [current, poppedHistory]);

  const goForward = useCallback(() => {
    if (!poppedHistory.length) return;
    const lastPopped = poppedHistory.at(-1);
    if (lastPopped) {
      setHistory([...history, lastPopped]);
      setPoppedHistory(prev => prev.slice(0, -1));
    }
  }, [history, poppedHistory]);

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

  return {
    goBack,
    goForward,
    navigate,
    current,
  };
};

export default useHistory;
