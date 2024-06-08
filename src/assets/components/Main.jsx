import Informaciones from "./Informaciones";

const Main = () => {
  return (
    <>
      <main className="bg-[#9cdbff]">
        <div className="max-w-[960px] mx-auto">
          <img
            src="./src/assets/img/emilie.png"
            alt="Imagen"
            className="w-full h-auto"
          />
        </div>
        <Informaciones />
      </main>
    </>
  );
};

export default Main;