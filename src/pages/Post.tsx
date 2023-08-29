import { useNavigation } from '../navigation';

const Post = () => {
  const navigation = useNavigation();
  return (
    <>
      <div>포스트 페이지 입니다</div>
      <button onClick={() => navigation.navigate('Edit')}>
        go to edit
      </button>
    </>
  );
};

export default Post;
