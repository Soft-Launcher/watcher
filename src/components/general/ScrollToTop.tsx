import * as React from "react";
import { FaArrowUp } from "react-icons/fa";
import { cn } from "../../utilities/cn";

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

  return (
    <div
      onClick={scrollTop}
      className={cn(
        "cursor-pointer w-12 h-12 box-border m-0 p-0 opacity-0 bg-secondary text-primary text-3xl rounded-full fixed right-0 bottom-0 transition-opacity duration-500 flex justify-center items-center",
        {
          "cursor-pointer opacity-100": isVisible,
          "": !isVisible,
        }
      )}
    >
      <FaArrowUp />
    </div>
  );
};

export default ScrollToTop;
