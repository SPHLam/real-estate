import './pin.scss'
import { Link } from 'react-router-dom';
import { Marker, Popup } from 'react-leaflet';

function Pin(props) {
  return (
    <Marker position={[props.item.latitude, props.item.longitude]}>
      <Popup>
        <div className="popupContainer">
          <img src={props.item.img} alt="" />
          <div className="textContainer">
            <Link to={`/${props.item.id}`}>{props.item.title}</Link>
            <span>{props.item.bedroom} bedroom</span>
            <b>{props.item.price} $</b>
          </div>
        </div>
      </Popup>
    </Marker>
  )
}

export default Pin;