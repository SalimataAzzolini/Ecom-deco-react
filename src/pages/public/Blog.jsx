import { useState } from 'react';
import { accountService } from '@/_services';
import { Button } from '@mui/material';
import CardPost from '@/components/public/CardPost';
import './style/blog.scss';



const Blog = () => {

    let user = "";

    if(localStorage.getItem('userDatas') !== null){
        const userDatas = localStorage.getItem('userDatas');
        user = JSON.parse(userDatas).email;
    }

    const [post, setPost] = useState({
        title: '',
        content: '',
        author: user,
        image: null,
    });

    const onchange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    }

    // Fonction pour gérer le changement de l'image
    const onImageChange = (e) => {
        setPost({ ...post, image: e.target.files[0] });
    }

    const onSubmit = (e) => {
        e.preventDefault();

        //Todo : Vérifier que l'utilisateur est connecté

         // Vérifier si les champs requis sont renseignés
        if (!post.title || !post.content) {
            console.log("Veuillez renseigner tous les champs requis");
            return;
        }

        const formData = new FormData();
        formData.append('title', post.title);
        formData.append('content', post.content);
        formData.append('author', post.author);
        formData.append('image', post.image);

        fetch('http://localhost:8000/posts/create', {
            method: 'POST',
            body: formData,
            headers: {
                Authorization: `Bearer ${accountService.getToken()}`,
    
            }
        })
            .then(res => res.json())
            .then(res => console.log(res))
            .catch(err => console.log(err));

        setPost({
            title: '',
            content: '',
        });

    }

    return (
        <div className='container-page-blog'
        style={{paddingTop : '5rem', paddingBottom : '15rem', marginBottom : '-10rem'}}>
            {/* Todo : afficher le formulaire uniquement si user connecté */}

            <form onSubmit={onSubmit} className='form-post-blog'>
                <input type="text" name="title" onChange={onchange} value={post.title} placeholder='title' className='input-new-post'/>
                <input type="text" name="content" onChange={onchange} value={post.content} placeholder='content' className='input-new-post' />
                <input type="file" name="image" onChange={onImageChange}  className='input-new-post'/> 
                <Button type="submit" variant='contained' className='btn-new-post'
                sx={{ height: '2.5rem'}}
                >poster</Button>
            </form>

            <CardPost/>
        </div>
    );
};

export default Blog;
