import React from 'react';

export const getPost  = async(post_id) =>{
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${post_id}`)
    const data = await res.json();
    return data
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