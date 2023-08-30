import { NavButton } from '../navigation';
import styled from '@emotion/styled';

const Home = () => {
  return (
    <Container>
      <h3>홈페이지 입니다</h3>
      <NavButton
        shape='round'
        destination='Post'>
        Post
      </NavButton>
      <Grid>
        {Array.from({ length: 9 }, (_, index) => (
          <Box key={index} />
        ))}
      </Grid>
    </Container>
  );
};

export default Home;

export const Container = styled.div`
  display: flex;
  gap: 20px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  grid-template-rows: 1fr 1fr 1fr;
`;

const Box = styled.div`
  background-color: #dadada;
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
