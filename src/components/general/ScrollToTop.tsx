import * as React from "react";
import { FaArrowUp } from "react-icons/fa";

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = React.useState(false);

  const scrollTop = () => {
    const scrollToTop = () => {
      const currentPosition = window.scrollY;
      if (currentPosition > 0) {
        window.scrollTo(0, currentPosition - currentPosition / 5); // Ajusta el divisor para controlar la velocidad de desplazamiento
        setTimeout(scrollToTop, 16); // Ajusta el tiempo para controlar la frecuencia de actualización (16 ms para apuntar a 60 FPS)
      }
    };
    scrollToTop();
  };

  React.useEffect(() => {
    //Manejar el evento de scroll para mostrar o no boton
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, [isVisible]);

  // {`${
  //   isVisible
  //     ? "opacity-100 cursor-pointer w-12 h-12 bg-red-600 text-white text-3xl fixed right-0 bottom-0 transition-opacity duration-500 flex justify-center items-center"
  //     : ""
  // }`}

  return (
    <div
      onClick={scrollTop}
      className={` ${isVisible ? "opacity-100 cursor-pointer" : ""}`}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTop;
