import SideBar from '../Components/SideBar'
import banner from '../Resources/CarWash4.jpeg'

const About = () => {
    return(
        <>
            <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
                <img src={banner} className="hidden lg:flex lg:w-full lg:h-screen opacity-20"></img>
                <SideBar/>
                <div className="flex absolute h-full w-5/6 lg:w-3/4 lg:h-5/6 items-start overflow-y-auto lg:overflow-hidden"> 
                    <div className="w-full ml-5 flex flex-col lg:flex-row lg:absolute justify-center lg:justify-around text-white item-start">
                        <div className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis">
                            <h2 className="font-bold text-xl">¿Quiénes somos?</h2>
                            <p className="w-full p-5">
                                Flash Wash es una empresa salvadoreña que tiene como objetivo principal la prestación de un servicio
                                de calidad en el lavado de todo tipo de vehículo, y generar confianza y satisfacción en los clientes.
                            </p>
                        </div>
                        <div className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis">
                            <h2 className="font-bold text-xl">Misión</h2>
                            <p className="w-full p-5">
                                Somos una empresa amigable con el medio ambiente dedicada a satisfacer la necesidad de los
                                clientes que requieren un servicio de limpieza para sus vehículos con eficiencia, calidad y a precios
                                accesibles hasta la comodidad de su casa u oficina.
                            </p>
                        </div>
                        <di className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis">
                            <h2 className="font-bold text-xl">Visión</h2>
                            <p className="w-full p-5">
                                Ser una empresa que obtenga el reconocimiento de calidad y eficiencia de parte de sus clientes,
                                que contribuya a la generación de empleos a través de los servicios de limpieza de autos y convertirnos
                                en una institución de referencia en el lavado de autos.
                            </p>
                        </di>
                        <div className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis">
                            <h2 className="font-bold text-xl">Valores</h2>
                            <p className="w-full p-5">
                                Eficiencia, responsabilidad, empatía, calidad, ambiente de trabajo óptimo, puntualidad y
                                excelencia.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About