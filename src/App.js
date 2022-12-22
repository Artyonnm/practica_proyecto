import "./App.css";
import foto1 from "./assets/foto1.jpg";
import foto2 from "./assets/foto2.jpg";
import foto3 from "./assets/foto3.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "#", title: "Inicio" },
    { url: "#", title: "Encargos" },
    { url: "#", title: "Contacto" },
    { url: "#", title: "Acerca de" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={foto1} />
      <Slider
        imageSrc={foto2}
        title={"Nuestros productos."}
        subtitle={
          "Nuestro servicio ofrece lo que necesitas y a tu alcance."
        }
      />
      <Slider
        imageSrc={foto3}
        title={"Estamos comunicados contigo."}
        subtitle={"Ofrecemos servicio y asesoría para ti cuando quieras."}
        flipped={true}
      />
    </div>
  );
}

export default App;