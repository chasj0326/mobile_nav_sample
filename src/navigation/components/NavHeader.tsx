import { CSSProperties } from 'react';
import { HeaderOptions } from '../types';
import NavIcon from './NavIcon';
import styled from '@emotion/styled';
import {
  DEFAULT_HEADER,
  POINTER_DIRECTION,
} from '../constants';

interface HeaderProps {
  headerOptions?: HeaderOptions;
  currentTitle?: string;
  prevTitle?: string;
  nextTitle?: string;
  onPrev: () => void;
  onNext: () => void;
}

const NavHeader = ({
  headerOptions,
  currentTitle,
  prevTitle,
  nextTitle,
  onPrev,
  onNext,
}: HeaderProps) => {
  const {
    headerColor = DEFAULT_HEADER.HEADER_COLOR,
    titleColor = DEFAULT_HEADER.TITLE_COLOR,
    tintColor = DEFAULT_HEADER.TINT_COLOR,
    forward,
    border,
    shadow,
    buttonDetail,
    pointerShape = DEFAULT_HEADER.POINTER_SHAPE,
    titleAlign = DEFAULT_HEADER.TITLE_ALIGN,
  } = headerOptions || {};

  const headerStyle: CSSProperties = {
    backgroundColor: headerColor,
    color: titleColor,
    borderBottom: border
      ? DEFAULT_HEADER.BORDER
      : undefined,
    boxShadow: shadow ? DEFAULT_HEADER.SHADOW : undefined,
  };

  const titleStyle: CSSProperties = {
    textAlign: titleAlign,
  };

  const buttonStyle: CSSProperties = {
    color: tintColor,
  };

  return (
    <Header style={headerStyle}>
      <Button
        style={buttonStyle}
        className={POINTER_DIRECTION.LEFT}
        onClick={onPrev}
        disabled={!prevTitle}>
        <NavIcon
          shape={pointerShape}
          direction={POINTER_DIRECTION.LEFT}
        />
        {buttonDetail && <p>{prevTitle}</p>}
      </Button>
      <Title style={titleStyle}>{currentTitle}</Title>
      {forward ? (
        <Button
          style={buttonStyle}
          className={POINTER_DIRECTION.RIGHT}
          onClick={onNext}
          disabled={!nextTitle}>
          {buttonDetail && <p>{nextTitle}</p>}
          <NavIcon
            shape={pointerShape}
            direction={POINTER_DIRECTION.RIGHT}
          />
        </Button>
      ) : (
        <Blank></Blank>
      )}
    </Header>
  );
};

export default NavHeader;

const Header = styled.header`
  display: flex;
  height: 60px;
  gap: 10px;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  padding: 15px 10px;
  position: sticky;
  top: 0;
  left: 0;
  z-index: 100;
`;
const Title = styled.div`
  flex-grow: 1;
  font-weight: 500;
  font-size: 18px;
  margin: 0;
  margin-bottom: 3px;
`;
const Button = styled.button`
  display: flex;
  gap: 5px;
  align-items: center;
  min-width: 15%;
  border: none;
  background-color: transparent;
  font-size: 16px;
  cursor: pointer;
  & > p {
    margin: 0;
    margin-bottom: 3px;
    font-weight: 400;
  }
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
  &.${POINTER_DIRECTION.LEFT} {
    justify-content: flex-start;
  }
  &.${POINTER_DIRECTION.RIGHT} {
    justify-content: flex-end;
  }
`;
const Blank = styled.div`
  min-width: 15%;
`;
