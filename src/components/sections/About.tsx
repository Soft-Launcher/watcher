
const About = () => {
  return (
    <>
      <section id="about" className="h-96 flex justify-center mb-20">
        <div className="w-10/12  grid grid-cols-2 grid-rows-2 gap-4 h-full bg-[#A3F3BE] rounded-lg">
            <div className=" row-span-2 flex justify-center items-center">
              <img className="h-4/5" src="../../../public/assets/Portfolio/Business-mission-pana-1.png" alt="" />
            </div>
            <div className="pt-5 pr-10">
              <h1 className="pb-5 font-titleMedium text-4xl font-bold text-primaryContainer">Misión</h1>
              <p>Nuestra misión es crear sitios web de calidad superior que resalten la presencia en línea de nuestros clientes, fusionando creatividad, innovación y experiencia técnica para ofrecer soluciones visualmente atractivas, funcionales e intuitivas, adaptadas a cada proyecto.</p>
            </div>
            <div className="pr-10">
            <h1 className="pb-5 font-titleMedium text-4xl font-bold text-primaryContainer">Visión</h1>
              <p>Nuestra visión es elevar constantemente la calidad de nuestros servicios con cada producto que entregamos, mientras aspiramos a un crecimiento continuo como grupo.</p>
            </div>
        </div>
      </section>
    </>
  );
};

export default About;
