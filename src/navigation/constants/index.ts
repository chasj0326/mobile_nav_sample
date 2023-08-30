import { Animation, Align, Pointer } from '../types';

export const DEFAULT_HEADER: {
  HEADER_COLOR: string;
  TITLE_COLOR: string;
  TINT_COLOR: string;
  HEADER_BORDER: string;
  HEADER_SHADOW: string;
  TITLE_ALIGN: Align;
  POINTER_SHAPE: Pointer;
} = {
  HEADER_COLOR: '#f1f1f1',
  TITLE_COLOR: '#272727',
  TINT_COLOR: '#0b52e1',
  HEADER_BORDER: '1px solid #27272735',
  HEADER_SHADOW: '0px 1px 2px 0.5px #27272735',
  TITLE_ALIGN: 'center',
  POINTER_SHAPE: 'chevron',
};

export const ANIMATION_TIMEOUT = 500;

export const ANIMATION: { [key: string]: Animation } = {
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
