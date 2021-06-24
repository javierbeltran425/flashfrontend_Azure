import FactCard from './FactCard'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'


const Footer = () => {
    return(
        <> 
     
            <div className="hidden lg:flex lg:absolute lg:w-1/4 bottom-0 left-0 mb-5  flex-row items-center">
            <p className="transform -rotate-90 lg:text-white lg:p-3 xs:hidden">Contacto</p>
            <div className="flex flex-wrap flew-col p-1">
            <p className=" lg:text-white left-0 p-1 "><Icon icon={faWhatsapp} className="text-green-600 text-2xl"></Icon>Whatsapp</p>
            <p className=" lg:text-white left-0 p-2 bottom-0">0000-1111</p>
            </div>
            <div className="flex flex-wrap flew-col p-1">
            <p className=" lg:text-white left-0 p-3"><Icon icon={faInstagram} className="text-pink-500 text-2xl "></Icon>Instagram</p>
            <p className=" lg:text-white left-0 p-2 bottom-0 ">@Flash_Wash</p>
            </div>
            <div className="flex flex-wrap flew-col p-1">
            <p className=" lg:text-white left-0 p-1 "><Icon icon={faFacebook} className="text-indigo-600 text-2xl "></Icon>Facebook</p>
            <p className=" lg:text-white left-0 p-2 bottom-0">Flash Wash</p>
            </div>
            <p className="hidden lg:flex transform -rotate-90 lg:text-white lg:p-1 mb-1 z-10"> Promociones</p>
            </div>
            
            <div className="absolute ml-20 lg:bottom-0 right-0 lg:w-2/3 lg:h-30 flex items-center h-1/4 w-72 bottom-0 overflow-x-auto" >
                <FactCard title={"Pack #1 - $15.00"} text={"Lavado con hidro lavadora y jabón eco amigable, siliconado, aspirado y pasteado para autos compactos y grandes"}/>
                <FactCard title={"Pack #2 - $20.00"} text={"Lavado con hidro lavadora y jabón eco amigable, siliconado, aspirado y limpieza de rines para autos grandes y compactos"}/>
                <FactCard title={"Pack #3 - $23.99"} text={"Lavado con hidro lavadora y jabón eco amigable, lavado de motor a vapor, siliconado y aspirado para auto grande y compacto"}/>
                <FactCard title={"Pack #4 - $15.00"} text={"Pulido de silvines para restauración y mantenimiento preventivo y pasteado a máquina para abrillantamiento"}/>
            </div>
     
        </>
    )
}

export default Footer