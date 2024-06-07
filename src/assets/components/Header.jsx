const Header = () => {
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
            <div>
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
            </div>
            </nav>
        </header>
    </>
  )
}

export default Header
