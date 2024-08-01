import './map.scss';
import { MapContainer, TileLayer} from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import Pin from '../pin/Pin';

function Map(props) {
  console.log(props)
  return (
    <MapContainer center={[52.4862, -1.8904]} zoom={7} scrollWheelZoom={false} className='map'>
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
    {props.items.map(item => (
      <Pin item={item} key={item.id} />
    ))}
  </MapContainer>
  )
}

export default Map;