import { useMemo } from 'react';
import './PlaceInfo.css';

const PlaceInfo = ({place, isPlaceToggled, togglePlace, currentId, slides, nextSlide, backSlide}) => {

    const info = useMemo(() => slides[currentId], [currentId]);

    return (
        <section className={`info ${isPlaceToggled ? '' : "info-hidden"}`}>
            <div className="info__dialog">
                <h1 className="info__real-title">
                    {info.name || ''}
                </h1>
                <div className="info__part">
                    {info.speech ? <p className="info__title">{info.speech}</p>
                    :
                    <div styles={{display: 'flex', 'flexDirection': 'column'}}>
                        <p className="info__text">{'\u00b7'} Поэт: {slides[currentId].poet}</p>
                        <p className="info__text">{'\u00b7'} Год построения: {slides[currentId].date}</p>
                        <p className="info__text">{'\u00b7'} Факты:</p>
                        <ol className='info__list'>
                            {info.facts.map((element, i) => {
                                return <li className='info__el' key={i}>{element}</li>
                            })}
                        </ol>
                    </div>
                    }
                </div>
                <p className="info__subtext">{slides[currentId].images ? "Фотографии:" : ''}</p>
                <div className="info__images">
                    {
                        slides[currentId].images ? 
                        (
                            slides[currentId].images.map((url, i) => {
                                return <img className="info__image" src={url} key={i} alt="image" /> 
                            })
                        )
                        :
                        ""
                    }
                </div>
                <div className="info__buttons">
                    {currentId ? <button className="info__button info__back" onClick={backSlide}>Назад</button> : ""}
                    {currentId + 1 === slides.length ? "" : <button className="info__button info__next" onClick={nextSlide}>Дальше</button>}
                </div>
                <p className="info__progress">{currentId + 1}/{slides.length}</p>
            </div>
            <button className={`info__toggler ${isPlaceToggled && 'info__button-toggled'}`} onClick={togglePlace}>

            </button>
        </section>
    );
};

export default PlaceInfo;