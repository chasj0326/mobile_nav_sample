import {
  Animation,
  Align,
  PointerShape,
  PointerDirection,
} from '../types';

export const DEFAULT_HEADER: {
  HEADER_COLOR: string;
  TITLE_COLOR: string;
  TINT_COLOR: string;
  BORDER: string;
  SHADOW: string;
  TITLE_ALIGN: Align;
  POINTER_SHAPE: PointerShape;
} = {
  HEADER_COLOR: '#f1f1f1',
  TITLE_COLOR: '#272727',
  TINT_COLOR: '#0b52e1',
  BORDER: '1px solid #27272735',
  SHADOW: '0px 1px 2px 0.5px #27272735',
  TITLE_ALIGN: 'center',
  POINTER_SHAPE: 'chevron',
};

export const ANIMATION_TIMEOUT = 500;

export const ANIMATION: {
  FADE: Animation;
  UPDOWN: Animation;
  SLIDE: Animation;
  POP: Animation;
  NONE: Animation;
} = {
  FADE: 'fade',
  UPDOWN: 'updown',
  SLIDE: 'slide',
  POP: 'pop',
  NONE: 'none',
};

export const ANIMATION_PREFIX = {
  REVERSE: 'reverse',
  NORMAL: 'normal',
};

export const POINTER_DIRECTION: {
  LEFT: PointerDirection;
  RIGHT: PointerDirection;
} = {
  LEFT: 'left',
  RIGHT: 'right',
};
