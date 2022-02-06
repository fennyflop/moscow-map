import { useEffect, useState, useRef } from 'react';
import { YMaps, Map } from 'react-yandex-maps';
import Place from '../Place/Place';
import PlaceInfo from '../PlaceInfo/PlaceInfo';
import { places, slides } from "../../utils/info";

const App = () => {

  const [selectedId, setSelectedId] = useState(0);
  const [isPlaceSelected, setIsPlaceSelected] = useState(false);
  const [selectedPlace, setSelectedPlace] = useState({});

  const mapRef = useRef(null);

  function selectPlace(name, date, info, coordinates, id) {
    setSelectedPlace({
      placeName: name,
      placeDate: date,
      placeInfo: info,
      placeCoordinates: coordinates,
    });
    setSelectedId(id);
    setIsPlaceSelected(true);
  }

  function moveToPlace(coordinates) {
    if (mapRef.current && coordinates) {
      mapRef.current.panTo(coordinates)
          .then(() => {
              setIsPlaceSelected(true);
          })
  }
  }

  function togglePlace () {
    setIsPlaceSelected(!isPlaceSelected);
  }

  function nextSlide() {
    setSelectedId(selectedId + 1);
  }
  function backSlide() {
    setSelectedId(selectedId - 1);
  }

  useEffect(() => {
    moveToPlace(slides[selectedId].coordinates);
    // console.log(slides[selectedId].coordinates)
  }, [selectedId])

  return (
    <>
    <main className="main">
    <PlaceInfo isPlaceToggled={isPlaceSelected} place={selectedPlace} togglePlace={togglePlace} currentId={selectedId} slides={slides} nextSlide={nextSlide} backSlide={backSlide} />
    <YMaps>
      <Map
      instanceRef={ref => {
        if (ref) mapRef.current = ref;
    }} 
        defaultState={{ center: [55.796127, 49.106414], zoom: 9 }} style={{
        width: "100%",
        height: "100vh",
      }}>
        {
          places.map(({placeName, placeDate, placeInfo, placeCoordinates, placeId}, i) => {
            return <Place name={placeName} date={placeDate} info={placeInfo} coordinates={placeCoordinates} id={placeId} moveToPlace={moveToPlace} selectPlace={selectPlace} key={i} />
          })
        }
      </Map>
  </YMaps>
    </main>
  </>
  );
}

export default App;