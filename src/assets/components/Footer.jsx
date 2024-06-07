import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <>
        <footer className='bg-[#9cdbff]'>
            <div className="flex items-center justify-around mx-auto bg-[#9cdbff] w-[960px]">
                <div className="max-w-lg bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-10">
                    <div className="mb-4">
                        <label className="block text-white text-sm font-bold mb-2">
                        Correo Electrónico
                        </label>
                        <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="email" type="email"
                        placeholder="Ingrese su correo electrónico"></input>
                    </div>
                    <div className="mb-6">
                        <label className="block text-white text-sm font-bold mb-2">
                        Mensaje
                        </label>
                        <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="message" placeholder="Escriba su mensaje"></textarea>
                    </div>
                    <div className="flex items-center justify-between">
                        <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        type="button">
                        Enviar
                        </button>
                    </div>
                    </div>

                    <div>
                    <ul className="list-none space-y-11 text-4xl">
                        <li><a href=""><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a href=""><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
            </div>
    </footer>
    </>
  )
}

export default Footer
