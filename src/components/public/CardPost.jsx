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
            <h1><a href="htpp">J'adore les idées de mélanges</a></h1>
            </div>
            <div className="blog-summary">
            <p> J'ai créé un mélange de décoration chalereux dans différentes pieces de la maison. Dites moi ce que vous en pensez</p>
            </div>
            <div className="blog-tags">
            <ul>
                <li><a href="htpp">chambre</a></li>
            </ul>
            </div>
        </div>
        
        <div className="blog-footer">
            <ul>
            <li className="comments"><a href="htpp"><svg className="icon-bubble"></svg><span className="numero"> <MarkUnreadChatAltIcon/> 2</span></a></li>
            <li className="shares"><a href="htpp"><svg className="icon-star"></svg><span className="numero"> <FavoriteIcon/>6</span></a></li>
            </ul>
        </div>

        </div>

        <div className="blog-container">
        <div className="blog-header">
            <div className="blog-cover-2">
            <div className="blog-author">
                <h3>Emil Beye</h3>
            </div>
            </div>
        </div>

        <div className="blog-body">
            <div className="blog-title">
            <h1><a href="htpp">Idée décoration pour la chambre enfant</a></h1>
            </div>
            <div className="blog-summary">
            <p>Ici un mélange de differentes univers pour une ambiance cocooning dans la chambre de ma fille. </p>
            </div>
            <div className="blog-tags">
            <ul>
        
            </ul>
            </div>
        </div>
        
        <div className="blog-footer">
            <ul>
            <li className="comments"><a href="htt"><svg className="icon-bubble"></svg><span className="numero"> <MarkUnreadChatAltIcon/> 2</span></a></li>
            <li className="shares"><a href="djdj"><svg className="icon-star"></svg><span className="numero"> <FavoriteIcon/>6</span></a></li>
            </ul>
        </div>

        </div>

    </div>

)
};

export default CardPost;