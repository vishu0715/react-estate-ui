import { Marker, Popup } from 'react-leaflet'
import './pin.scss'
import { Link } from 'react-router-dom'

function Pin({item}){
    return (
        <Marker position={[item.latitude, item.longitude]}>
          <Popup>
           <div className="popupContainer">
            <img src={item.image} alt="" />
            <div className="textContainer">
                <Link to={`/${item.id}`}>{item.title}</Link>
                <span>{item.address}</span>
                <span>{item.bedroom} bedroom</span>
                <span>{item.bathroom} bathroom</span>
                <b>${item.price}</b>
            </div>
           </div>
          </Popup>
        </Marker>
    )
}

export default Pin