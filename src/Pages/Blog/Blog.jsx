
import React, {useState, useEffect} from 'react';
import Posts from '../../components/Posts/Posts';
import axios from 'axios';
import { Pagination } from '../../components';
import "./blog.scss"

export default function Blog() {
  const [posts, setPoststs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  


  useEffect(() => {
  const getPosts= async () => {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/posts"
      );

      setPoststs(response.data);
  };

  getPosts();
  }, [])

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const pagenate = (pageNamber) =>{
    setCurrentPage(pageNamber);
  }
  return (
    <section className='services'>
       <h1 style={{textAlign: "center"}}>My Blog</h1>
       <div className="blog__pg">
         <Posts posts={currentPosts} />
         <Pagination 
         postsPerPage={postsPerPage} 
         totalPosts={posts.length} 
         paginate={pagenate} 
                     />
       </div> 
   </section>
  );
}
