import useHistory from '../hooks/useHistory';
import { NavigationContext } from '../hooks/useNavigationContext';
import { ReactNode } from 'react';
import styled from '@emotion/styled';
import '../../index.css';
interface NavigationContainerProps {
  initialScreenName: string;
  children: ReactNode;
}

const NavigationContainer = ({
  initialScreenName,
  children,
}: NavigationContainerProps) => {
  const initNavigation = useHistory([initialScreenName]);
  return (
    <Container>
      <NavigationContext.Provider value={initNavigation}>
        {children}
      </NavigationContext.Provider>
    </Container>
  );
};

export default NavigationContainer;

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  margin: 0;
  overflow: hidden;
  @media (max-width: 767px) {
    width: 100%;
    height: 100%;
  }

  @media (min-width: 768px) {
    margin: auto;
    width: 390px;
    height: 840px;
    border: 1px solid #0000002e;
  }
`;
