import './App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'



function App() {
  return (
    <>
     <header className='bg-[#9cdbff]'>
        <nav>
          <div className="flex w-full flex-col bg-[#1046ea]">
              <div className="flex w-[960px] bg-[#0d0b90] m-auto mt-[40px] rounded-t-[50px] items-center" >
              <div>
                <img src="./src/assets/img/logos/cic.png" width="200"></img>
              </div>
              <div className="text-white flex flex-col">
                <h1 className="text-[46px]">Colegio Inmaculada Concepcion</h1>
              </div>
            </div>
          </div>
            <div className='bg-[#9cdbff] justify-center items-center' >
              <ul className="flex w-[960px] m-auto justify-center items-center bg-[#5e9dc1]">
                <li className="no-underline px-5 py-1 rounded-lg text-lg text-white leading-[35px] transform hover:scale-170 custom-hover hover:bg-[#640d0d] hover:text-[#eeff00]">
                  <a href="#">Inicio</a>
                </li>
                <li className="no-underline px-5 py-1 rounded-lg text-lg text-white leading-[35px] transform hover:scale-170 custom-hover hover:bg-[#640d0d] hover:text-[#eeff00]">
                  <a href="#">Sobre Nosotros</a>
                </li >
                <li className="no-underline px-5 py-1 rounded-lg text-lg text-white leading-[35px] transform hover:scale-170 custom-hover hover:bg-[#640d0d] hover:text-[#eeff00]">
                  <a href="#">Cursos</a>
                </li>
                <li className="no-underline px-5 py-1 rounded-lg text-lg text-white leading-[35px] transform hover:scale-170 custom-hover hover:bg-[#640d0d] hover:text-[#eeff00]">
                  <a href="#">Galeria</a>
                </li >
                <li className="no-underline px-5 py-1 rounded-lg text-lg text-white leading-[35px] transform hover:scale-170 custom-hover hover:bg-[#640d0d] hover:text-[#eeff00]">
                  <a href="#">Contactos</a>
                </li >
              </ul>
            </div>
        </nav>
     </header>
     <main className='bg-[#9cdbff]'> 
          <div className="w-[960px] flex m-[auto]">
            <img src="./src/assets/img/emilie.png"></img>
          </div>
          <div className='flex justify-between items-center mx-auto mt-1 w-[960px] text-center space-x-4'>
          <div>
              <div><img src="./src/assets/img/en.jpg" className='rounded-full'></img></div>
              <div><p className='text-blue-900 mt-5'>Los mejores didacticos</p></div>
            </div>
            <div>
              <div><img src="./src/assets/img/sol.jpg" className='rounded-full'></img></div>
              <div><p className='text-blue-900 mt-5'>Somos una familia</p></div>
            </div>
            <div>
              <div><img src="./src/assets/img/fe.jpg" className='rounded-full'></img></div>
              <div><p className='text-blue-900 mt-5'>Una institucion cristiana</p></div>
            </div>
          </div>
          <div className="mx-auto w-[960px] h-[450px] mt-12">
            <div> 
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230830.708468806!2d-57.5635456!3d-25.31328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68ffb8596108d%3A0x52e1f45c5b57ed00!2sColegio%20Inmaculada%20Concepci%C3%B3n!5e0!3m2!1ses!2spy!4v1717679957518!5m2!1ses!2spy" width="960" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
        </main>
  <footer className="flex items-center justify-around mx-auto mt-12 w-[960px]">
    <div className="max-w-lg bg-blue-900 shadow-md rounded px-8 pt-6 pb-8 mb-4">
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
  </footer>
    </>
  )
}

export default App
