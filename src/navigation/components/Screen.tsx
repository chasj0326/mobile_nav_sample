/* eslint-disable @typescript-eslint/no-unused-vars */
export interface ScreenProps {
  component: React.ComponentType;
  name: string;
  title: string;
}

// name, title 프로퍼티는 Navigator 에서 사용함
const Screen = ({
  component: Component,
  name,
  title,
}: ScreenProps) => {
  return <Component />;
};

export default Screen;
