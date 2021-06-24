import axios from 'axios'
import React , {useEffect, useState, useRef} from 'react'
import { useHistory } from 'react-router-dom'
import { useMutation } from 'react-query'


const Login = () =>{
  const history = useHistory()
  const [nombre, setNombre] = useState("")
  const [contrasenia, setContrasenia] = useState("") 
  const name = useRef(null),  password = useRef(null)


  useEffect(() => {
      if(localStorage.getItem('user-info')){
        history.push('/home')
      }
  }, []);
  

  async function login(){
      console.log(`${nombre}`, `${contrasenia}`)
      let item = {nombre, contrasenia}
      let result = await fetch("https://flashwashapi.herokuapp.com/add",{
          method: 'POST',
          headers: {
              "Content-type":"application/json",
              "Accept":"application/json"
          },
          body: JSON.stringify(item)

      });
      console.log("ho" + `${result}`)
      //result = await result.json()
      //result = JSON.parse(result);
      //console.log(`${result}`)
      //alert("Hi")
      //localStorage.setItem("user-info", JSON.stringify(result))
      history.push('/home')
  }


    return( 
        <>

            <div className="font-sans">
            <div className="relative min-h-screen flex flex-col sm:justify-center items-center bg-gray-100 ">
                <div className="relative sm:max-w-sm w-full">
                <div className="card bg-blue-400 shadow-lg  w-full h-full rounded-3xl absolute  transform -rotate-6" />
                <div className="card bg-red-400 shadow-lg  w-full h-full rounded-3xl absolute  transform rotate-6" />
                <div className="relative w-full rounded-3xl  px-6 py-4 bg-gray-100 shadow-md">
                    <label htmlFor className="block mt-3 text-sm text-gray-700 text-center font-semibold">
                    Login
                    </label>
                    <div>
                        <input type="name" placeholder="Nombre" onChange={(e) => setNombre(e.target.value)}
                         className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 
                         focus:bg-blue-100 focus:ring-0" />
                    </div>
                    <div className="mt-7">                
                        <input type="password" placeholder="Contraseña" onChange={(e) => setContrasenia(e.target.value)}
                        className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-xl shadow-lg hover:bg-blue-100 
                        focus:bg-blue-100 focus:ring-0" />                           
                    </div>
                    <div className="mt-7">
                        <button  onClick={login} className="bg-blue-500 w-full py-3 rounded-xl text-white shadow-xl
                         hover:shadow-inner focus:outline-none transition duration-500 ease-in-out  
                         transform hover:-translate-x hover:scale-105">
                        Login
                        </button>
                    </div>
                </div>
                </div>
            </div>
            </div>

         </>
    )
}

    
export default Login