import useNavigation from '../hooks/useNavigationContext';
import { useMemo, ReactNode, CSSProperties } from 'react';
import Screen, { ScreenProps } from './Screen';
import { childrenToArray } from '../utils/childrenToArray';
import styled from '@emotion/styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronLeft,
  faArrowLeft,
  faChevronRight,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons';

interface NavigatorProps {
  children: ReactNode;
  options?: {
    header?: {
      headerColor?: string;
      titleColor?: string;
      tintColor?: string;
      forward?: boolean;
      border?: boolean;
      shadow?: boolean;
      buttonDetail?: boolean;
      arrowStyle?: 'chevron' | 'arrow';
      titleAlign?: 'center' | 'start' | 'end';
    };
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

  const currentScreen = useMemo(
    () =>
      screenArray.find(
        screen => navigation.current === screen.props.name
      ),
    [screenArray, navigation]
  );

  const currentTitle = useMemo(
    () => currentScreen && currentScreen.props.title,
    [currentScreen]
  );

  const { prevTitle, nextTitle } = useMemo(() => {
    const prevScreen = screenArray.find(
      screen =>
        navigation.history.at(-2) === screen.props.name
    );
    const nextScreen = screenArray.find(
      screen =>
        navigation.poppedHistory.at(-1) ===
        screen.props.name
    );
    return {
      prevTitle: prevScreen?.props.title,
      nextTitle: nextScreen?.props.title,
    };
  }, [navigation, screenArray]);

  const headerOptions = options?.header || {};
  const {
    headerColor = '#f1f1f1',
    titleColor = '#272727',
    tintColor,
    forward,
    border,
    shadow,
    buttonDetail,
    arrowStyle = 'chevron',
    titleAlign = 'center',
  } = headerOptions;

  const headerStyle: CSSProperties = {
    backgroundColor: headerColor,
    color: titleColor,
    borderBottom: border ? '1px solid #27272735' : 'none',
    boxShadow: shadow
      ? '0px 1px 2px 0.5px #27272735'
      : 'none',
  };
  const titleStyle: CSSProperties = {
    textAlign: titleAlign,
  };
  const buttonStyle: CSSProperties = {
    color: tintColor || '#0b52e1',
  };

  return (
    <>
      <Header style={headerStyle}>
        <Button
          style={buttonStyle}
          className='back'
          onClick={navigation.goBack}
          disabled={prevTitle === undefined}>
          <FontAwesomeIcon
            icon={
              arrowStyle === 'arrow'
                ? faArrowLeft
                : faChevronLeft
            }
          />
          {buttonDetail && <p>{prevTitle}</p>}
        </Button>
        <Title style={titleStyle}>{currentTitle}</Title>
        {forward ? (
          <Button
            style={buttonStyle}
            className='forward'
            onClick={navigation.goForward}
            disabled={nextTitle === undefined}>
            {buttonDetail && <p>{nextTitle}</p>}
            <FontAwesomeIcon
              icon={
                arrowStyle === 'arrow'
                  ? faArrowRight
                  : faChevronRight
              }
            />
          </Button>
        ) : (
          <Blank></Blank>
        )}
      </Header>
      <ScreenContainer>{currentScreen}</ScreenContainer>
    </>
  );
};

export default Navigator;

const Header = styled.header`
  display: flex;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 15px 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;
const Title = styled.div`
  flex-grow: 1;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-bottom: 3px;
`;
const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  min-width: 15%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  & > p {
    margin: 0;
    margin-bottom: 3px;
    font-weight: 400;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &.back {
    justify-content: flex-start;
  }
  &.forward {
    justify-content: flex-end;
  }
`;
const Blank = styled.div`
  min-width: 15%;
`;
const ScreenContainer = styled.section`
  height: 100%;
  overflow: auto;
`;
