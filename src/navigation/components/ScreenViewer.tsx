import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import styled from '@emotion/styled';
import { Animation } from './Navigator';

interface ScreenViewerProps {
  animation?: Animation;
  currentName?: string;
  currentScreen?: React.ReactElement;
}

const ScreenViewer = ({
  animation,
  currentName,
  currentScreen,
}: ScreenViewerProps) => {
  return (
    <StyledTransitionGroup>
      <CSSTransition
        key={currentName}
        classNames={animation}
        mountOnEnter
        unmountOnExit
        timeout={300}>
        <ScreenContainer>{currentScreen}</ScreenContainer>
      </CSSTransition>
    </StyledTransitionGroup>
  );
};

export default ScreenViewer;

const StyledTransitionGroup = styled(TransitionGroup)`
  height: 100%;
  overflow: hidden;
`;
const ScreenContainer = styled.section`
  height: 100%;
  overflow: auto;

  &.right-enter {
    transform: translateX(100%);
  }

  &.right-enter-active {
    transform: translateX(0);
    transition: transform 300ms ease-in-out;
  }

  &.right-exit {
    transform: translateX(0);
  }

  &.right-exit-active {
    transform: translateX(-100%);
    transition: transform 300ms ease-in-out;
  }
`;
