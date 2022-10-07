import { useEffect, useState } from "react";
import { api } from "../../api/api";

function EditPostPage({ reload, setReload }) {
  const [isLoading, setIsLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [editPost, setEditPost] = useState({
    content: "",
  });
  const [showEdit, setShowEdit] = useState(false);

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

  async function handleDeletePost(idPost) {
    console.log(idPost);
    try {
      await api.delete(`/posts/deleted-post/${idPost}`);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  async function handleSubmit(e, idPost) {
    e.preventDefault();

    try {
      await api.put(`/posts/edit-post/${idPost}`, editPost);
      setShowEdit(false);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }

  function handleChange(e) {
    setEditPost({ ...editPost, content: e.target.value });
  }

  return (
    <div>
      <h1>Meus posts</h1>
      <hr ></hr>

      <div>
        {posts.map((post) => {
          return (
            <>
              <p>{post.content}</p>

              <button
                onClick={() => {
                  setShowEdit(!showEdit);
                  setEditPost({ content: post.content });
                }}
              >
                edit post
              </button>
              {showEdit && (
                <>
                  <form>
                    <input value={editPost.content} onChange={handleChange} />
                    <button onClick={(e) => handleSubmit(e, post._id)}>
                      Salvar
                    </button>
                  </form>
                  <button onClick={(e) => handleDeletePost(post._id)}>
                    delete post
                  </button>
                </>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
}

export default EditPostPage;
