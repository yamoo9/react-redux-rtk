import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getPosts, addPost, selectPosts } from 'features/posts/posts.slice';

export function Posts() {
  const { entities, loading } = useSelector(selectPosts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPosts());
  }, [dispatch]);

  if (loading) {
    return <div role="alert">로딩 중...</div>;
  }

  const handleAddPost = () => {
    dispatch(
      addPost({
        title: 'createAsyncThunk',
        body: 'Thunk 함수를 사용해 새로운 포스트를 작성합니다.',
      })
    );
  };

  return (
    <div className="posts">
      <h2>블로그 포스트</h2>
      <button type="button" onClick={handleAddPost}>
        포스트 추가
      </button>
      {entities.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
}
