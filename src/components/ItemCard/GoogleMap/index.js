import "./style.scss"
import React from 'react'
import GoogleMapReact from 'google-map-react'; 


const Map = (center) => {
    const AnyReactComponent = ({ text }) => <div className="mapPin"  
    >{text}</div>;

    const defaultProps = {
        center: {
          lat: 37.61726527451449,
          lng: -0.9883358300829631
        },
        zoom: 15
      };
      return (
        <div className="container">
          <GoogleMapReact
            bootstrapURLKeys={{ key: "AIzaSyDM-XGqwwYPCTZUiHk11hDGGq77-LqLWzw" }}
            defaultCenter={center?.center}
            defaultZoom={defaultProps.zoom}
          >
            <AnyReactComponent 
            lat = {center?.center?.lat} 
            lng = {center?.center?.lng}
            >
            </AnyReactComponent>
          </GoogleMapReact>
        </div>
      );
}
export { Map }