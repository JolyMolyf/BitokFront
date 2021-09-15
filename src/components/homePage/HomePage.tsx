import React from 'react'
import './homePage.scss'
import backgroundImg from '../../imgs/homepage/homePageBackground.jpg';
import PageNameLabel from '../header/PageNameLabel'
import DriveButton from '../buttons/DriveButton';
import SideMenu from './SideMenu'
import CarCard from './CarCard'
import arrowIcon from '../../imgs/homepage/arrowIcon.png'
import Slider from 'react-slick';
import reviewsHomePage from '../../contents/reviewsHomePage'
import "slick-carousel/slick/slick.css";


const HomePage = (props:any) => {



    const SamplePrevArrow = (props:any) => {
        const {className, style, onClick} = props;
        const onKeyPressed = (e:any) =>{
          if (e.key ==='Enter') {
         
          }
        };
        return (
          <div
            className={className}
            style={{...style, display: 'block'}}
            onClick={()=>{
              onClick();
    
            }}>
            <img onKeyDown={onKeyPressed} tabIndex={12} className={'carousel-fullState-arrow carousel-fullState-arrow-backward'} src={arrowIcon}></img>
          </div>
        );
      };
      const SampleNextArrow = (props:any) => {
        const {className, style, onClick} = props;
        const onKeyPressed = (e:any) =>{
          if (e.key ==='Enter') {
          
          }
        };
        return (
            <div
              className={className}
              style={{...style, display: 'block'}}
              onClick={()=>{
                onClick();
              }}
            >
              <img onKeyDown={onKeyPressed} tabIndex={11} className={'carousel-fullState-arrow carousel-fullState-arrow-forward'} src={arrowIcon}></img>
            </div>
          );
        };
    const settings = {
        dots: false,
        arrows: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1.7,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow className='home-page-carousel-wrapper-arrows' tabIndex={9}/>,
        prevArrow: <SamplePrevArrow className='home-page-carousel-wrapper-arrows' tabIndex={10} />,
      };

    return(
      
        <div>
            <PageNameLabel label={'Home'}/>
            <div className='homePage'>
                <div className='homePage-background'>
                    <img src={backgroundImg}></img>
                </div>
                <div className='homePage-header'>
                    Car <br/>Selection <br/> Help
                </div>
                <div className='homePage-header-btn from-top'>
                    <DriveButton></DriveButton>
                </div>
                <div className={'homePage-header-down'}>
                    <img src={arrowIcon}></img>
                </div>
            </div>
            <div className='homePage-body'>
                <div className='homePage-body-header'>Top Specials</div>
                <div className='homePage-body-wrapper'>
                    <div className='homePage-body-sideMenu'>
                        <SideMenu></SideMenu>
                    </div>
                    <div className='homePage-body-wrapper-cars'>
                        <div className='homePage-body-wrapper-cars-item'>
                            <CarCard></CarCard>
                        </div>
                        <div className='homePage-body-wrapper-cars-item'>
                            <CarCard></CarCard>
                        </div>
                        <div className='homePage-body-wrapper-cars-item'>
                            <CarCard></CarCard>
                        </div>
                    </div>
                </div>
            </div>
            <div className='homePage-reviews'>
              <div className='homePage-body-header'>Reviews</div>
              <div className='homePage-reviews-carousel'>
              <Slider {...settings}>
                {[...reviewsHomePage].map((item, index) => {
                return (
                    <div key={index} className={'homePage-reviews-carousel-body'}>
                        <div className='homePage-reviews-carousel-body-image'><img src={item.image} alt='no-image'/></div>
                        <div  className='homePage-reviews-carousel-body-wrapper'>
                            <div className='homePage-reviews-carousel-body-comment'>{item.body}</div>
                            <div className='homePage-reviews-carousel-body-name'>{item.name}</div>
                        </div>
                        
                    </div>
                );
                })}
            </Slider>
              </div>
            </div>
          
        </div>
        
    )

}

export default HomePage;