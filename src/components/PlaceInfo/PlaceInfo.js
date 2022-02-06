import './PlaceInfo.css';

const PlaceInfo = ({place, isPlaceToggled, togglePlace, currentId, slides, nextSlide, backSlide}) => {

    console.log(slides[currentId].images)

    const imageUrl = `https://cdn.pixabay.com/photo/2020/09/04/09/09/snow-leopard-5543394_960_720.png`;

    return (
        <section className={`info ${isPlaceToggled ? '' : "info-hidden"}`}>
            <div className="info__dialog">
                <h1 className="info__real-title">
                    {slides[currentId].name || ''}
                </h1>
                <div className="info__part">
                    <div className="info__person">
                    <img className="info__speaker" src={imageUrl} alt="speaker" />
                    <p className="info__name">Снежный барс</p>
                    </div>
                    <h1 className="info__title">{slides[currentId].speech}</h1>
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