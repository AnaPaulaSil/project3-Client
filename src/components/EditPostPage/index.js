import { useEffect, useState } from "react";
import { api } from "../../api/api";
import EditPostForm from "../../components/EditPostForm/index"

function EditPostPage({ reload, setReload }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(false);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchPosts() {
      setIsLoading(true);
      try {
        const response = await api.get("/posts/all-posts");
        setPosts([...response.data]);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    }
    fetchPosts();
  }, [reload]);

  return (
    <div>
      <h1>Meus posts</h1>

      <div>
        <p>POSTSBOX</p>
        {posts.map((post) => {
          return (
            <>
              <p>{post.content}</p>

              <EditPostForm reload={reload} setReload={setReload} post={post} />
            </>
          );
        })}
      </div>
    </div>
  );
}

export default EditPostPage;
