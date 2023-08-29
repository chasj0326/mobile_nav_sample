import { useCallback, useState, useMemo } from 'react';

const useHistory = (initialHistory: string[]) => {
  const [history, setHistory] =
    useState<string[]>(initialHistory);

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

  const current = useMemo(() => history.at(-1), [history]);

  return {
    goBack,
    navigate,
    current,
  };
};

export default useHistory;
