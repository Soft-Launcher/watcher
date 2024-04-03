import { useState } from "react";

const Navigation = () => {
  const [click, setClick] = useState(false);

  const scrollTo = (id: string) => {
    let element = document.getElementById(id);

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
            <li onClick={() => scrollTo("home")}>INICIO</li>
            <li onClick={() => scrollTo("about")}>NOSOTROS</li>
            <li onClick={() => scrollTo("portfolio")}>PORTAFOLIO</li>
            <li onClick={() => scrollTo("team")}>EQUIPO</li>
            <li onClick={() => scrollTo("testimonials")}>TESTIMONIOS</li>
            <li onClick={() => scrollTo("contact")}>CONTACTO</li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Navigation;
