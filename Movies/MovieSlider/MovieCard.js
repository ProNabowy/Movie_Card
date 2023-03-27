const MovieCard = () =>
{
    return (
        <div className="slider-item text-white">
            <div className="slider-item-wrapper">
                <div className="img-poster">
                    <img src={require("../image/test.PNG")} className='mw-100' alt="" />
                </div>
                <div className="video-content">
                    <div className="icones d-flex justify-content-between align-content-center">
                        <span><i className="fa-solid fa-chevron-down"></i></span>
                        <div>
                            <span><i className="fa-solid fa-thumbs-up"></i></span>
                            <span><i className="fa-solid fa-plus"></i></span>
                            <span className="span-play"><i className="fa-solid fa-play"></i></span>
                        </div>
                    </div>
                    <div className="video-text">
                        <p className="time-quality">New <span className="box-span">+13</span> 1 Hour 32 Minute <span className="box-span">Full HD Quality</span></p>
                        <div className="video-type d-flex align-items-center">
                            <p>Test</p>
                            <p>Test</p>
                            <p>Test</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MovieCard;