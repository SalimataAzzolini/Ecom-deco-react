import React from 'react';

const Blog = () => {
    const location = useLocation();
    const userId = location.state && location.state.userId;

    // console.log(userId);

    const [user, setUser] = useState({});
    const [post, setPost] = useState(
        {
            title: '',
            content : '',
            image: '',
            author: '/api/users/2',
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
        fetch('http://127.0.0.1:8000/api/posts', options)
        .then(res => res.json())
        .then(data => console.log(data))
        .catch(err => console.log(err));
    }

    return (
        <div>

        <form onSubmit={onSubmit}>
            <input type="text" name="title" onChange={onchange} value={post.title} placeholder='title' />
            <input type="text" name="content" onChange={onchange} value={post.content} placeholder='content'/>
            <input type="text" name="image" onChange={onchange} value={post.image} placeholder='images' />
            <input type="text" name="author" onChange={onchange} value={post.author} placeholder='author' />
            <button type="submit">Submit</button>
        </form>

            
        </div>
    );
};

export default Blog;