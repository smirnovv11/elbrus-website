import React from 'react';
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps';
import styles from './MapComponent.module.css'

const MapComponent = () => {
  return (
    <YMaps>
      <div className={styles.map}>
        <Map
          defaultState={{ center: [55.786450, 37.727355], zoom: 17 }}
          width="100%"
          height="100%"
        >
          <Placemark
            geometry={[55.786450, 37.727355]}
            properties={{
              hintContent: 'Ткацкая 17',
              balloonContent: 'Ткацкая 17'
            }}
            options={{
              preset: 'islands#dotIcon',
            }}
          />
        </Map>
      </div>
    </YMaps>
  );
};

export default MapComponent;
