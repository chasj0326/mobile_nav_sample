import useNavigation from '../hooks/useNavigationContext';
import { useMemo, ReactNode, useCallback } from 'react';
import Screen, { ScreenProps } from './Screen';
import { childrenToArray } from '../utils/childrenToArray';
import NavHeader from './NavHeader';
import ScreenViewer from './ScreenViewer';
export interface HeaderOptions {
  headerColor?: string;
  titleColor?: string;
  tintColor?: string;
  forward?: boolean;
  border?: boolean;
  shadow?: boolean;
  buttonDetail?: boolean;
  pointerShape?: 'chevron' | 'arrow';
  titleAlign?: 'center' | 'start' | 'end';
}

export type Animation = string;
interface NavigatorProps {
  children: ReactNode;
  options?: {
    animation?: Animation;
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

  return (
    <>
      <NavHeader
        headerOptions={options?.header}
        currentTitle={currentTitle}
        prevTitle={prevTitle}
        nextTitle={nextTitle}
        onPrev={navigation.goBack}
        onNext={navigation.goForward}
      />
      <ScreenViewer
        animation={options?.animation}
        currentName={navigation.current}
        currentScreen={currentScreen}
      />
    </>
  );
};

export default Navigator;
