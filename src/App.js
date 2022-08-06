import "./App.css";
import lista from "./Lista_testimonios.js";
import Testimonio from "./componentes/Testimonio.js";

function App() {
    function llenar() {
        return "lorem ipsum";
    }

    return (
        <div className="App">
            <div className="contenedor-principal">
                <h1>Here is what our alumn say about freeCodeCamp:</h1>
                <Testimonio
                    imagen={lista[0].imagen}
                    nombre={lista[0].nombre}
                    pais={lista[0].pais}
                    cargo={lista[0].cargo}
                    empresa={lista[0].empresa}
                    testimonio={lista[0].testimonio}
                />
                <Testimonio
                    imagen={lista[1].imagen}
                    nombre={lista[1].nombre}
                    pais={lista[1].pais}
                    cargo={lista[1].cargo}
                    empresa={lista[1].empresa}
                    testimonio={lista[1].testimonio}
                />
                <Testimonio
                    imagen={lista[2].imagen}
                    nombre={lista[2].nombre}
                    pais={lista[2].pais}
                    cargo={lista[2].cargo}
                    empresa={lista[2].empresa}
                    testimonio={lista[2].testimonio}
                />
            </div>
        </div>
    );
}

export default App;
