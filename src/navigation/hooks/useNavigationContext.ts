import { createContext, useContext } from 'react';
import useHistory from '../hooks/useHistory';

type Navigation = ReturnType<typeof useHistory>;

export const NavigationContext =
  createContext<Navigation | null>(null);

const useNavigation = () => {
  const navigation = useContext(NavigationContext);
  if (!navigation) {
    throw new Error(
      'useNavigation must be used in a NavigationContainer'
    );
  }
  return navigation;
};

export default useNavigation;
