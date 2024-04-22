import CustomInput from '../general/CustomInput';
import CustomButton from '../general/CustomButton';
import {useState} from 'react';
import MenuItems from '../navigation/MenuItems';

const Contact = () => {
    const scrollTo = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            const navigationHeight =
                document.getElementById('navigation')?.offsetHeight;
            window.scrollTo({
                top: element.offsetTop - (navigationHeight || 0),
                behavior: 'smooth', // Desplazamiento suave
            });
        }
    };

    const handleSubmit = (event: any) => {
        event.preventDefault();
        console.log('Valor del input:');
    };

    return (
        <>
            <footer id="contact" className="w-full min-h-96 bg-secondary ">
                <div className="w-full py-12 flex flex-wrap items-center justify-center">
                    <div className="w-full md:w-5/12 lg:w-4/12 flex justify-center items-center mb-8 md:mb-0">
                        <img
                            src="./logo-white.png"
                            alt="LOGO"
                            width={300}
                            height={150}
                        />
                    </div>
                    <div className="w-full md:w-5/12 lg:w-4/12 flex flex-col items-center mb-8 md:mb-0">
                        <h4 className="font-body font-bold text-white text-2xl pb-12">
                            NAVEGACION
                        </h4>
                        <nav>
                            <ul className="flex flex-col justify-center items-center list-none gap-2">
                                <MenuItems
                                    onclick={() => scrollTo('home')}
                                    title="INICIO"
                                />
                                <MenuItems
                                    onclick={() => scrollTo('about')}
                                    title="NOSOTROS"
                                />
                                <MenuItems
                                    onclick={() => scrollTo('portfolio')}
                                    title="PORTAFOLIO"
                                />
                                <MenuItems
                                    onclick={() => scrollTo('team')}
                                    title="EQUIPO"
                                />
                                <MenuItems
                                    onclick={() => scrollTo('testimonials')}
                                    title="TESTIMONIOS"
                                />
                                <MenuItems
                                    onclick={() => scrollTo('contact')}
                                    title="CONTACTO"
                                />
                            </ul>
                        </nav>
                    </div>
                    <div className="w-full md:w-6/12 lg:w-4/12 flex flex-col items-center">
                        <h4 className="font-body font-bold text-white text-2xl pb-12">
                            PROPUESTAS
                        </h4>
                        <form
                            onSubmit={handleSubmit}
                            className="flex flex-col items-center w-full"
                        >
                            <CustomInput
                                type="text"
                                placeholder="Ingrese su correo"
                            />
                            <CustomInput
                                type="text"
                                placeholder="Envía tu propuesta"
                            />
                            <CustomButton type="submit" title="ENVIAR" />
                        </form>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Contact;
