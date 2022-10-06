import { useEffect,useState } from "react";
import { api } from "../../api/api";



export function PostsBox ({reload,setReload}) {

    const [posts, setPosts] = useState([])

  useEffect(()=>{
    async function fetchPosts(){
        try {
            const response = await api.get("/posts/all-posts")
            setPosts(response.data)
            //toastsuccer
        } catch (error) {
            console.log(error)
            //toasterror
        }
    }
    fetchPosts()
  },[reload])

  
  console.log(posts)

  return (
    <>
    <p>POSTSBOX</p>
    {posts.map((post)=>{
        return (
            <>
            <p>{post.content}</p>
            </>
        )
    })}
    </>
  )


}