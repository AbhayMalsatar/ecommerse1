import { Component } from 'react'
import {  } from 'react-bootstrap'
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

export class MapScreen extends Component {
    render() {
        const mapStyles = {
            width: '100%',
            height: '95%',
            marginTop:'30px',
            overRide:'none'
        
          };
        return (

            
                <div class='map'  >
                    <Map google={this.props.google} zoom={14} initialCenter={{
                        lat: 23.2420,
                        lng: 69.6669,
                    }} style={mapStyles} >

                        <Marker onClick={this.onMarkerClick}
                            name={'Current location'} />

                        <InfoWindow onClose={this.onInfoWindowClose}>

                        </InfoWindow>
                    </Map>
                </div>
        );
    }
}


export default GoogleApiWrapper({
    apiKey: ("AIzaSyA8LA2Or7s17N7Z1rJm9MYQWnowDuMVUWw")
})(MapScreen)
