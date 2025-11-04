import React from 'react';


export const getPost = async(post_id) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data
}


export async function generateMetadata({ params }) {
   const id = (await params).id;
  const post = await getPost(id);
  return {
    title: post?.title,
    description: post.body,
  };
}


const PostPage = async({params}) => {
    const {id} = await params;
    const post = await getPost(id)
    return (
        <div>
           <p>{post.title}</p>
        </div>
    );
};

export default PostPage;