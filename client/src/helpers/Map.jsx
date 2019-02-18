import React from 'react';
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

import './style.css';

const Map = compose(
    withProps({
        googleMapURL: "https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places",
        loadingElement: <div style={{ height: `100%` }} />,
        containerElement: <div style={{ height: `400px` }} />,
        mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
)((props) =>
    <GoogleMap
        defaultZoom={14}
        defaultCenter={{ lat: 43.8563, lng: 18.4131 }}
        defaultMapTypeId='terrain'
    >
        {props.offices.map(office =>
            (props.showOffice === 0 || props.showOffice === office.id) && <Marker key={office.id} defaultTitle={office.address} position={{ lat: office.lat, lng: office.lng }} onClick={props.onMarkerClick} />
        )}
    </GoogleMap>
);

export default Map;
