import Informaciones from "./Informaciones";
import emilie from '/src/assets/img/emilie.png';
const Main = () => {
  return (
    <>
      <main className="bg-[#9cdbff]">
        <div className="max-w-[960px] mx-auto">
          <img
            src={emilie}
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