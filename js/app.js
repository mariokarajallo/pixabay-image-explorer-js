const resultado = document.querySelector("#resultado");
const formulario = document.querySelector("#formulario");
const paginacionDiv = document.querySelector("#paginacion");
let registroPorPagina = 40;
let totalPaginas;
let iterador;
let paginaActual = 1;

window.onload = () => {
  formulario.addEventListener("submit", validarFormulario);
};

function validarFormulario(e) {
  e.preventDefault();
  const terminoBusqueda = document.querySelector("#termino").value;
  if (terminoBusqueda === "") {
    mostrarAlerta("Agrega un termino de busqueda");
    return;
  }

  buscarImagenes();
}

function mostrarAlerta(mensaje) {
  const existeAlerta = document.querySelector(".error");

  if (!existeAlerta) {
    const alerta = document.createElement("div");
    alerta.classList.add(
      "error",
      "bg-red-100",
      "border",
      "border-red-400",
      "text-red-700",
      "px-4",
      "py-3",
      "rounded",
      "max-w-lg",
      "mx-auto",
      "mt-6",
      "text-center",
      "absolute",
      "top-20",
      "left-0",
      "right-0",
      "z-50"
    );

    alerta.innerHTML = `
<strong class="font-bold">Error! </strong>
<span class="block sm:inline">${mensaje}</span>
    `;

    formulario.parentElement.appendChild(alerta);

    setTimeout(() => {
      alerta.remove();
    }, 3000);
  }
}

async function buscarImagenes() {
  const termino = document.querySelector("#termino").value;
  const key = import.meta.env.VITE_API_KEY;
  const url = `https://pixabay.com/api/?key=${key}&q=${termino}&per_page=${registroPorPagina}&page=${paginaActual}`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    totalPaginas = calcularPaginas(result.totalHits);
    mostrarImagenes(result.hits);
  } catch (error) {
    console.log(error);
  }
}

function calcularPaginas(total) {
  return parseInt(Math.ceil(total / registroPorPagina));
}

function* crearPaginador(total) {
  for (let i = 1; i <= total; i++) {
    yield i;
  }
}

function mostrarImagenes(imagenes) {
  while (resultado.firstChild) {
    resultado.removeChild(resultado.firstChild);
  }

  imagenes.forEach((imagen) => {
    const { previewURL, likes, views, largeImageURL, user } = imagen;

    resultado.innerHTML += `
      <div class="group relative bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100">
        <div class="relative aspect-w-16 aspect-h-9 overflow-hidden bg-gray-100">
          <img src="${previewURL}" alt="imagen de ${user}" class="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500">
          <div class="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 transition-opacity duration-300"></div>
        </div>
        
        <div class="p-4">
          <div class="flex justify-between items-center text-xs text-gray-500 mb-3">
             <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-red-500" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                </svg>
                <span>${likes}</span>
             </div>
             <div class="flex items-center gap-1">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4 text-gray-400" viewBox="0 0 20 20" fill="currentColor">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                  <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
                </svg>
                <span>${views}</span>
             </div>
          </div>
          
          <a href="${largeImageURL}" target="_blank" rel="noopener noreferrer" 
             class="block w-full bg-gray-50 hover:bg-gray-100 text-gray-700 text-center text-sm font-medium py-2 rounded-md transition-colors border border-gray-200 hover:border-gray-300">
            View High Res
          </a>
        </div>
      </div>
    `;
  });

  while (paginacionDiv.firstChild) {
    paginacionDiv.removeChild(paginacionDiv.firstChild);
  }

  imprimirpaginador();
}

function imprimirpaginador() {
  iterador = crearPaginador(totalPaginas);

  // Limitar la cantidad de botones mostrados si son muchos (opcional, pero buena práctica)
  // Por ahora mantenemos la lógica simple pero con mejor estilo

  while (true) {
    const { value, done } = iterador.next();
    if (done) return;

    const boton = document.createElement("a");
    boton.href = "#";
    boton.dataset.pagina = value;
    boton.textContent = value;
    boton.classList.add(
      "px-4",
      "py-2",
      "mx-1",
      "mb-2",
      "border",
      "rounded-md",
      "text-sm",
      "font-medium",
      "transition-colors",
      "duration-200"
    );

    if (value === paginaActual) {
      boton.classList.add("bg-red-500", "text-white", "border-red-500");
    } else {
      boton.classList.add(
        "bg-white",
        "text-gray-700",
        "border-gray-300",
        "hover:bg-gray-50"
      );
    }

    boton.onclick = (e) => {
      e.preventDefault(); // Prevenir salto de página
      paginaActual = value;
      buscarImagenes();
      // Scroll suave hacia arriba de los resultados
      resultado.scrollIntoView({ behavior: "smooth" });
    };

    paginacionDiv.appendChild(boton);
  }
}
