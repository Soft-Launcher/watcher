import {useState} from 'react';
import {projectsPortfolio} from '../../data/portfolio/portfolio';

const Portfolio = () => {
    const [filter, setFilter] = useState('all');

    const handleFilterChange = (newOption: any) => {
        setFilter(newOption);
    };

    //Filtrar tarjetas segun la categoria
    const filterProjects =
        filter === 'all'
            ? projectsPortfolio
            : projectsPortfolio.filter(
                  (project) => project.category === filter,
              );

    return (
        <>
            <section id="portfolio" className="w-full min-h-screen">
                <h1 className="font-titleMedium text-4xl font-bold text-primaryContainer alignce text-center mt-3">
                    PORTAFOLIO
                </h1>
                <div className="flex flex-col items-center m-3">
                    <div className="gap-60 flex flex-wrap content-between m-10 text-primaryContainer">
                        <button
                            className=""
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterChange('all');
                            }}
                        >
                            TODOS
                        </button>
                        <button
                            className=""
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterChange('mobile');
                            }}
                        >
                            APLICACIONES MOVILES
                        </button>
                        <button
                            className=""
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterChange('web');
                            }}
                        >
                            APLICACIONES WEB
                        </button>
                    </div>
                    <div className="w-10/12 h-96 bg-secondaryContainer flex content-center rounded-lg">
                        <div className=" w-2/4 flex justify-center">
                            <h3>contenido</h3>
                        </div>
                        <div className="w-2/4 flex justify-center items-center">
                            <img
                                src="../../../public/assets/portfolio/ibarra.jpg"
                                alt=""
                                className="object-cover h-3/4 w-3/4 rounded-lg"
                            />
                        </div>
                        {/* {filterProjects.map((project) => (
                            <div
                                key={project.id}
                                className="flex justify-center"
                            >
                                <div className="bg-red-400 w-full">
                                    <h3>{project.name}</h3>
                                </div>
                                <div className="bg-blue-500 w-full">
                                    <img
                                        src={
                                            project.image == ''
                                                ? '../../assets/No-Image.png'
                                                : project.image
                                        }
                                        alt={project.name}
                                    />
                                </div>
                            </div>
                        ))} */}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Portfolio;
