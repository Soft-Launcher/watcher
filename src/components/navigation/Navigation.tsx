import { useState } from "react";
import MenuItems from "./MenuItems";

const Navigation = () => {
  const [click, setClick] = useState(false);

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
  };

  return (
    <>
      <section id="navigation" className="w-screen fixed top-0 z-50">
        <nav className="bg-secondary flex content-center items-center w-full h-20 mx-auto">
          <ul className="flex content-between items-center list-none relative">
            <MenuItems onclick={() => scrollTo("home")} title="INICIO" />
            <MenuItems onclick={() => scrollTo("about")} title="NOSOTROS" />
            <MenuItems
              onclick={() => scrollTo("portfolio")}
              title="PORTAFOLIO"
            />
            <MenuItems onclick={() => scrollTo("team")} title="EQUIPO" />
            <MenuItems onclick={() => scrollTo("contact")} title="CONTACTO" />
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
