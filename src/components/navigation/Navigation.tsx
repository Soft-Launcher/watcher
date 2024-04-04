import { useState } from "react";
import MenuItems from "./MenuItems";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);
    console.log(element);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest",
    });
    setClick(!click);
  };

  return (
    <>
      <section id="navigation" className="w-screen">
        <nav>
          <ul>
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
