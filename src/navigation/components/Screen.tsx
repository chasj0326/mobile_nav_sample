/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ScreenProps {
  component: React.ComponentType;
  name: string;
  title: string;
}

const Screen = ({
  component: Component,
  name,
  title,
}: ScreenProps) => {
  if (!name || !title) {
    // todo: name 식별자 예외 처리
    throw new Error('screen must have unique name');
  }
  return <Component />;
};

export default Screen;
