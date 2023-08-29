import { useNavigation } from '../navigation';

const Home = () => {
  const navigation = useNavigation();
  return (
    <>
      <div>홈페이지 입니다</div>
      <button onClick={() => navigation.navigate('Post')}>
        go to post
      </button>
    </>
  );
};

export default Home;
