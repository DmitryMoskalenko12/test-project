import classes from './slider.module.scss';
import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import Button from '@/ui/button';

const Slider = () => {
  const [offset, setOffset] = useState(0);
  const [slideIndex, setSlideIndex] = useState(1);
  const [countSlides, setCountSlides] = useState(0);
  const [total, setTotal] = useState(0);
  const [current, setCurrent] = useState(0);
  const [width, setWidth] = useState(0);
  const elemWidth = useRef();

  useEffect(() => {
   setWidth(window.getComputedStyle(elemWidth.current).width);
   const numSlides = document.querySelectorAll(`.${classes.offer_slide}`);
   setCountSlides(numSlides.length)
   if (countSlides < 10) {
    setTotal(`0${numSlides.length}`)
    setCurrent(`0${slideIndex}`)
  } else{
    setTotal(`0${numSlides.length}`)
    setCurrent(`0${slideIndex}`)
  }
  },[slideIndex])
  
  const onNext = () => {
    if (offset == +width.replace(/\D/gi, '') * (countSlides - 1)) {
      setOffset(0)
    }else{
      setOffset(offset + +width.replace(/\D/gi, '')) 
    }

      if (slideIndex == countSlides) {
        setSlideIndex(1)
      }else{
        setSlideIndex(slideIndex => slideIndex + 1)
      }

      if (countSlides < 10) {
        setCurrent(`0${slideIndex}`)
      }else{
        setCurrent(slideIndex)
      }
  }

  const onPrev = () => {
    if (offset == 0) {
      setOffset(+width.replace(/\D/gi, '') * (countSlides - 1))
    } else{
      setOffset(offset - +width.replace(/\D/gi, ''))
    }

      if (slideIndex == 1) {
        setSlideIndex(countSlides)
      }else{
        setSlideIndex(slideIndex => slideIndex - 1)
      }

      if (countSlides < 10) {
        setCurrent(`0${slideIndex}`)
      }else{
        setCurrent(slideIndex)
      }
  }

  return (
   <section id='slider' className={classes.slider}>
    <div className="container">
    <div className={classes.offer_slider}>

     <div className={classes.big_wrapper}>
      <div className={classes.title_block}>
          <h1 className={classes.h1}>PROJECT <span className={classes.sub_title}> <br /> HOME</span></h1>
        </div>

        <div className={classes.navigation_block}>
          <button onClick={onPrev} className={classes.offer_slider_prev}>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="9" viewBox="0 0 18 9" fill="none">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 4.5C18 4.22386 17.7761 4 17.5 4L1.5 4C1.22386 4 1 4.22386 1 4.5C1 4.77614 1.22386 5 1.5 5L17.5 5C17.7761 5 18 4.77614 18 4.5Z" fill="#333333"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M5.35355 0.646447C5.15829 0.451184 4.84171 0.451184 4.64645 0.646447L0.792894 4.5L4.64645 8.35355C4.84171 8.54882 5.15829 8.54882 5.35355 8.35355C5.54882 8.15829 5.54882 7.84171 5.35355 7.64645L2.20711 4.5L5.35355 1.35355C5.54882 1.15829 5.54882 0.841709 5.35355 0.646447Z" fill="#333333"/>
              </svg>
          </button>
          <button onClick={onNext} className={classes.offer_slider_next}>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="9" viewBox="0 0 19 9" fill="none">
              <path fillRule="evenodd" clipRule="evenodd" d="M0.935211 4.5C0.935211 4.22386 1.15907 4 1.43521 4L17.4352 4C17.7114 4 17.9352 4.22386 17.9352 4.5C17.9352 4.77614 17.7114 5 17.4352 5L1.43521 5C1.15907 5 0.935211 4.77614 0.935211 4.5Z" fill="#333333"/>
              <path fillRule="evenodd" clipRule="evenodd" d="M13.5817 0.646447C13.7769 0.451184 14.0935 0.451184 14.2888 0.646447L18.1423 4.5L14.2888 8.35355C14.0935 8.54882 13.7769 8.54882 13.5817 8.35355C13.3864 8.15829 13.3864 7.84171 13.5817 7.64645L16.7281 4.5L13.5817 1.35355C13.3864 1.15829 13.3864 0.841709 13.5817 0.646447Z" fill="#333333"/>
              </svg>
          </button>
        </div>

        <div className={classes.offer_slider_counter}>
            <span className={classes.current}>{current}</span>
            <span className={classes.slash}>/</span>
            <span className={classes.total}>{total}</span>
        </div>
     </div>

      <div ref={elemWidth} className={classes.offer_slider_wrapper}>
        <div style = {{transform: `translateX(-${offset}px)`, width: 100 * countSlides + '%'}} className={classes.slider_field}>
          <div className={classes.offer_slide}>
            <Image src={'/images/slider-image/slider-image.png'} alt="You will see home project" width={770} height={829}/>
            <Button clazz={classes.see} svg_clazz={classes.svg} content={'Взглянуть'}/>
         </div>
        <div className={classes.offer_slide}>
            <Image src={'/images/slider-image/slider-image.png'} alt="You will see home project" width={770} height={829}/>
            <Button clazz={classes.see} svg_clazz={classes.svg} content={'Взглянуть'}/>
        </div>    
        </div>
      </div>
  </div>
    </div>
   </section>
  )
}

export default Slider;