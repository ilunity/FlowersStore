import React from 'react';
import {photo, present, video, boxes, baskets, gifts, catalog, roses} from "../img/home/index";
import SliderBox from '../components/common/slider/SliderBox';
const Home = () => {
    return (
        <main className='main'>
            <div className="main__home home">
                <div className="home__container container">
                    <div className="home__banner banner">
                        <div className="banner__column">
                            <div className="banner__discount">
                                <img src={catalog} alt="" />
                            </div>
                        </div>
                        <div className="banner__column">
                            <div className="banner__catalog catalog-banner">
                                <div className="catalog-banner__row">
                                    <div className="catalog-banner__item">
                                        <img src={roses} alt="" />
                                    </div>
                                    <div className="catalog-banner__item">
                                        <img src={gifts} alt="" />
                                    </div>
                                </div>
                                <div className="catalog-banner__row">
                                    <div className="catalog-banner__item">
                                        <img src={baskets} alt="" />
                                    </div>
                                    <div className="catalog-banner__item">
                                        <img src={boxes} alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home__about about-home">
                        <div className="about-home__item">
                            <img src={photo} alt="" />
                        </div>
                        <div className="about-home__item">
                            <img src={video} alt="" />
                        </div>
                        <div className="about-home__item">
                            <img src = {present} alt="" />
                        </div>
                    </div>
                    <SliderBox/>
                </div>
            </div>
        </main>
    );
};

export default Home;