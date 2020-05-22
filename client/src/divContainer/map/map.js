import React, { useState, useEffect } from 'react';
import { Map, Circle, Marker, GoogleApiWrapper } from 'google-maps-react';
import './map.css'




function Maps(props) {
    const center = { lat: 41.586834, lng: -93.624962 }
    const [message, setMessage] = useState('')
    const [bounds, setBounds] = useState(null)
    const [cords, setCords] = useState(null)
    const [name, setName] = useState('')

    const getBounds = (userLocation) => {
        const mapBounds = new props.google.maps.LatLngBounds();
        mapBounds.extend(center)
        mapBounds.extend(userLocation)
        console.log(mapBounds)
        setBounds(mapBounds);
    }
    const getLocation = () => {
        if (!navigator.geolocation) {
            return setMessage('your browser does not support GeoLocation')
        }
        let userLocation = {}
        const success = pos => {
            userLocation = {
                lat: Number(pos.coords.latitude),
                lng: Number(pos.coords.longitude)
            }
            setMessage(userLocation.lat)
            if (userLocation) {
                setCords(userLocation)
                getBounds(userLocation)

                
                fetch(`${process.env.REACT_APP_EXPRESS_URL}/check-in`, {method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({name:name, location: userLocation})})
            }
        }
        const error = err => {
            setMessage(`I'm sorry GeoLocation isn't allowed on your device`)
        }
        navigator.geolocation.getCurrentPosition(success,error)
    }

    if (cords) {
        return (
            <div className="map" id="map">
                <a id="mapA" className="linkAnchor"></a>
                <div className="mapContainer">
                    <Map google={props.google}
                        initialCenter={center}
                        mapTypeControl={false} scaleControl={false} streetViewControl={false} panControl={false} rotateControl={false} fullscreenControl={false} bounds={bounds} containerStyle={{ height: "calc(30rem * var(--multiplier))", width: "calc(41rem * var(--multiplier))", position: "relative", top: "calc(1rem * var(--multiplier))", right: "calc(-1rem * var(--multiplier))" }}>
                        <Marker position={{ lat: cords.lat, lng: cords.lng }} />

                    </Map>
                </div>

                <div className="findLocation">
                    <h3>Map</h3>
                    <h4>Let me know where you are checking in from!</h4>
                    <p>Thanks! {name}</p>
                </div>
            </div>
        )

    } else {
        return (
            <div className="map" id="map">
                <a id="mapA" className="linkAnchor"></a>
                <Map google={props.google} zoom={10}
                    initialCenter={center}
                    mapTypeControl={false} scaleControl={false} streetViewControl={false} panControl={false} rotateControl={false} fullscreenControl={false} containerStyle={{ height: "calc(30rem * var(--multiplier))", width: "calc(41rem * var(--multiplier))", position: "relative", top: "calc(1rem * var(--multiplier))", right: "calc(-1rem * var(--multiplier))" }}>

                </Map>
                <div className="findLocation">
                    <h3>Map</h3>
                    <h4>Let me know where you are checking in from!</h4>
                    <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="name"></input>
                    <br />
                    <a onClick={getLocation}>Check In</a>
                    <p className="errorMessage">{message}</p>
                </div>
            </div>
        )

    }
}
export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_APIKEY
})(Maps)



