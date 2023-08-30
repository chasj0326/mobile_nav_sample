export type Pointer = 'chevron' | 'arrow';
export type Align = 'center' | 'start' | 'end';

export interface HeaderOptions {
  headerColor?: string;
  titleColor?: string;
  tintColor?: string;
  forward?: boolean;
  border?: boolean;
  shadow?: boolean;
  buttonDetail?: boolean;
  pointerShape?: Pointer;
  titleAlign?: Align;
}

export type Animation =
  | 'slide'
  | 'fade'
  | 'updown'
  | 'pop'
  | 'none';

export interface AnimationOptions {
  animationType: Animation;
  timeout: number;
}
