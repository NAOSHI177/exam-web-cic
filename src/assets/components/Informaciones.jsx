const Informaciones = () => {
  const fotos = [
    "./src/assets/img/en.jpg",
    "./src/assets/img/sol.jpg",
    "./src/assets/img/fe.jpg"
  ];
  const text = [
    "Los mejores didactivos",
    "Somos una familia",
    "Una institución cristiana"
  ];

  return (
    <>
      <div className="flex flex-col md:flex-row justify-between items-center mx-auto mt-10 max-w-[960px] text-center space-x-4">
        {fotos.map((foto, i) => (
          <div key={i} className="flex flex-col items-center mb-8 md:mb-0">
            <img src={foto} className="rounded-full w-32 h-32" alt="" />
            <p className="text-blue-900 mt-5">{text[i]}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto max-w-[960px] h-[450px] mt-12">
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d230830.708468806!2d-57.5635456!3d-25.31328!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94f68ffb8596108d%3A0x52e1f45c5b57ed00!2sColegio%20Inmaculada%20Concepci%C3%B3n!5e0!3m2!1ses!2spy!4v1717679957518!5m2!1ses!2spy"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Informaciones;