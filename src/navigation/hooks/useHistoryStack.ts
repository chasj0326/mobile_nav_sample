import { useCallback, useState, useMemo } from 'react';

type HistoryItem = string;
type HistoryStack = HistoryItem[];

const useHistoryStack = (initialHistory: HistoryStack) => {
  const [history, setHistory] = useState(initialHistory);

  const popHistory = useCallback(() => {
    const newHistory = history.slice(0, -1);
    setHistory(newHistory);
  }, [history]);

  const pushHistory = useCallback(
    (newHistoryItem: HistoryItem) => {
      const newHistory = [...history, newHistoryItem];
      setHistory(newHistory);
    },
    [history]
  );

  const currentHistoryItem = useMemo(
    () => (history.length ? history.at(-1) : ''),
    [history]
  );

  return [popHistory, pushHistory, currentHistoryItem];
};

export default useHistoryStack;
