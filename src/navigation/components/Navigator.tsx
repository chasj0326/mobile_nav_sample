import useNavigation from '../hooks/useNavigationContext';
import { useMemo, ReactNode } from 'react';
import Screen, { ScreenProps } from './Screen';
import { childrenToArray } from '../utils/childrenToArray';

interface NavigatorProps {
  children: ReactNode;
}

const Navigator = ({ children }: NavigatorProps) => {
  const navigation = useNavigation();

  const currentScreen = useMemo(
    () =>
      childrenToArray<ScreenProps>(children, Screen).find(
        child => navigation.current === child.props.name
      ),
    [children, navigation]
  );

  const currentTitle = useMemo(
    () => currentScreen && currentScreen.props.title,
    [currentScreen]
  );

  return (
    <>
      <header>
        <h4>{currentTitle}</h4>
        <button onClick={navigation.goBack}>prev</button>
      </header>
      <section>{currentScreen}</section>
    </>
  );
};

export default Navigator;
