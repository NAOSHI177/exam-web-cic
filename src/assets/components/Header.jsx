import cicLogo from '/src/assets/img/logos/cic.png'

const Header = () => {
    const navItems = [
      { name: 'Inicio', href: '#' },
      { name: 'Sobre Nosotros', href: '#about' },
      { name: 'Cursos', href: '#courses' },
      { name: 'Galeria', href: '#gallery' },
      { name: 'Contactos', href: '#contact' },
    ];
  
    return (
      <>
        <header className='bg-[#9cdbff]'>
          <nav>
            <div className="flex w-full flex-col bg-[#1046ea]">
              <div className="flex flex-col md:flex-row w-full md:w-[720px] lg:w-[960px] bg-[#0d0b90] m-auto mt-[40px] rounded-t-[50px] items-center p-4 md:p-0">
                <div className="flex-shrink-0">
                  <img src={cicLogo} width="200" className="mx-auto md:mx-0" alt="CIC Logo" />
                </div>
                <div className="text-white flex flex-col text-center md:text-left mt-4 md:mt-0">
                  <h1 className="text-[26px] md:text-[36px] lg:text-[46px]">Colegio Inmaculada Concepcion</h1>
                </div>
              </div>
            </div>
            <div>
              <div className='bg-[#9cdbff] flex justify-center items-center '>
                <ul className="flex lg:flex-row flex-wrap w-full md:w-[720px] lg:w-[960px] m-auto justify-center items-center bg-[#5e9dc1] p-4 space-y-2 md:space-y-0 md:flex-col sm:flex-col">
                  {navItems.map((item, index) => (
                    <li key={index} className="no-underline px-5 py-1 rounded-lg text-sm md:text-lg text-white leading-[35px] transform hover:scale-105 hover:bg-[#640d0d] hover:text-[#eeff00]">
                      <a href={item.href}>{item.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </>
    );
  }
  
  export default Header;
  