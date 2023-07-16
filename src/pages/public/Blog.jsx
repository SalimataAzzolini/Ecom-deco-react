import React from 'react';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Blog = () => {
    const location = useLocation();
    let user = "";

    if(localStorage.getItem('userDatas') !== null){
        const userDatas = localStorage.getItem('userDatas');
        user = JSON.parse(userDatas).email;
    }

    const [post, setPost] = useState(
        {
            title: '',
            content : '', 
            author: user,

        }
        );

    const onchange = (e) => {
        setPost({...post, [e.target.name]: e.target.value});
    }
    
    const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      };

    const onSubmit = (e) => {
        e.preventDefault();
        fetch('http://127.0.0.1:8000/posts/create', options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return (
        <div>

        <form onSubmit={onSubmit}>
            <input type="text" name="title" onChange={onchange} value={post.title} placeholder='title' />
            <input type="text" name="content" onChange={onchange} value={post.content} placeholder='content'/>
            <button type="submit">Submit</button>
        </form>

            
        </div>
    );
};

export default Blog;