const About = () => {
    return (
        <>
            <section
                id="about"
                className="min-h-screen md:max-h-screen mb-20 md:mb-0 mt-20 md:mt-0 flex md:items-center justify-center"
            >
                <div className="w-10/12  md:grid flex flex-col md:grid-cols-2 md:grid-rows-2 gap-4 h-full bg-[#A3F3BE] rounded-lg">
                    <div className=" md:row-span-2 flex justify-center items-center">
                        <img
                            className="md:h-4/5"
                            src="/assets/portfolio/Business-mission-pana-1.png"
                            alt=""
                        />
                    </div>
                    <div className="md:pt-5 md:pr-10 px-10 pb-10">
                        <h1 className="pb-5 font-titleMedium text-4xl font-bold text-primaryContainer">
                            Misión
                        </h1>
                        <p>
                            Nuestra misión es crear sitios web de calidad
                            superior que resalten la presencia en línea de
                            nuestros clientes, fusionando creatividad,
                            innovación y experiencia técnica para ofrecer
                            soluciones visualmente atractivas, funcionales e
                            intuitivas, adaptadas a cada proyecto.
                        </p>
                    </div>
                    <div className="md:pr-10 px-10 pb-10">
                        <h1 className="pb-5 font-titleMedium text-4xl font-bold text-primaryContainer">
                            Visión
                        </h1>
                        <p>
                            Nuestra visión es elevar constantemente la calidad
                            de nuestros servicios con cada producto que
                            entregamos, mientras aspiramos a un crecimiento
                            continuo como grupo.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default About;
