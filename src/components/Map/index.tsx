import Router from 'next/router';
import { MapContainer, TileLayer, Marker } from 'react-leaflet';

type Place = {
  id: string;
  name: string;
  slug: string;
  location: {
    latitude: number;
    longitude: number;
  };
};

export type MapProps = {
  places?: Place[];
};

const MAPBOX_API_KEY = process.env.NEXT_PUBLIC_MAPBOX_API_KEY;
const MAPBOX_USERID = process.env.NEXT_PUBLIC_MAPBOX_USERID;
const MAPBOX_STYLEID = process.env.NEXT_PUBLIC_MAPBOX_STYLEID;

const CustomTileLayer = () => {
  return MAPBOX_API_KEY ? (
    <TileLayer
      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
      url={`https://api.mapbox.com/styles/v1/${MAPBOX_USERID}/${MAPBOX_STYLEID}/tiles/256/{z}/{x}/{y}@2X?access_token=${MAPBOX_API_KEY}`}
    />
  ) : (
    <TileLayer
      attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
    />
  );
};

export function Map({ places }: MapProps) {
  return (
    <MapContainer
      center={[51.505, -0.09]}
      zoom={3}
      style={{ width: '100%', height: '100%' }}
    >
      <CustomTileLayer />

      {places?.map(place => {
        const { latitude, longitude } = place.location;

        return (
          <Marker
            key={`place-${place.id}`}
            position={[latitude, longitude]}
            title={place.name}
            eventHandlers={{
              click: () => {
                Router.push(`/place/${place.slug}`);
              },
            }}
          />
        );
      })}
    </MapContainer>
  );
}
