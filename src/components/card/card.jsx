import './card.scss';
import { Link } from 'react-router-dom';

function Card({ item }) { // Destructure props to access item directly
    return (
        <div className="card">
            <Link to={`/item/${item.id}`} className="imageContainer">
                <img src={item.image} alt="" />
            </Link>
            <div className="textContainer">
                <h2 className="title">
                    <Link to={`/item/${item.id}`}>{item.title}</Link>
                </h2>
                
                <p className='address'>
                    <img src="/pin.png" alt="" />
                    <span>{item.address}</span>
                </p>
                <p className="price">${item.price}</p>
                <div className="bottom">
                    <div className="features">
                         <div className="feature">
                            <img src="/bed.png" alt="" />
                            <span>{item.bedroom} Bed</span>
                         </div>
                         <div className="feature">
                            <img src="/bath.png" alt="" />
                            <span>{item.bathroom} Bath</span>
                         </div>
                    </div>
                    <div className="icons">
                        <div className="icon">
                            <img src="/save.png" alt="" />
                        </div>
                        <div className="icon">
                            <img src="/chat.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
