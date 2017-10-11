import React, { Component } from 'react';
import './App.css';
import ReactMapboxGl, { Layer, Feature } from "react-mapbox-gl";

class App extends Component {
  render() {
    const accessToken = 'pk.eyJ1IjoibW91cm5lciIsImEiOiJWWnRiWG1VIn0.j6eccFHpE3Q04XPLI7JxbA';
    const Map = ReactMapboxGl({ accessToken });
    const zoom = [8];

    return (
      <Map
        style="mapbox://styles/mapbox/streets-v8"
        zoom={zoom}
        containerStyle={{
          height: "500px",
          width: "500px"
        }}>
          <Layer
            type="symbol"
            id="marker"
            layout={{ "icon-image": "marker-15" }}>
            <Feature coordinates={[-0.481747846041145, 51.3233379650232]}/>
          </Layer>
      </Map>
    );
  }
}

export default App;
