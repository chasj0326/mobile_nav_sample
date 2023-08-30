import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import styled from '@emotion/styled';
import { Animation, AnimationOptions } from '../types';
import {
  ANIMATION,
  ANIMATION_PREFIX,
  ANIMATION_TIMEOUT,
} from '../constants';

interface ScreenViewerProps {
  animationOptions?: AnimationOptions;
  currentName?: string;
  currentScreen?: React.ReactElement;
  reversed: boolean;
}

const getAnimationClass = (
  animationType: Animation,
  reversed: boolean
) => {
  if (
    animationType === ANIMATION.SLIDE ||
    animationType === ANIMATION.UPDOWN
  ) {
    return `${animationType}-${
      reversed
        ? ANIMATION_PREFIX.REVERSE
        : ANIMATION_PREFIX.NORMAL
    }`;
  }
  return animationType;
};

const ScreenViewer = ({
  animationOptions,
  currentName,
  currentScreen,
  reversed,
}: ScreenViewerProps) => {
  const {
    animationType = ANIMATION.NONE,
    timeout = ANIMATION_TIMEOUT,
  } = animationOptions || {};
  const animationClass = getAnimationClass(
    animationType,
    reversed
  );
  return (
    <StyledTransitionGroup>
      <CSSTransition
        key={currentName}
        classNames={animationClass}
        timeout={timeout}
        unmountOnExit>
        <ScreenContainer timeout={timeout}>
          {currentScreen}
        </ScreenContainer>
      </CSSTransition>
    </StyledTransitionGroup>
  );
};

export default ScreenViewer;
const StyledTransitionGroup = styled(TransitionGroup)`
  overflow: hidden;
`;
const ScreenContainer = styled.section<{
  timeout: number;
}>`
  position: absolute;
  height: calc(100% - 60px);
  width: 100%;
  overflow: auto;
  background-color: #ffffff;
  box-shadow: 2px 2px 15px 1px rgba(0, 0, 0, 0.2);

  // fade
  &.fade-enter {
    opacity: 0;
  }
  &.fade-enter-active {
    opacity: 1;
    transition: ${({ timeout }) => timeout}ms ease-in-out;
  }
  &.fade-exit {
    opacity: 1;
  }
  &.fade-exit-active {
    opacity: 0;
    transition: ${({ timeout }) => timeout}ms ease-in-out;
  }

  //pop
  &.pop-enter {
    transform: scale(0.9);
    opacity: 0.5;
    z-index: 50;
  }
  &.pop-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.pop-exit {
    transform: scale(1);
    opacity: 0;
  }
  &.pop-exit-active {
    transform: scale(0.8);
    opacity: 0;
    transition: transform ${({ timeout }) => timeout}ms
      ease-out;
  }

  // slide
  &.slide-normal-enter {
    transform: translateX(100%);
    z-index: 50;
  }
  &.slide-normal-enter-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.slide-normal-exit {
    transform: translateX(0%);
  }
  &.slide-normal-exit-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }
  &.slide-reverse-enter {
    transform: translateX(-100%);
    z-index: 50;
  }
  &.slide-reverse-enter-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.slide-reverse-exit {
    transform: translateX(0%);
  }
  &.slide-reverse-exit-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }

  // updown
  &.updown-normal-enter {
    transform: translateY(60%);
    z-index: 50;
  }
  &.updown-normal-enter-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.updown-normal-exit {
    transform: translateY(0%);
  }
  &.updown-normal-exit-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }
  &.updown-reverse-enter {
    transform: translateY(-60%);
    z-index: 50;
  }
  &.updown-reverse-enter-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.updown-reverse-exit {
    transform: translateY(0%);
  }
  &.updown-reverse-exit-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }
`;
