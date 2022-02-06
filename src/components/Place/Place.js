import './Place.css';
import {Placemark} from 'react-yandex-maps';

const Place = ({name, date, info, coordinates, selectPlace, id, moveToPlace}) => {

    function handleSelectPlace() {
        moveToPlace(coordinates);
        selectPlace(name, date, info, coordinates, id);
    }

    return (
        <Placemark defaultGeometry={coordinates} onClick={handleSelectPlace} />
    )
};

export default Place;