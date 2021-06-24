
import GenCard from '../Components/GenCard'
import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'

import banner from '../Resources/CarWash4.jpeg'
import FactCard from '../Components/FactCard'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import CarWash1 from '../Resources/CarWash1.jpeg'
import CarWash8 from '../Resources/CarWash8.jpeg'
import CarWash6 from '../Resources/CarWash6.jpeg'
import CarWash5 from '../Resources/CarWash5.jpeg'
import CarWash9 from '../Resources/CarWash9.jpeg'
import CarWash10 from '../Resources/CarWash10.jpeg'

import { useHistory } from 'react-router-dom'
import { useState } from 'react'

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


const Home = () => {
    const [ aboutShow, setAboutShow ] = useState({ show: false })
    const [ factShow, setFactShow ] = useState({ show: false })

    return(
        <>
            <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
                <img src={banner} className="hidden lg:flex lg:w-full lg:h-screen opacity-20"></img>
                <SideBar/>
                <div className="lg:hidden flex ml-20 justify-center items-center w-full h-full mb-20 md:hidden lg:hidden">
                    <Carousel className="w-9/12" responsive={responsive}>
                      <GenCard title="Lavado de auto compacto" img={CarWash1} desc="Lavado de carrocería exterior de vehículo compacto con hidro lavadora y jabón eco amigable. No incluye: Lavado de interior, pasteado, siliconado ni aspirado interior." price="$8.00"/>
                      <GenCard title="Lavado de auto grande" img={CarWash8} desc="Lavado de carrocería exterior de vehículo compacto con hidro lavadora y jabón eco amigable. No incluye: Lavado de interior, pasteado, siliconado ni aspirado interior." price="$10.00"/>
                      <GenCard title="Lavado de motos" img={CarWash6} desc="Lavado de carrocería exterior de motocicletas con hidro lavadora y jabón eco amigable. No incluye: Pasteado, siliconado ni pulida de silvines" price="$6.00"/>
                      <GenCard title="Lavado de coaster y microbus" img={CarWash5} desc="Lavado de carrocería exterior de coaster y microbús con hidro lavadora y jabón eco amigable. No incluye: Lavado de interior, pasteado, siliconado ni aspirado interior." price="$15.00"/>
                      <GenCard title="Lavado de tapicería auto compacto" img={CarWash9} desc="Lavado de tapicería completa en auto compacto. Incluye: Puertas, techo, alfombras, asientos y tablero." price="$23.99"/>
                      <GenCard title="Lavado de tapicería auto grande" img={CarWash10} desc="Lavado de tapicería completa en auto grande. Incluye: Puertas, techo, alfombras, asientos y tablero." price="$39.99"/>
                    </Carousel>
                </div>
                <div className="hidden absolute lg:flex lg:left-96 lg:top-12 lg:opacity-80">
                    <FactCard title={"Días de 25 horas"} text={"El medio ambiente también controla las horas de nuestro reloj. La velocidad de rotación de la Tierra está disminuyendo gradualmente; lo que significa que, en unos 140 millones de años a partir de ahora, la duración de un día en la Tierra será de 25 horas."}/>
                </div>
                <Footer/> 
            </div>
        </>
    )
}

export default Home