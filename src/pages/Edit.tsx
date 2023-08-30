import { NavButton } from '../navigation';
import styled from '@emotion/styled';
import { Container } from './Home';

const Edit = () => {
  return (
    <Container>
      <h3>에디터 페이지 입니다</h3>
      <TextArea placeholder='아무 쓸모 없는 에디터' />
      <NavButton
        shape='circle'
        destination='Home'
        buttonColor='#ff4747'>
        Home
      </NavButton>
    </Container>
  );
};

export default Edit;

const TextArea = styled.textarea`
  width: 100%;
  height: 200px;
  resize: none;
  background-color: #dadada;
  border-radius: 10px;
  border: none;
  outline: none;
  padding: 20px;
`;
