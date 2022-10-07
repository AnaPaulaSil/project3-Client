import { useEffect, useState } from "react";
import { api } from "../../api/api";
function EditPostForm({ reload, setReload, post }) {
  const [showEdit, setShowEdit] = useState(false);
  const [editPost, setEditPost] = useState({
    content: "",
  });
  function handleChange(e) {
    setEditPost({ ...editPost, content: e.target.value });
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
  async function handleDeletePost(idPost) {
    try {
      await api.delete(`/posts/deleted-post/${idPost}`);
      setReload(!reload);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div>
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
            <button onClick={(e) => handleSubmit(e, post._id)}>Salvar</button>
          </form>
          <button onClick={(e) => handleDeletePost(post._id)}>
            delete post
          </button>
        </>
      )}
    </div>
  );
}
export default EditPostForm;