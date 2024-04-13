import {useState} from 'react';
import {projectsPortfolio} from '../../data/portfolio/portfolio';
// Import Swiper React components
import {Swiper, SwiperSlide} from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import {Keyboard, Pagination, Navigation} from 'swiper/modules';
// import CustomButton from '../general/CustomButton';
import BoxCompoent from '../general/BoxCompoent';
import calculateMonthsElapsed from '../../helpers/getMonths';
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
                            className="group mx-4 font-body relative"
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterChange('all');
                            }}
                        >
                            TODOS
                            <span className="absolute top-5 left-0 w-full h-1 bg-primaryContainer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                        </button>
                        <button
                            className="group mx-4 font-body relative"
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterChange('mobile');
                            }}
                        >
                            APLICACIONES MOVILES
                            <span className="absolute top-5 left-0 w-full h-1 bg-primaryContainer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                        </button>
                        <button
                            className="group mx-4 font-body relative"
                            onClick={(e) => {
                                e.preventDefault();
                                handleFilterChange('web');
                            }}
                        >
                            APLICACIONES WEB
                            <span className="absolute top-5 left-0 w-full h-1 bg-primaryContainer transition-all duration-300 ease-in-out opacity-0 group-hover:opacity-100"></span>
                        </button>
                    </div>
                    <div className="w-10/12 h-96 bg-secondaryContainer flex content-center rounded-lg">
                        <Swiper
                            slidesPerView={1}
                            spaceBetween={30}
                            keyboard={{
                                enabled: true,
                            }}
                            pagination={{
                                clickable: true,
                            }}
                            navigation={true}
                            modules={[Keyboard, Pagination, Navigation]}
                            className="w-full h-full p-3"
                        >
                            {filterProjects.map((project) => (
                                <SwiperSlide key={project.id}>
                                    <div className="m-4 mt-7 h-80 flex">
                                        <div className="w-2/4 pl-12">
                                            <span className="text-primaryContainer font-titleMedium font-bold text-4xl">
                                                {project.name}
                                            </span>
                                            <p className="mt-10 font-body">
                                                {project.caption}
                                            </p>
                                            <div className="my-5 flex gap-10">
                                                <BoxCompoent
                                                    data={project.client}
                                                />
                                                <BoxCompoent
                                                    data={calculateMonthsElapsed(
                                                        project.actividad,
                                                    )}
                                                />
                                                <BoxCompoent
                                                    data={project.services}
                                                />
                                            </div>
                                            <button className="bg-primaryContainer text-white font-body w-2/6 h-1/6 rounded-lg">
                                                VER MAS
                                            </button>
                                        </div>
                                        <div className="w-2/4 flex justify-center items-center">
                                            <img
                                                className="object-cover h-3/4 w-3/4 rounded-lg shadow-2xl"
                                                src={
                                                    project.image == ''
                                                        ? '../../../public/assets/portfolio/No-Image.png'
                                                        : project.image
                                                }
                                                alt={project.name}
                                            />
                                        </div>
                                    </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
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
