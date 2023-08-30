import React from 'react';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';
import styled from '@emotion/styled';
import { AnimationOptions } from '../types';
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
  animationType: string,
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
  return animationType; // todo: animationType 예외처리
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
  &.${ANIMATION.FADE}-enter {
    opacity: 0;
  }
  &.${ANIMATION.FADE}-enter-active {
    opacity: 1;
    transition: ${({ timeout }) => timeout}ms ease-in-out;
  }
  &.${ANIMATION.FADE}-exit {
    opacity: 1;
  }
  &.${ANIMATION.FADE}-exit-active {
    opacity: 0;
    transition: ${({ timeout }) => timeout}ms ease-in-out;
  }

  //pop
  &.${ANIMATION.POP}-enter {
    transform: scale(0.9);
    opacity: 0.5;
    z-index: 50;
  }
  &.${ANIMATION.POP}-enter-active {
    transform: scale(1);
    opacity: 1;
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.${ANIMATION.POP}-exit {
    transform: scale(1);
    opacity: 0;
  }
  &.${ANIMATION.POP}-exit-active {
    transform: scale(0.8);
    opacity: 0;
    transition: transform ${({ timeout }) => timeout}ms
      ease-out;
  }

  // slide
  &.${ANIMATION.SLIDE}-reverse-enter {
    transform: translateX(-100%);
    z-index: 50;
  }
  &.${ANIMATION.SLIDE}-reverse-enter-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.${ANIMATION.SLIDE}-reverse-exit {
    transform: translateX(0%);
  }
  &.${ANIMATION.SLIDE}-reverse-exit-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }
  &.${ANIMATION.SLIDE}-normal-enter {
    transform: translateX(100%);
    z-index: 50;
  }
  &.${ANIMATION.SLIDE}-normal-enter-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.${ANIMATION.SLIDE}-normal-exit {
    transform: translateX(0%);
  }
  &.${ANIMATION.SLIDE}-normal-exit-active {
    transform: translateX(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }

  // updown
  &.${ANIMATION.UPDOWN}-reverse-enter {
    transform: translateY(-100%);
    z-index: 50;
  }
  &.${ANIMATION.UPDOWN}-reverse-enter-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.${ANIMATION.UPDOWN}-reverse-exit {
    transform: translateY(0%);
  }
  &.${ANIMATION.UPDOWN}-reverse-exit-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }
  &.${ANIMATION.UPDOWN}-normal-enter {
    transform: translateY(60%);
    z-index: 50;
  }
  &.${ANIMATION.UPDOWN}-normal-enter-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
    z-index: 50;
  }
  &.${ANIMATION.UPDOWN}-normal-exit {
    transform: translateY(0%);
  }
  &.${ANIMATION.UPDOWN}-normal-exit-active {
    transform: translateY(0%);
    transition: ${({ timeout }) => timeout}ms ease-out;
  }
`;
