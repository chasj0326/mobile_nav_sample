import useHistory from '../hooks/useHistory';
import { NavigationContext } from '../hooks/useNavigationContext';
import { ReactNode } from 'react';

const NavigationContainer = ({
  children,
}: {
  children: ReactNode;
}) => {
  const initNavigation = useHistory([]);
  return (
    <NavigationContext.Provider value={initNavigation}>
      {children}
    </NavigationContext.Provider>
  );
};

export default NavigationContainer;
