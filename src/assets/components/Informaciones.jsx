const Informaciones = () => {

    const fotos = ["./src/assets/img/en.jpg", "./src/assets/img/sol.jpg", "./src/assets/img/fe.jpg"]
    const text = ["Los mejores didactivos", "Somos una familia", "Una institución cristiana"]

    return (
      <>
        <div className='flex justify-between items-center mx-auto mt-10 w-[960px] text-center space-x-4'>
            {
              fotos.map((fotos, i) =>{
                  return (
                    <>
                      <div><img src={fotos} className='rounded-full'></img>
                      <p className='text-blue-900 mt-5'>{text[i]}</p>
                      </div>
                    </>
                    )     
                  })
              }
        </div>
        <div className="mx-auto w-[960px] h-[450px] mt-12">
            <div> 
              <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230830.708468806!2d-57.5635456!3d-25.31328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68ffb8596108d%3A0x52e1f45c5b57ed00!2sColegio%20Inmaculada%20Concepci%C3%B3n!5e0!3m2!1ses!2spy!4v1717679957518!5m2!1ses!2spy" width="960" height="450" allowfullscreen="" loading="lazy"></iframe>
            </div>
          </div>
    </>
    )
  }
  
  export default Informaciones

  