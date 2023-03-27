import Button from "../../Button/Button";
import Header from "../../Home/Header";
import MovieSlider from "../MovieSlider/MovieSlider";

const TopRatedMovies = () =>
{
    return (
        <div className="movies-cover">
            <Header />
            <div style={{ "margin": "300px 150px" }} className='movie-text' >
                <div className="text-white">
                    <h1 style={{ "fontSize": "40px" }} className="fw-bolder mb-3">Godzilla Kong</h1>
                    <h4 style={{ "maxWidth": "50%" }} className="mb-5">An ancient rivalry pits two legends against each other as a mission in an uncharted land uncovers clues to the origins of the giants.</h4>
                    <div className="d-flex">
                        <Button btnHTML='Show' icone={`fa-solid fa-heart me-2`} setClass="main-btn me-4" />
                        <Button btnHTML='More Details' setClass="main-btn" />
                    </div>
                </div>
            </div>
            <div className="slider">
                <MovieSlider />
            </div>
        </div>
    )
}

export default TopRatedMovies;