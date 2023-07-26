import FavoriteIcon from '@mui/icons-material/Favorite';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import './style/card-post.scss';


const CardPost = () => {


  return (

    <div className='container-card-blog'>

        <div className="blog-container">
        <div className="blog-header">
            <div className="blog-cover">
            <div className="blog-author">
                <h3>Sally Rode</h3>
            </div>
            </div>
        </div>

        <div className="blog-body">
            <div className="blog-title">
            <h1><a href="#">I Like To Make Cool Things</a></h1>
            </div>
            <div className="blog-summary">
            <p> To that end, I need to freshen up my portfolio here because it does exactly the opposite. For the next month I will be working almost exclusively on my portfolio. Sounds like a lot of fun!</p>
            </div>
            <div className="blog-tags">
            <ul>
                <li><a href="#">chambre</a></li>
            </ul>
            </div>
        </div>
        
        <div className="blog-footer">
            <ul>
            <li className="comments"><a href="#"><svg className="icon-bubble"></svg><span className="numero"> <MarkUnreadChatAltIcon/> 2</span></a></li>
            <li className="shares"><a href="#"><svg className="icon-star"></svg><span className="numero"> <FavoriteIcon/>6</span></a></li>
            </ul>
        </div>

        </div>

        <div className="blog-container">
        <div className="blog-header">
            <div className="blog-cover">
            <div className="blog-author">
                <h3>Emil Beye</h3>
            </div>
            </div>
        </div>

        <div className="blog-body">
            <div className="blog-title">
            <h1><a href="#">I Like To Make Cool Things</a></h1>
            </div>
            <div className="blog-summary">
            <p>I love working on fresh designs that To that end, I need to freshen up my portfolio here because it does exactly the opposite. For the next month I will be working almost exclusively on my portfolio. Sounds like a lot of fun!</p>
            </div>
            <div className="blog-tags">
            <ul>
                {/* <li><a href="#">salon</a></li> */}
        
            </ul>
            </div>
        </div>
        
        <div className="blog-footer">
            <ul>
            <li className="comments"><a href="#"><svg className="icon-bubble"></svg><span className="numero"> <MarkUnreadChatAltIcon/> 2</span></a></li>
            <li className="shares"><a href="#"><svg className="icon-star"></svg><span className="numero"> <FavoriteIcon/>6</span></a></li>
            </ul>
        </div>

        </div>

    </div>

)
};

export default CardPost;