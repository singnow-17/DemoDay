import "./Slide.css";
import { useState } from "react";
import Slider from "react-slick";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import Shows from "./Shows";
import { Box } from "@chakra-ui/react";

const images = [Shows, Shows, Shows, Shows,];

export default function Slide() {
  const NextArrow = ({ onClick }) => {
    console.log("ola")
    return (
      <Box
        onClick={onClick}
        position=' absolute'
        cursor=' pointer'
        z-index='10'
        transition={'color 300ms'}
        _hover={{ color: '#FA9201' }}
        right='0%'
        top='50%'>
        <FaArrowRight />
      </Box>
    );
  };

  const PrevArrow = ({ onClick }) => {
    console.log("ola")
    return (
      <Box
        onClick={onClick}
        position=' absolute'
        cursor=' pointer'
        z-index='10'
        transition={'color 300ms'}
        _hover={{ color: '#FA9201' }}
        left='0%'
        top='50%' >

        <FaArrowLeft />
      </Box>
    );
  };

  const [imageIndex, setImageIndex] = useState(0);

  const settings = {
    infinite: true,
    lazyLoad: true,
    speed: 500,
    slidesToShow: 3,
    centerMode: true,
    centerPadding: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    beforeChange: (current, next) => setImageIndex(next),
  };

  return (
    <Box
      width='90%'
      height='600px'
      margin='4rem auto'
      align-items='center'
      justify-content=' center'>
      <Slider {...settings}>
        {images.map((img, idx) => (
          <div className={idx === imageIndex ? "slide activeSlide" : "slide"}>
            <Shows />
          </div>
        ))}
      </Slider>
    </Box>
  );
}