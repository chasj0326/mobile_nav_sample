import useHistory from '../hooks/useHistory';
import { NavigationContext } from '../hooks/useNavigationContext';
import { ReactNode } from 'react';

interface NavigationContainerProps {
  initialScreenName: string;
  children: ReactNode;
}

const NavigationContainer = ({
  initialScreenName,
  children,
}: NavigationContainerProps) => {
  const initNavigation = useHistory([initialScreenName]);
  return (
    <NavigationContext.Provider value={initNavigation}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContainer;
