import { useNavigation } from '../navigation';

const Edit = () => {
  const navigation = useNavigation();
  return (
    <>
      <div>에디터 페이지 입니다</div>
      <button onClick={() => navigation.navigate('Home')}>
        go to home
      </button>
    </>
  );
};

export default Edit;
