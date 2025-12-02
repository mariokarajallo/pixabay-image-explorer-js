# Buscador de Imágenes Pixabay

Este proyecto es una aplicación web que permite buscar imágenes de alta calidad utilizando la API de Pixabay. Diseñada para ser rápida y fácil de usar, ofrece una interfaz limpia para explorar y visualizar resultados de imágenes.

## Demo

Para mirar la demo del proyecto visita: [Pixabay Image Explorer](https://pixabay-image-explorer-js.netlify.app/)

![preview](pixabay-image-explorer.gif)

## Características

- **Búsqueda de Imágenes**: Permite buscar imágenes por términos específicos.
- **Paginación**: Navegación sencilla a través de múltiples páginas de resultados (40 imágenes por página).
- **Tarjetas de Información**: Cada imagen muestra la cantidad de "Me gusta" y "Veces vista".
- **Enlace Directo**: Botón para ver la imagen en alta resolución directamente en Pixabay.
- **Diseño Responsivo**: Adaptado a diferentes tamaños de pantalla utilizando Tailwind CSS.

## Tecnologías utilizadas

- **HTML5**: Estructura semántica del proyecto.
- **Tailwind CSS**: Framework de CSS para el diseño y estilos rápidos.
- **JavaScript (ES6+)**: Lógica de la aplicación.
  - **Fetch API**: Para realizar peticiones HTTP a la API de Pixabay.
  - **Async/Await**: Para manejar operaciones asíncronas de manera limpia.
  - **Generadores**: Utilizados para la lógica de paginación eficiente.
- **Vite**: Entorno de desarrollo rápido y herramienta de construcción.
- **Node.js**: Entorno de ejecución para las herramientas de desarrollo.

## Instalación y requisitos

Para ejecutar este proyecto localmente, necesitas tener instalado **Node.js** en tu computadora.

1.  **Clonar el repositorio**:

    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd pixabay-image-explorer-js
    ```

2.  **Instalar dependencias**:

    ```bash
    npm install
    ```

3.  **Configurar variables de entorno**:
    Crea un archivo `.env` en la raíz del proyecto y agrega tu API Key de Pixabay:

    ```env
    VITE_API_KEY=tu_api_key_aqui
    ```

    > Nota: Puedes obtener una API Key registrándote gratuitamente en [Pixabay](https://pixabay.com/api/docs/).

4.  **Ejecutar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    Abre el enlace que aparece en la terminal (usualmente `http://localhost:5173/`) en tu navegador.

## Scripts Disponibles

En el directorio del proyecto, puedes ejecutar:

- `npm run dev`: Ejecuta la aplicación en modo de desarrollo.
- `npm run build`: Construye la aplicación para producción en la carpeta `dist`.
- `npm run preview`: Sirve localmente la versión de producción construida.

## Cómo funciona

1.  Ingresa un término de búsqueda en el campo de texto (ej. "Café", "Fútbol").
2.  Presiona el botón "BUSCAR IMÁGENES" o la tecla Enter.
3.  La aplicación consultará la API de Pixabay y mostrará los resultados en una cuadrícula.
4.  Utiliza los botones de paginación en la parte inferior para ver más resultados.

### Validaciones

- **Campo vacío**: Si intentas buscar sin escribir nada, la aplicación mostrará una alerta indicando "Agrega un término de búsqueda".

## Estructura de archivos

```bash
.
├── .env                # Variables de entorno (API Key)
├── .gitignore          # Archivos ignorados por Git
├── css/
│   ├── custom.css      # Estilos personalizados adicionales
│   └── tailwind.min.css # Archivo local de Tailwind
├── index.html          # Archivo principal HTML
├── js/
│   └── app.js          # Lógica principal de la aplicación
├── LICENSE             # Archivo de licencia
├── package.json        # Dependencias y scripts del proyecto
├── package-lock.json   # Versiones exactas de dependencias
└── README.md           # Documentación del proyecto
```

- **index.html**: Contiene la estructura HTML y el formulario de búsqueda.
- **js/app.js**: Maneja la interacción con el DOM, la validación del formulario y las peticiones a la API.
- **css/custom.css**: Estilos específicos para el fondo degradado.
- **.env**: Archivo para almacenar variables de entorno sensibles como la API Key.
- **package.json**: Define las dependencias y scripts del proyecto.

## Contribuciones

¡Las contribuciones son bienvenidas! Si deseas mejorar este proyecto:

1.  Haz un Fork del repositorio.
2.  Crea una nueva rama (`git checkout -b feature/NuevaCaracteristica`).
3.  Realiza tus cambios y haz commit (`git commit -m 'Agrega nueva característica'`).
4.  Haz push a la rama (`git push origin feature/NuevaCaracteristica`).
5.  Abre un Pull Request.

### Sugerencias

- Mejorar el diseño de la paginación.
- Agregar filtros de búsqueda (por categoría, color, etc.).

## Créditos

- **Juan Pablo De la Torre Valdez** - Instructor y autor del contenido del curso - [Codigo Con Juan](https://codigoconjuan.com/).
- **Mario Karajallo** - Implementación del proyecto y mantenimiento - [Mario Karajallo](https://karajallo.com).

## Licencia

Este proyecto está bajo la licencia MIT. Véase `LICENSE.md` para más detalles.

---

⌨️ con ❤️ por [Mario Karajallo](https://karajallo.com)
