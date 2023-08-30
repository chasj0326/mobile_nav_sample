import styled from '@emotion/styled';
import { useNavigation } from '..';
import { CSSProperties, ReactNode } from 'react';
import { ButtonShape } from '../types';
import { DEFAULT_BUTTON } from '../constants';

interface NavButtonProps {
  shape?: ButtonShape;
  textColor?: string;
  buttonColor?: string;
  destination: string;
  children: ReactNode;
}

const borderRadiusMap = {
  rectangle: '0px',
  round: '5px',
  circle: '20px',
};

export const NavButton = ({
  shape,
  textColor,
  buttonColor,
  destination,
  children,
}: NavButtonProps) => {
  const { navigate } = useNavigation();
  const buttonStyle: CSSProperties = {
    color: textColor || DEFAULT_BUTTON.TEXT_COLOR,
    backgroundColor:
      buttonColor || DEFAULT_BUTTON.BUTTON_COLOR,
    borderRadius:
      borderRadiusMap[shape || DEFAULT_BUTTON.SHAPE],
  };
  return (
    <Button
      style={buttonStyle}
      onClick={() => navigate(destination)}>
      {children}
    </Button>
  );
};

export default NavButton;

const Button = styled.button<{ hoverColor?: string }>`
  display: flex;
  border: none;
  height: 40px;
  width: fit-content;
  padding: 20px 20px;
  font-size: 16px;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  transition: 0.1s;
  box-shadow: 0px 2px 3px 2px rgba(0, 0, 0, 0.25);
  cursor: pointer;
  &:hover {
    box-shadow: 0px 2px 2px 1px rgba(0, 0, 0, 0.3);
  }
`;
