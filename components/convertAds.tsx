import { useEffect } from "react";

// Declara gtag como variable global
declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
    conversion?: () => void;
  }
}
const ConvertAds = () => {
  useEffect(() => {
    // Define la función de conversión globalmente
    window.conversion = function () {
      if (typeof window.gtag === "function") {
        window.gtag("event", "conversion", {
          send_to: "AW-17292929805",
        });
      }
    };

    // Escucha el evento de mensaje para disparar la conversión
    const handler = (e: MessageEvent) => {
      if (e.data === "conversion_event") {
        console.log("Señal de agendamiento enviada por Reservo");
        if (typeof window.conversion === "function") {
          window.conversion();
        }
      }
    };

    window.addEventListener("message", handler);

    // Limpieza al desmontar el componente
    return () => {
      window.removeEventListener("message", handler);
    };
  }, []);

  return null; // Este componente no renderiza nada visible
};

export default ConvertAds;