import { useState } from "react";
import MenuItems from "./MenuItems";
import CustomButton from '../general/CustomButton';
const Navigation = () => {
  const [activeRoute, setActiveRoute] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const navigationHeight =
        document.getElementById("navigation")?.offsetHeight;
      window.scrollTo({
        top: element.offsetTop - (navigationHeight || 0),
        behavior: "smooth", // Desplazamiento suave
      });
    }
    setActiveRoute(true);
  };

  return (
    <>
      <section id="navigation" className="w-screen fixed top-0 z-50">
        <nav className="bg-secondary w-full  h-20 mx-auto flex items-center">
          <a href="/" className=" flex items-center cursor-pointer mr-12">

          <img src="./logo-white.png" alt="LOGO" width={100} height={100}/>
          <span className="w-55 text-primary font-body text-2xl">
            <strong>

            SOFT LAUNCHER
            </strong>
            </span>
          </a>
          <div className="w-9/12 flex justify-end">

          <ul className="flex content-between items-center list-none relative mr-16">
            <MenuItems onclick={() => scrollTo("home")} title="INICIO" active={activeRoute}/>
            <MenuItems onclick={() => scrollTo("about")} title="NOSOTROS" active={activeRoute}/>
            <MenuItems
              onclick={() => scrollTo("portfolio")}
              title="PORTAFOLIO"
              active={activeRoute}
            />
            <MenuItems onclick={() => scrollTo("team")} title="EQUIPO" active={activeRoute}/>
            <MenuItems onclick={() => scrollTo("contact")} title="CONTACTO" active={activeRoute}/>
          </ul>
          <CustomButton title="INICIAR SESION"/>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
