import { LatLngTuple } from "leaflet";
import * as React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export interface IJob {
  name: string;
  location: string;
  tipped: boolean;
  link: string;
  position: LatLngTuple;
}

interface IMapProps {
  data?: IJob[];
}

export default function Map(props: IMapProps) {
  const { data } = props;

  return (
    <MapContainer
      center={[40, -90]}
      zoom={5}
      style={{ height: "100%", width: "100%" }}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((item, index) => {
        return (
          <Marker position={item.position} key={index}>
            <Popup>
              <h3>
                <a href={item.link}>{item.name}</a>
              </h3>
              <p>{item.location}</p>
              {item.tipped ? <p color="red">Tipped</p> : null}
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}
