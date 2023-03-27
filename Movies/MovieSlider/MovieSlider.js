import React, { useEffect, useState } from "react";
import { Slider } from "../../utilities/utilities";
import MovieCard from "./MovieCard";

const MovieSlider = () =>
{
    const [sliderWrapper, setSliderWrapper] = useState(null);
    useEffect(() =>
    {
        setSliderWrapper(document.querySelector(".slider-wrpper"));
    }, []);
    const slider = new Slider();
    return (
        <div className="position-relative">
            <div className="slider-wrpper d-flex align-items-center bg-black overflow-hidden pt-5 pb-5">
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div className="me-3"><MovieCard /></div>
                <div><MovieCard /></div>
            </div>
            <div className="pagniation">
                <i className="fa-solid fa-angle-left" onClick={() =>
                {
                    slider.perv(sliderWrapper);
                }}></i>
                <i className="fa-solid fa-angle-right" onClick={() =>
                {
                    slider.next(sliderWrapper);
                }}></i>
            </div>
        </div>
    );
}

export default MovieSlider;