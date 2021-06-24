import Footer from '../Components/Footer'
import SideBar from '../Components/SideBar'

import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'

const Contact = () =>{
    return(
        <>
            <div className="flex w-full h-screen overflow-hidden justify-center items-center bg-gray-800">
                <SideBar/>
                <div className="flex absolute h-full w-5/6 lg:w-3/4 lg:h-5/6 items-start overflow-y-auto lg:overflow-hidden items-center"> 
                    <div className="w-full ml-5 flex flex-col lg:flex-row lg:absolute justify-center lg:justify-around text-white item-start">
                        <div className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis items-center">
                            <div className="flex flex-wrap flew-col p-1">
                                <p className=" lg:text-white left-0 p-1 "><Icon icon={faWhatsapp} className="text-green-600 text-2xl mx-2"></Icon>Whatsapp: </p>
                                <p className=" lg:text-white left-0 p-2 bottom-0">0000-1111</p>
                            </div>
                        </div>
                        <div className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis items-center">
                            <div className="flex flex-wrap flew-col p-1">
                                <p className=" lg:text-white left-0 p-1"><Icon icon={faInstagram} className="text-pink-500 text-2xl mx-2"></Icon>Instagram: </p>
                                <p className=" lg:text-white left-0 p-2 bottom-0 ">@Flash_Wash</p>
                            </div>
                        </div>
                        <di className="flex flex-col text-center w-full lg:w-1/4 m-5 overflow-ellipsis items-center">
                            <div className="flex flex-wrap flew-col p-1">
                                <p className=" lg:text-white left-0 p-1 "><Icon icon={faFacebook} className="text-indigo-600 text-2xl mx-2"></Icon>Facebook: </p>
                                <p className=" lg:text-white left-0 p-2 bottom-0">Flash Wash</p>
                            </div>
                        </di>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact