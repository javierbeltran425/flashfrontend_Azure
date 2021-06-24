import { useHistory } from 'react-router-dom'
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'

import Home from '../Pages/Home'

const SideBar = () => {
  const history = useHistory()

  function onClickAbout(e) {
    e.preventDefault()

    history.push('/about')
  }

  function onClickServices(e) {
    e.preventDefault()

    history.push('/services')
  }

  function onClickProducts(e) {
    e.preventDefault()

    history.push('/products')
  }

  function onClickHome(e) {
    e.preventDefault()

    history.push('/home')
  }

  function onClickContact(e) {
    e.preventDefault()

    history.push('/contact')
  }

  return (
      <>
        <nav className="absolute lg:w-24 lg:bg-opacity-0 lg:h-4/6 lg:mb-5 left-0 w-1/5 h-screen  flex justify-center px-2 py-3 bg-blue-300 mb-1 z-10">
            <ul className="flex flex-wrap items-center my-10 mx-1">
              <li className="lg:text-white cursor-pointer absolute mb-96"><Icon icon={faHome} onClick={onClickHome} className="ml-5 mb-80 text-3xl text-purple-800 hover:text-purple-500 lg:mb-20"></Icon></li>
              <li className="transform -rotate-90 lg:text-white cursor-pointer"><a onClick={onClickAbout}>Acerca de nosotros</a></li>
              <li className="transform -rotate-90 lg:text-white hidden lg:inline cursor-pointer"><a onClick={onClickServices}>Servicios</a></li>
              <li className="transform -rotate-90 lg:text-white cursor-pointer"><a onClick={onClickProducts}>Productos</a></li>
              <li className="transform -rotate-90 lg:text-white lg:hidden"><a onClick={onClickContact} >Contacto</a></li>
            </ul>
        </nav>
      </>
    );
  };
  
  export default SideBar;
  