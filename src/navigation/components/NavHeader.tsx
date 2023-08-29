import { CSSProperties } from 'react';
import { HeaderOptions } from './Navigator';
import NavIcon from './NavIcon';
import styled from '@emotion/styled';

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
    headerColor = '#f1f1f1',
    titleColor = '#272727',
    tintColor = '#0b52e1',
    forward,
    border,
    shadow,
    buttonDetail,
    pointerShape = 'chevron',
    titleAlign = 'center',
  } = headerOptions || {};

  const headerStyle: CSSProperties = {
    backgroundColor: headerColor,
    color: titleColor,
    borderBottom: border ? '1px solid #27272735' : 'none',
    boxShadow: shadow
      ? '0px 1px 2px 0.5px #27272735'
      : 'none',
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
        className='back'
        onClick={onPrev}
        disabled={!prevTitle}>
        <NavIcon
          shape={pointerShape}
          direction='left'
        />
        {buttonDetail && <p>{prevTitle}</p>}
      </Button>
      <Title style={titleStyle}>{currentTitle}</Title>
      {forward ? (
        <Button
          style={buttonStyle}
          className='forward'
          onClick={onNext}
          disabled={!nextTitle}>
          {buttonDetail && <p>{nextTitle}</p>}
          <NavIcon
            shape={pointerShape}
            direction='right'
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
  &.back {
    justify-content: flex-start;
  }
  &.forward {
    justify-content: flex-end;
  }
`;
const Blank = styled.div`
  min-width: 15%;
`;
