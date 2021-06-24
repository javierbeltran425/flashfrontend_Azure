import SideBar from "../Components/SideBar";
import banner from "../Resources/CarWash4.jpeg";
import Card from "../Components/Card";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarWash1 from '../Resources/CarWash1.jpeg'
import CarWash8 from '../Resources/CarWash8.jpeg'
import CarWash6 from '../Resources/CarWash6.jpeg'
import CarWash5 from '../Resources/CarWash5.jpeg'
import CarWash9 from '../Resources/CarWash9.jpeg'
import CarWash10 from '../Resources/CarWash10.jpeg'

import { useState } from "react";
import styled from "styled-components";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};

const Services = () => {
  return (
    <>
      <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
        <img
          src={banner}
          className="hidden lg:flex lg:w-full lg:h-screen opacity-20"
        ></img>
        <SideBar />

      <div className="hidden lg:inline absolute w-full h-full">
        <div className="absolute flex justify-center items-center w-full h-full">
          <Carousel className="w-9/12" responsive={responsive}>
            <Card title="Lavado de auto compacto" img={CarWash1} desc="Lavado de carrocería exterior de vehículo compacto con hidro lavadora y jabón eco amigable. No incluye: Lavado de interior, pasteado, siliconado ni aspirado interior." price="$8.00"/>
            <Card title="Lavado de auto grande" img={CarWash8} desc="Lavado de carrocería exterior de vehículo compacto con hidro lavadora y jabón eco amigable. No incluye: Lavado de interior, pasteado, siliconado ni aspirado interior." price="$10.00"/>
            <Card title="Lavado de motos" img={CarWash6} desc="Lavado de carrocería exterior de motocicletas con hidro lavadora y jabón eco amigable. No incluye: Pasteado, siliconado ni pulida de silvines" price="$6.00"/>
            <Card title="Lavado de coaster y microbus" img={CarWash5} desc="Lavado de carrocería exterior de coaster y microbús con hidro lavadora y jabón eco amigable. No incluye: Lavado de interior, pasteado, siliconado ni aspirado interior." price="$15.00"/>
            <Card title="Lavado de tapicería auto compacto" img={CarWash9} desc="Lavado de tapicería completa en auto compacto. Incluye: Puertas, techo, alfombras, asientos y tablero." price="$23.99"/>
            <Card title="Lavado de tapicería auto grande" img={CarWash10} desc="Lavado de tapicería completa en auto grande. Incluye: Puertas, techo, alfombras, asientos y tablero." price="$39.99"/>
          </Carousel>
        </div>
      </div>

      </div>
    </>
  );
};

export default Services;
