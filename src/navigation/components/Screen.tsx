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
  return <Component />;
};

export default Screen;
