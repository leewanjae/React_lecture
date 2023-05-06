import Post from "./Post";
import styles from "./PostList.moduel.css";

function PostList(props) {
  return (
    <ul className={styles.posts}>
      <Post author="name" body="leewanjae" />
      <Post author="age" body="28" />
    </ul>
  );
}

export default PostList;
