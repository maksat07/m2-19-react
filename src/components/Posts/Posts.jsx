import React from 'react'



const Posts = ({posts}) => {
  return (
    <ul>
    {posts.map((item) => (
      <li className='posts' key={item.id}>
        <h3>{item.title}</h3>
        <p>{item.body}</p>
      </li>
    ))}
  </ul>
  );
};

export default Posts