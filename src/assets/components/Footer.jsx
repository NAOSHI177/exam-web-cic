import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
      <footer className='bg-[#9cdbff] py-8'>
        <div className="flex flex-col lg:flex-row items-center justify-between mx-auto bg-[#9cdbff] w-full lg:w-[960px] px-4 lg:px-0">
          <div className="max-w-lg bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 lg:mb-0 mt-10 lg:mt-0">
            <div className="mb-4">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="email">
                Correo Electrónico
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="email"
                placeholder="Ingrese su correo electrónico"
              />
            </div>
            <div className="mb-6">
              <label className="block text-white text-sm font-bold mb-2" htmlFor="message">
                Mensaje
              </label>
              <textarea
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="message"
                placeholder="Escriba su mensaje"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button">
                Enviar
              </button>
            </div>
          </div>

          <div className="mt-10 ">
            <ul className="list-none  flex lg:flex-col text-2xl lg:text-4xl justify-between  items-center">
              <li className='m-4'><a href="https://www.facebook.com/ciccde" ><FontAwesomeIcon icon={faFacebook}/></a></li>
              <li className='m-4'><a href="https://www.instagram.com/ciccdeoficial/" ><FontAwesomeIcon icon={faInstagram}/></a></li>
              <li className='m-4'><a href="https://api.whatsapp.com/send?phone=595961935646" ><FontAwesomeIcon icon={faWhatsapp}/></a></li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer;
