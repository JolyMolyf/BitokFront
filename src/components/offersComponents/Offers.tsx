import React from 'react'
import PageNameLabel from '../header/PageNameLabel'
import Header from './OfferHeader'
import './offers.scss'
import "slick-carousel/slick/slick.css";
import Slider from 'react-slick';
import arrowIcon from '../../imgs/homepage/arrowIcon.png'


const images = ['./images/photoChapter13.png', './images/v2.webp', './images/v3.webp', './images/v4.webp', './images/v5.webp']

const Offers = (props:any) => {

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
        <div className='offers'>
            
            <PageNameLabel label={'Car'}></PageNameLabel>
            <div className="offers-header-wrapper">
             <Header></Header>
            </div>
            <div className="offers-carousel">
                <div className='homePage-reviews-carousel'>
                    <Slider {...settings}>
                        {[...images].map((item:any, index) => {
                            console.log(item)
                            return (
                                <div key={index} className={'homePage-reviews-carousel-body'}>
                                    <div className='homePage-reviews-carousel-body-image'><img src={item} alt='no-image'/></div>
                                    <div  className='homePage-reviews-carousel-body-wrapper'>
                                        <div className='homePage-reviews-carousel-body-comment'>{item}</div>
                                        <div className='homePage-reviews-carousel-body-name'>{item.name}</div>
                                    </div>    
                                </div>
                                );
                            })}
                    </Slider>
                </div>
            </div>
            <div className='offers-description'>
                <div className="offers-specs">

                </div>
                <div className="offers-body">
                    
                </div>
            </div>
            
        </div>
    )
    
}


export default Offers