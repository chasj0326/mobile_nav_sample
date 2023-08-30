import useNavigation from '../hooks/useNavigationContext';
import {
  useMemo,
  ReactNode,
  useCallback,
  useState,
  useEffect,
} from 'react';
import Screen, { ScreenProps } from './Screen';
import { childrenToArray } from '../utils/childrenToArray';
import NavHeader from './NavHeader';
import ScreenViewer from './ScreenViewer';
import { AnimationOptions, HeaderOptions } from '../types';

export interface NavigatorProps {
  children: ReactNode;
  options?: {
    animation?: AnimationOptions;
    header?: HeaderOptions;
  };
}

const Navigator = ({
  children,
  options,
}: NavigatorProps) => {
  const navigation = useNavigation();

  const screenArray = useMemo(
    () => childrenToArray<ScreenProps>(children, Screen),
    [children]
  );

  const getScreenByName = useCallback(
    (name: string | undefined) =>
      screenArray.find(
        screen => name === screen.props.name
      ),
    [screenArray]
  );

  const currentScreen = useMemo(
    () => getScreenByName(navigation.current),
    [getScreenByName, navigation]
  );

  const currentTitle = useMemo(
    () => currentScreen?.props.title,
    [currentScreen]
  );

  const prevTitle = useMemo(
    () =>
      getScreenByName(navigation.history.at(-2))?.props
        .title,
    [getScreenByName, navigation]
  );

  const nextTitle = useMemo(
    () =>
      getScreenByName(navigation.poppedHistory.at(-1))
        ?.props.title,
    [getScreenByName, navigation]
  );

  const [isGoingBack, setIsGoingBack] = useState(false);
  useEffect(() => {
    return () => {
      setIsGoingBack(false);
    };
  }, [isGoingBack]);

  return (
    <>
      <NavHeader
        headerOptions={options?.header}
        currentTitle={currentTitle}
        prevTitle={prevTitle}
        nextTitle={nextTitle}
        onPrev={() => {
          setIsGoingBack(true);
          navigation.goBack();
        }}
        onNext={() => {
          setIsGoingBack(false);
          navigation.goForward();
        }}
      />
      <ScreenViewer
        animationOptions={options?.animation}
        currentName={navigation.current}
        currentScreen={currentScreen}
        reversed={isGoingBack}
      />
    </>
  );
};

export default Navigator;
